// ── State ──
let currentGrid = null;
let answers = {};
let errors = 0;
let score = 0;
let activeCell = null;
let gameOver = false;
let usedArtists = new Set();
let highlightedIndex = -1;

// ── Utils ──
function normalize(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

function matchCategory(cat, artist) {
  const key = normalize(artist.key);
  switch (cat.type) {
    case "containsLetter":
      return key.includes(cat.letter.toLowerCase());
    case "firstLetter":
      return key.startsWith(cat.letter.toLowerCase());
    case "firstNameLetter": {
      const fn = artist.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      return fn.startsWith(cat.letter.toLowerCase());
    }
    case "lastLetter":
      return key.endsWith(cat.letter.toLowerCase());
    case "movement":
      return artist.movements.includes(cat.id);
    case "nationality":
      return artist.nationality === cat.id;
    case "medium":
      return artist.media.includes(cat.id);
    case "city":
      return artist.cities.includes(cat.id);
    case "century": {
      const start = (cat.century - 1) * 100;
      const end = cat.century * 100;
      return artist.born < end && (artist.died || 2026) > start;
    }
    case "alive":
      return artist.died === null;
    case "doubleLetter": {
      for (let i = 0; i < key.length - 1; i++) {
        if (key[i] === key[i + 1] && /[a-z]/.test(key[i])) return true;
      }
      return false;
    }
    default:
      return false;
  }
}

function getSolutions(rowCat, colCat) {
  return ARTISTS.filter(a => matchCategory(rowCat, a) && matchCategory(colCat, a));
}

function formatDisplayDate(dateStr) {
  const [y, m, d] = dateStr.split('-');
  return `${d}/${m}/${y}`;
}

function todayStr() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

// ── Category descriptions for "?" popups ──
function getCategoryDescription(cat) {
  switch (cat.type) {
    case "movement":
      return `Désigne les artistes rattachés au mouvement « ${cat.label} ». Un artiste peut appartenir à plusieurs mouvements.`;
    case "nationality":
      return `Désigne les artistes de nationalité ${cat.label.toLowerCase()}.`;
    case "city":
      return `Désigne les artistes ayant vécu ou travaillé à ${CITY_LABELS[cat.id] || cat.id}.`;
    case "firstLetter":
      return `Désigne les artistes dont le nom de famille commence par la lettre « ${cat.letter} » (sans les accents).`;
    case "firstNameLetter":
      return `Désigne les artistes dont le prénom commence par la lettre « ${cat.letter} » (sans les accents).`;
    case "containsLetter":
      return `Désigne les artistes dont le nom de famille contient la lettre « ${cat.letter} » (sans les accents).`;
    case "medium":
      return `Désigne les artistes qui ont pratiqué : ${MEDIUM_LABELS[cat.id] || cat.id}.`;
    case "century":
      return `Désigne les artistes actifs au cours du ${cat.label.replace('Actif au ', '')} (entre ${(cat.century - 1) * 100} et ${cat.century * 100}).`;
    default:
      return cat.label;
  }
}

function getArtistSummary(artist) {
  const nat = NATIONALITY_LABELS[artist.nationality] || artist.nationality;
  const dates = artist.died ? `${artist.born}–${artist.died}` : `${artist.born}–…`;
  const mvts = artist.movements.map(m => MOVEMENT_LABELS[m] || m).join(', ');
  return `${artist.name}<br>${nat} · ${dates}<br>${mvts}`;
}

// ── How-to-play modal ──
function showHowToPlay() {
  const modal = document.getElementById('how-to-play-modal');
  if (localStorage.getItem('artodoku-hide-howto') === '1') {
    modal.classList.add('hidden');
    return;
  }
  modal.classList.remove('hidden');

  const closeModal = () => {
    if (document.getElementById('modal-dismiss-checkbox').checked) {
      localStorage.setItem('artodoku-hide-howto', '1');
    }
    modal.classList.add('hidden');
  };

  document.getElementById('modal-play-btn').addEventListener('click', closeModal);
  document.getElementById('modal-close-x').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
}

function showCategoryDetail(cat) {
  const modal = document.getElementById('cat-detail-modal');
  document.getElementById('cat-detail-title').textContent = cat.label;
  document.getElementById('cat-detail-desc').textContent = getCategoryDescription(cat);
  modal.style.display = 'flex';

  const close = () => { modal.style.display = 'none'; };
  document.getElementById('cat-detail-close').onclick = close;
  modal.onclick = (e) => { if (e.target === modal) close(); };
}

// ── Init ──
function init() {
  const params = new URLSearchParams(window.location.search);
  const requestedDate = params.get('date');
  const today = todayStr();

  if (requestedDate && requestedDate !== today) {
    currentGrid = generateGrid(requestedDate);
    document.querySelector('.grid-title').textContent = 'archive';
    const badge = document.createElement('span');
    badge.className = 'archive-badge';
    badge.textContent = `${currentGrid.difficulty}/5 · ${currentGrid.difficultyLabel}`;
    document.querySelector('.grid-title').appendChild(badge);
  } else {
    currentGrid = generateGrid(today);
  }

  document.getElementById('grid-date').textContent = formatDisplayDate(currentGrid.date);
  renderGrid();
  renderErrors();
  updateScore();
  showHowToPlay();

  document.getElementById('abandon-btn').addEventListener('click', onAbandon);

  document.addEventListener('click', (e) => {
    if (activeCell && !activeCell.element.contains(e.target)) {
      deactivateCell();
    }
  });
}

// ── Render grid ──
function renderGrid() {
  const grid = document.getElementById('game-grid');
  grid.innerHTML = '';

  grid.appendChild(el('div', 'corner'));

  currentGrid.cols.forEach(col => {
    const header = el('div', 'col-header');
    header.innerHTML = `<span class="header-help">?</span><span class="header-label">${col.label}</span>`;
    header.querySelector('.header-help').addEventListener('click', (e) => {
      e.stopPropagation();
      showCategoryDetail(col);
    });
    grid.appendChild(header);
  });

  currentGrid.rows.forEach((row, ri) => {
    const rh = el('div', 'row-header');
    rh.innerHTML = `<span class="header-help">?</span><span class="header-label">${row.label}</span>`;
    rh.querySelector('.header-help').addEventListener('click', (e) => {
      e.stopPropagation();
      showCategoryDetail(row);
    });
    grid.appendChild(rh);

    currentGrid.cols.forEach((col, ci) => {
      const cell = el('div', 'cell');
      cell.dataset.row = ri;
      cell.dataset.col = ci;
      cell.addEventListener('click', (e) => {
        e.stopPropagation();
        onCellClick(ri, ci, cell);
      });
      grid.appendChild(cell);
    });
  });
}

function el(tag, cls) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  return e;
}

// ── Cell interaction ──
function onCellClick(row, col, cell) {
  if (gameOver) return;
  if (answers[`${row}-${col}`]) return;
  if (activeCell) deactivateCell();
  activateCell(row, col, cell);
}

function activateCell(row, col, cell) {
  activeCell = { row, col, element: cell };
  cell.classList.add('active');
  highlightedIndex = -1;

  const rowCat = currentGrid.rows[row];
  const colCat = currentGrid.cols[col];
  const possibleCount = getSolutions(rowCat, colCat).filter(a => !usedArtists.has(a.key)).length;

  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'autocomplete-input';
  input.placeholder = 'Artiste…';
  input.autocomplete = 'off';

  const badge = document.createElement('span');
  badge.className = 'possible-count';
  badge.textContent = possibleCount + ' choix';

  const dropdown = document.createElement('div');
  dropdown.className = 'autocomplete-dropdown';
  dropdown.style.display = 'none';

  cell.innerHTML = '';
  cell.appendChild(badge);
  cell.appendChild(input);
  cell.appendChild(dropdown);

  input.focus();

  input.addEventListener('input', () => {
    highlightedIndex = -1;
    updateAutocomplete(input.value, dropdown, row, col);
  });

  input.addEventListener('keydown', (e) => {
    const items = dropdown.querySelectorAll('.autocomplete-item');

    if (e.key === 'Escape') {
      deactivateCell();
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      highlightedIndex = Math.min(highlightedIndex + 1, items.length - 1);
      updateHighlight(items);
      return;
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      highlightedIndex = Math.max(highlightedIndex - 1, 0);
      updateHighlight(items);
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIndex >= 0 && items[highlightedIndex]) {
        items[highlightedIndex].click();
      } else if (items.length > 0) {
        items[0].click();
      }
    }
  });
}

function updateHighlight(items) {
  items.forEach((it, i) => {
    it.classList.toggle('highlighted', i === highlightedIndex);
  });
  if (items[highlightedIndex]) {
    items[highlightedIndex].scrollIntoView({ block: 'nearest' });
  }
}

function deactivateCell() {
  if (!activeCell) return;
  const { row, col, element } = activeCell;
  if (!answers[`${row}-${col}`]) {
    element.innerHTML = '';
    element.classList.remove('active');
  }
  activeCell = null;
  highlightedIndex = -1;
}

function updateAutocomplete(query, dropdown, row, col) {
  if (!query || query.length < 3) {
    dropdown.style.display = 'none';
    return;
  }

  const norm = normalize(query);
  const results = ARTISTS.filter(a => {
    if (usedArtists.has(a.key)) return false;
    return normalize(a.name).includes(norm) || normalize(a.key).includes(norm);
  }).slice(0, 7);

  if (results.length === 0) {
    dropdown.style.display = 'none';
    return;
  }

  dropdown.innerHTML = '';
  dropdown.style.display = 'block';

  results.forEach((artist, i) => {
    const item = document.createElement('div');
    item.className = 'autocomplete-item';
    if (i === highlightedIndex) item.classList.add('highlighted');

    const dates = artist.died ? `${artist.born}–${artist.died}` : `${artist.born}–…`;
    const nat = NATIONALITY_LABELS[artist.nationality] || artist.nationality;

    item.innerHTML = `
      <span>${artist.name}</span>
      <span class="hint">${nat} · ${dates}</span>
    `;

    item.addEventListener('mouseenter', () => {
      highlightedIndex = i;
      updateHighlight(dropdown.querySelectorAll('.autocomplete-item'));
    });

    item.addEventListener('click', (e) => {
      e.stopPropagation();
      selectArtist(artist, row, col);
    });

    dropdown.appendChild(item);
  });
}

// ── Selection & Validation ──
function selectArtist(artist, row, col) {
  const rowCat = currentGrid.rows[row];
  const colCat = currentGrid.cols[col];
  const key = `${row}-${col}`;

  const matchesRow = matchCategory(rowCat, artist);
  const matchesCol = matchCategory(colCat, artist);

  if (matchesRow && matchesCol) {
    answers[key] = artist;
    usedArtists.add(artist.key);
    score += 100;

    const cell = activeCell.element;
    cell.classList.remove('active');
    cell.classList.add('solved');
    renderSolvedCell(cell, artist, false);
    activeCell = null;
    highlightedIndex = -1;
    updateScore();

    if (Object.keys(answers).length === 9) {
      endGame(true);
    }
  } else {
    errors++;
    renderErrors();
    score = Math.max(0, score - 20);
    updateScore();

    const cell = activeCell.element;
    cell.classList.add('error-flash');
    setTimeout(() => cell.classList.remove('error-flash'), 400);

    if (errors >= 3) {
      deactivateCell();
      endGame(false);
    }
  }
}

function renderSolvedCell(cell, artist, isRevealed) {
  const nat = NATIONALITY_LABELS[artist.nationality] || artist.nationality;
  const dates = artist.died ? `${artist.born}–${artist.died}` : `${artist.born}–`;
  const nameColor = isRevealed ? 'color: var(--text-light);' : '';
  cell.innerHTML = `
    <div>
      <div class="artist-name" style="${nameColor}">${artist.key}</div>
      <div class="artist-info">${nat} · ${dates}</div>
    </div>
    <div class="artist-tooltip">${getArtistSummary(artist)}</div>
  `;
}

// ── Score & Errors ──
function updateScore() {
  document.getElementById('score-value').textContent = score;
}

function renderErrors() {
  const dots = document.getElementById('error-dots');
  dots.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const dot = el('span', 'error-dot' + (i < errors ? ' filled' : ''));
    dots.appendChild(dot);
  }
}

// ── End game ──
function endGame(won) {
  gameOver = true;
  document.getElementById('abandon-btn').disabled = true;

  if (!won) {
    revealSolutions();
  }

  const banner = el('div', 'end-banner');
  if (won) {
    banner.innerHTML = `
      <h3>Bravo !</h3>
      <p>Grille complétée — Score final : <strong>${score}/900</strong></p>
    `;
  } else {
    banner.innerHTML = `
      <h3>Fin de partie</h3>
      <p>Score final : <strong>${score}/900</strong> — Les solutions ont été révélées.</p>
    `;
  }
  document.querySelector('.main').appendChild(banner);
}

function revealSolutions() {
  const revealedArtists = new Set(usedArtists);

  currentGrid.rows.forEach((row, ri) => {
    currentGrid.cols.forEach((col, ci) => {
      const key = `${ri}-${ci}`;
      if (!answers[key]) {
        const solutions = getSolutions(row, col).filter(a => !revealedArtists.has(a.key));
        const cell = document.querySelector(`.cell[data-row="${ri}"][data-col="${ci}"]`);
        if (cell && solutions.length > 0) {
          revealedArtists.add(solutions[0].key);
          cell.classList.add('game-over');
          renderSolvedCell(cell, solutions[0], true);
        }
      }
    });
  });
}

function onAbandon() {
  if (gameOver) return;
  revealSolutions();
  gameOver = true;
  document.getElementById('abandon-btn').disabled = true;

  const banner = el('div', 'end-banner');
  banner.innerHTML = `
    <h3>Solutions révélées</h3>
    <p>Score final : <strong>${score}/900</strong></p>
  `;
  document.querySelector('.main').appendChild(banner);
}

// ── Boot ──
document.addEventListener('DOMContentLoaded', init);
