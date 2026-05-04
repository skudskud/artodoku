const ARTISTS = [
  // Renaissance
  { name: "Léonard de Vinci", key: "Vinci", born: 1452, died: 1519, nationality: "italian", movements: ["renaissance"], media: ["painting", "drawing"], cities: ["florence", "milan", "rome"] },
  { name: "Michel-Ange", key: "Michel-Ange", born: 1475, died: 1564, nationality: "italian", movements: ["renaissance"], media: ["painting", "sculpture"], cities: ["florence", "rome"] },
  { name: "Raphaël", key: "Raphaël", born: 1483, died: 1520, nationality: "italian", movements: ["renaissance"], media: ["painting"], cities: ["florence", "rome"] },
  { name: "Sandro Botticelli", key: "Botticelli", born: 1445, died: 1510, nationality: "italian", movements: ["renaissance"], media: ["painting"], cities: ["florence"] },
  { name: "Titien", key: "Titien", born: 1488, died: 1576, nationality: "italian", movements: ["renaissance"], media: ["painting"], cities: ["venice", "rome"] },

  // Baroque
  { name: "Le Caravage", key: "Caravage", born: 1571, died: 1610, nationality: "italian", movements: ["baroque"], media: ["painting"], cities: ["rome", "naples", "milan"] },
  { name: "Rembrandt", key: "Rembrandt", born: 1606, died: 1669, nationality: "dutch", movements: ["baroque"], media: ["painting", "drawing", "printmaking"], cities: ["amsterdam"] },
  { name: "Johannes Vermeer", key: "Vermeer", born: 1632, died: 1675, nationality: "dutch", movements: ["baroque"], media: ["painting"], cities: ["delft"] },
  { name: "Pierre Paul Rubens", key: "Rubens", born: 1577, died: 1640, nationality: "flemish", movements: ["baroque"], media: ["painting"], cities: ["antwerp"] },
  { name: "Diego Velázquez", key: "Velázquez", born: 1599, died: 1660, nationality: "spanish", movements: ["baroque"], media: ["painting"], cities: ["madrid", "seville"] },

  // Rococo / Classicism / Neoclassicism
  { name: "Jean-Honoré Fragonard", key: "Fragonard", born: 1732, died: 1806, nationality: "french", movements: ["rococo"], media: ["painting"], cities: ["paris"] },
  { name: "Nicolas Poussin", key: "Poussin", born: 1594, died: 1665, nationality: "french", movements: ["classicism"], media: ["painting"], cities: ["rome", "paris"] },
  { name: "Jacques-Louis David", key: "David", born: 1748, died: 1825, nationality: "french", movements: ["neoclassicism"], media: ["painting"], cities: ["paris"] },
  { name: "Jean-Auguste-Dominique Ingres", key: "Ingres", born: 1780, died: 1867, nationality: "french", movements: ["neoclassicism"], media: ["painting"], cities: ["paris", "rome"] },

  // Romanticism
  { name: "Eugène Delacroix", key: "Delacroix", born: 1798, died: 1863, nationality: "french", movements: ["romanticism"], media: ["painting"], cities: ["paris"] },
  { name: "Théodore Géricault", key: "Géricault", born: 1791, died: 1824, nationality: "french", movements: ["romanticism"], media: ["painting"], cities: ["paris"] },
  { name: "William Turner", key: "Turner", born: 1775, died: 1851, nationality: "british", movements: ["romanticism"], media: ["painting"], cities: ["london"] },
  { name: "Caspar David Friedrich", key: "Friedrich", born: 1774, died: 1840, nationality: "german", movements: ["romanticism"], media: ["painting"], cities: ["dresden"] },
  { name: "Francisco Goya", key: "Goya", born: 1746, died: 1828, nationality: "spanish", movements: ["romanticism"], media: ["painting", "drawing", "printmaking"], cities: ["madrid"] },

  // Realism
  { name: "Gustave Courbet", key: "Courbet", born: 1819, died: 1877, nationality: "french", movements: ["realism"], media: ["painting"], cities: ["paris"] },
  { name: "Jean-François Millet", key: "Millet", born: 1814, died: 1875, nationality: "french", movements: ["realism"], media: ["painting"], cities: ["paris", "barbizon"] },
  { name: "Auguste Rodin", key: "Rodin", born: 1840, died: 1917, nationality: "french", movements: ["realism"], media: ["sculpture"], cities: ["paris"] },

  // Impressionism
  { name: "Claude Monet", key: "Monet", born: 1840, died: 1926, nationality: "french", movements: ["impressionism"], media: ["painting"], cities: ["paris", "giverny"] },
  { name: "Édouard Manet", key: "Manet", born: 1832, died: 1883, nationality: "french", movements: ["impressionism"], media: ["painting"], cities: ["paris"] },
  { name: "Pierre-Auguste Renoir", key: "Renoir", born: 1841, died: 1919, nationality: "french", movements: ["impressionism"], media: ["painting", "sculpture"], cities: ["paris"] },
  { name: "Edgar Degas", key: "Degas", born: 1834, died: 1917, nationality: "french", movements: ["impressionism"], media: ["painting", "sculpture", "drawing"], cities: ["paris"] },
  { name: "Camille Pissarro", key: "Pissarro", born: 1830, died: 1903, nationality: "french", movements: ["impressionism"], media: ["painting"], cities: ["paris"] },
  { name: "Alfred Sisley", key: "Sisley", born: 1839, died: 1899, nationality: "british", movements: ["impressionism"], media: ["painting"], cities: ["paris"] },
  { name: "Berthe Morisot", key: "Morisot", born: 1841, died: 1895, nationality: "french", movements: ["impressionism"], media: ["painting"], cities: ["paris"] },
  { name: "Gustave Caillebotte", key: "Caillebotte", born: 1848, died: 1894, nationality: "french", movements: ["impressionism"], media: ["painting"], cities: ["paris"] },
  { name: "Mary Cassatt", key: "Cassatt", born: 1844, died: 1926, nationality: "american", movements: ["impressionism"], media: ["painting"], cities: ["paris"] },

  // Post-Impressionism
  { name: "Paul Cézanne", key: "Cézanne", born: 1839, died: 1906, nationality: "french", movements: ["post-impressionism"], media: ["painting"], cities: ["paris", "aix"] },
  { name: "Vincent van Gogh", key: "Van Gogh", born: 1853, died: 1890, nationality: "dutch", movements: ["post-impressionism"], media: ["painting"], cities: ["paris", "arles"] },
  { name: "Paul Gauguin", key: "Gauguin", born: 1848, died: 1903, nationality: "french", movements: ["post-impressionism"], media: ["painting", "sculpture", "ceramics"], cities: ["paris", "tahiti"] },
  { name: "Georges Seurat", key: "Seurat", born: 1859, died: 1891, nationality: "french", movements: ["post-impressionism"], media: ["painting"], cities: ["paris"] },
  { name: "Henri de Toulouse-Lautrec", key: "Toulouse-Lautrec", born: 1864, died: 1901, nationality: "french", movements: ["post-impressionism"], media: ["painting", "drawing", "printmaking"], cities: ["paris"] },
  { name: "Henri Rousseau", key: "Rousseau", born: 1844, died: 1910, nationality: "french", movements: ["post-impressionism"], media: ["painting"], cities: ["paris"] },

  // Symbolism / Art Nouveau
  { name: "Gustav Klimt", key: "Klimt", born: 1862, died: 1918, nationality: "austrian", movements: ["art-nouveau", "symbolism"], media: ["painting"], cities: ["vienna"] },
  { name: "Alphonse Mucha", key: "Mucha", born: 1860, died: 1939, nationality: "czech", movements: ["art-nouveau"], media: ["painting", "drawing"], cities: ["paris", "prague"] },
  { name: "Gustave Moreau", key: "Moreau", born: 1826, died: 1898, nationality: "french", movements: ["symbolism"], media: ["painting"], cities: ["paris"] },
  { name: "Odilon Redon", key: "Redon", born: 1840, died: 1916, nationality: "french", movements: ["symbolism"], media: ["painting"], cities: ["paris"] },

  // Fauvism
  { name: "Henri Matisse", key: "Matisse", born: 1869, died: 1954, nationality: "french", movements: ["fauvism"], media: ["painting", "sculpture", "collage"], cities: ["paris", "nice"] },
  { name: "André Derain", key: "Derain", born: 1880, died: 1954, nationality: "french", movements: ["fauvism"], media: ["painting"], cities: ["paris"] },

  // Cubism
  { name: "Pablo Picasso", key: "Picasso", born: 1881, died: 1973, nationality: "spanish", movements: ["cubism"], media: ["painting", "sculpture", "ceramics", "drawing", "printmaking"], cities: ["paris", "barcelona", "malaga"] },
  { name: "Georges Braque", key: "Braque", born: 1882, died: 1963, nationality: "french", movements: ["cubism"], media: ["painting", "sculpture"], cities: ["paris"] },
  { name: "Juan Gris", key: "Gris", born: 1887, died: 1927, nationality: "spanish", movements: ["cubism"], media: ["painting"], cities: ["paris", "madrid"] },
  { name: "Fernand Léger", key: "Léger", born: 1881, died: 1955, nationality: "french", movements: ["cubism"], media: ["painting"], cities: ["paris"] },

  // Dada
  { name: "Marcel Duchamp", key: "Duchamp", born: 1887, died: 1968, nationality: "french", movements: ["dadaism"], media: ["sculpture"], cities: ["paris", "newyork"] },

  // Abstract / De Stijl
  { name: "Vassily Kandinsky", key: "Kandinsky", born: 1866, died: 1944, nationality: "russian", movements: ["abstract"], media: ["painting"], cities: ["munich", "paris", "moscow"] },
  { name: "Piet Mondrian", key: "Mondrian", born: 1872, died: 1944, nationality: "dutch", movements: ["abstract", "de-stijl"], media: ["painting"], cities: ["paris", "amsterdam", "newyork"] },
  { name: "Paul Klee", key: "Klee", born: 1879, died: 1940, nationality: "swiss", movements: ["abstract", "expressionism"], media: ["painting"], cities: ["munich", "bern"] },

  // Surrealism
  { name: "Salvador Dalí", key: "Dalí", born: 1904, died: 1989, nationality: "spanish", movements: ["surrealism"], media: ["painting", "sculpture"], cities: ["paris", "figueres", "newyork"] },
  { name: "René Magritte", key: "Magritte", born: 1898, died: 1967, nationality: "belgian", movements: ["surrealism"], media: ["painting"], cities: ["brussels", "paris"] },
  { name: "Max Ernst", key: "Ernst", born: 1891, died: 1976, nationality: "german", movements: ["surrealism", "dadaism"], media: ["painting", "sculpture"], cities: ["paris", "newyork"] },
  { name: "Joan Miró", key: "Miró", born: 1893, died: 1983, nationality: "spanish", movements: ["surrealism"], media: ["painting", "sculpture", "ceramics"], cities: ["paris", "barcelona"] },
  { name: "Man Ray", key: "Man Ray", born: 1890, died: 1976, nationality: "american", movements: ["surrealism", "dadaism"], media: ["photography", "painting"], cities: ["paris", "newyork"] },
  { name: "Frida Kahlo", key: "Kahlo", born: 1907, died: 1954, nationality: "mexican", movements: ["surrealism"], media: ["painting"], cities: ["mexicocity"] },

  // Expressionism
  { name: "Edvard Munch", key: "Munch", born: 1863, died: 1944, nationality: "norwegian", movements: ["expressionism"], media: ["painting"], cities: ["oslo", "paris", "berlin"] },
  { name: "Egon Schiele", key: "Schiele", born: 1890, died: 1918, nationality: "austrian", movements: ["expressionism"], media: ["painting", "drawing"], cities: ["vienna"] },
  { name: "Ernst Ludwig Kirchner", key: "Kirchner", born: 1880, died: 1938, nationality: "german", movements: ["expressionism"], media: ["painting"], cities: ["berlin", "dresden"] },

  // Modern Sculpture
  { name: "Alberto Giacometti", key: "Giacometti", born: 1901, died: 1966, nationality: "swiss", movements: ["surrealism", "modernism"], media: ["sculpture", "painting"], cities: ["paris"] },
  { name: "Constantin Brancusi", key: "Brancusi", born: 1876, died: 1957, nationality: "romanian", movements: ["modernism"], media: ["sculpture"], cities: ["paris"] },
  { name: "Alexander Calder", key: "Calder", born: 1898, died: 1976, nationality: "american", movements: ["modernism"], media: ["sculpture"], cities: ["paris", "newyork"] },

  // Abstract Expressionism
  { name: "Jackson Pollock", key: "Pollock", born: 1912, died: 1956, nationality: "american", movements: ["abstract-expressionism"], media: ["painting"], cities: ["newyork"] },
  { name: "Mark Rothko", key: "Rothko", born: 1903, died: 1970, nationality: "american", movements: ["abstract-expressionism"], media: ["painting"], cities: ["newyork"] },
  { name: "Willem de Kooning", key: "De Kooning", born: 1904, died: 1997, nationality: "dutch", movements: ["abstract-expressionism"], media: ["painting"], cities: ["newyork"] },

  // Pop Art
  { name: "Andy Warhol", key: "Warhol", born: 1928, died: 1987, nationality: "american", movements: ["pop-art"], media: ["painting", "printmaking"], cities: ["newyork"] },
  { name: "Roy Lichtenstein", key: "Lichtenstein", born: 1923, died: 1997, nationality: "american", movements: ["pop-art"], media: ["painting", "sculpture"], cities: ["newyork"] },
  { name: "David Hockney", key: "Hockney", born: 1937, died: null, nationality: "british", movements: ["pop-art"], media: ["painting", "drawing", "photography"], cities: ["london", "losangeles"] },

  // Neo-Expressionism / Contemporary
  { name: "Jean-Michel Basquiat", key: "Basquiat", born: 1960, died: 1988, nationality: "american", movements: ["neo-expressionism"], media: ["painting"], cities: ["newyork"] },
  { name: "Francis Bacon", key: "Bacon", born: 1909, died: 1992, nationality: "irish", movements: ["figurative"], media: ["painting"], cities: ["london", "paris"] },
  { name: "Lucian Freud", key: "Freud", born: 1922, died: 2011, nationality: "british", movements: ["figurative"], media: ["painting"], cities: ["london"] },
  { name: "Louise Bourgeois", key: "Bourgeois", born: 1911, died: 2010, nationality: "french", movements: ["contemporary"], media: ["sculpture"], cities: ["newyork", "paris"] },
  { name: "Yayoi Kusama", key: "Kusama", born: 1929, died: null, nationality: "japanese", movements: ["contemporary"], media: ["painting", "sculpture", "installation"], cities: ["tokyo", "newyork"] },
  { name: "Ai Weiwei", key: "Ai Weiwei", born: 1957, died: null, nationality: "chinese", movements: ["contemporary"], media: ["sculpture", "installation"], cities: ["beijing", "berlin"] },
  { name: "Jeff Koons", key: "Koons", born: 1955, died: null, nationality: "american", movements: ["contemporary", "pop-art"], media: ["sculpture"], cities: ["newyork"] },
  { name: "Banksy", key: "Banksy", born: 1974, died: null, nationality: "british", movements: ["street-art"], media: ["painting", "installation"], cities: ["london", "bristol"] },

  // Other notable
  { name: "Amedeo Modigliani", key: "Modigliani", born: 1884, died: 1920, nationality: "italian", movements: ["expressionism", "modernism"], media: ["painting", "sculpture"], cities: ["paris"] },
  { name: "Marc Chagall", key: "Chagall", born: 1887, died: 1985, nationality: "russian", movements: ["modernism"], media: ["painting"], cities: ["paris", "newyork"] },
  { name: "Georgia O'Keeffe", key: "O'Keeffe", born: 1887, died: 1986, nationality: "american", movements: ["modernism"], media: ["painting"], cities: ["newyork", "santafe"] },
];

const MOVEMENT_LABELS = {
  "renaissance": "Renaissance",
  "baroque": "Baroque",
  "rococo": "Rococo",
  "classicism": "Classicisme",
  "neoclassicism": "Néoclassicisme",
  "romanticism": "Romantisme",
  "realism": "Réalisme",
  "impressionism": "Impressionnisme",
  "post-impressionism": "Post-impressionnisme",
  "symbolism": "Symbolisme",
  "art-nouveau": "Art nouveau",
  "fauvism": "Fauvisme",
  "cubism": "Cubisme",
  "dadaism": "Dadaïsme",
  "abstract": "Art abstrait",
  "de-stijl": "De Stijl",
  "surrealism": "Surréalisme",
  "expressionism": "Expressionnisme",
  "abstract-expressionism": "Expr. abstrait",
  "modernism": "Modernisme",
  "pop-art": "Pop Art",
  "neo-expressionism": "Néo-expressionnisme",
  "figurative": "Art figuratif",
  "contemporary": "Art contemporain",
  "street-art": "Street Art",
};

const NATIONALITY_LABELS = {
  "french": "Français(e)",
  "spanish": "Espagnol(e)",
  "italian": "Italien(ne)",
  "dutch": "Néerlandais(e)",
  "american": "Américain(e)",
  "british": "Britannique",
  "german": "Allemand(e)",
  "belgian": "Belge",
  "austrian": "Autrichien(ne)",
  "swiss": "Suisse",
  "russian": "Russe",
  "mexican": "Mexicain(e)",
  "japanese": "Japonais(e)",
  "norwegian": "Norvégien(ne)",
  "czech": "Tchèque",
  "romanian": "Roumain(e)",
  "irish": "Irlandais(e)",
  "chinese": "Chinois(e)",
  "flemish": "Flamand(e)",
};

const CITY_LABELS = {
  "paris": "Paris",
  "london": "Londres",
  "newyork": "New York",
  "rome": "Rome",
  "florence": "Florence",
  "amsterdam": "Amsterdam",
  "berlin": "Berlin",
  "vienna": "Vienne",
  "madrid": "Madrid",
  "barcelona": "Barcelone",
  "venice": "Venise",
  "munich": "Munich",
  "moscow": "Moscou",
  "tokyo": "Tokyo",
  "losangeles": "Los Angeles",
  "nice": "Nice",
  "brussels": "Bruxelles",
  "dresden": "Dresde",
  "oslo": "Oslo",
};

const MEDIUM_LABELS = {
  "painting": "Peinture",
  "sculpture": "Sculpture",
  "photography": "Photographie",
  "drawing": "Dessin",
  "printmaking": "Gravure",
  "ceramics": "Céramique",
  "installation": "Installation",
  "collage": "Collage",
};

const GRIDS = [
  {
    date: "2026-05-04",
    difficulty: 3, difficultyLabel: "Moyen",
    cols: [
      { type: "containsLetter", letter: "O", label: "Contient la lettre 'O' dans le nom" },
      { type: "movement", id: "surrealism", label: "Surréalisme" },
      { type: "city", id: "paris", label: "A travaillé à Paris" },
    ],
    rows: [
      { type: "nationality", id: "spanish", label: "Espagnol(e)" },
      { type: "firstLetter", letter: "M", label: "Commence par la lettre 'M'" },
      { type: "medium", id: "sculpture", label: "Aussi sculpteur" },
    ],
  },
  {
    date: "2026-05-03",
    difficulty: 2, difficultyLabel: "Facile",
    cols: [
      { type: "nationality", id: "french", label: "Français(e)" },
      { type: "firstLetter", letter: "D", label: "Commence par la lettre 'D'" },
      { type: "containsLetter", letter: "O", label: "Contient la lettre 'O' dans le nom" },
    ],
    rows: [
      { type: "city", id: "paris", label: "A travaillé à Paris" },
      { type: "movement", id: "romanticism", label: "Romantisme" },
      { type: "medium", id: "sculpture", label: "Aussi sculpteur" },
    ],
  },
  {
    date: "2026-05-02",
    difficulty: 3, difficultyLabel: "Moyen",
    cols: [
      { type: "century", century: 20, label: "Actif au XXe siècle" },
      { type: "nationality", id: "spanish", label: "Espagnol(e)" },
      { type: "containsLetter", letter: "A", label: "Contient la lettre 'A' dans le nom" },
    ],
    rows: [
      { type: "city", id: "paris", label: "A travaillé à Paris" },
      { type: "medium", id: "sculpture", label: "Aussi sculpteur" },
      { type: "firstLetter", letter: "G", label: "Commence par la lettre 'G'" },
    ],
  },
  {
    date: "2026-05-01",
    difficulty: 3, difficultyLabel: "Moyen",
    cols: [
      { type: "movement", id: "impressionism", label: "Impressionnisme" },
      { type: "movement", id: "cubism", label: "Cubisme" },
      { type: "firstLetter", letter: "R", label: "Commence par la lettre 'R'" },
    ],
    rows: [
      { type: "nationality", id: "french", label: "Français(e)" },
      { type: "city", id: "paris", label: "A travaillé à Paris" },
      { type: "containsLetter", letter: "A", label: "Contient la lettre 'A' dans le nom" },
    ],
  },
  {
    date: "2026-04-30",
    difficulty: 2, difficultyLabel: "Facile",
    cols: [
      { type: "city", id: "paris", label: "A travaillé à Paris" },
      { type: "movement", id: "impressionism", label: "Impressionnisme" },
      { type: "nationality", id: "french", label: "Français(e)" },
    ],
    rows: [
      { type: "firstLetter", letter: "M", label: "Commence par la lettre 'M'" },
      { type: "medium", id: "sculpture", label: "Aussi sculpteur" },
      { type: "containsLetter", letter: "R", label: "Contient la lettre 'R' dans le nom" },
    ],
  },
  {
    date: "2026-04-29",
    difficulty: 3, difficultyLabel: "Moyen",
    cols: [
      { type: "movement", id: "surrealism", label: "Surréalisme" },
      { type: "movement", id: "expressionism", label: "Expressionnisme" },
      { type: "city", id: "newyork", label: "A travaillé à New York" },
    ],
    rows: [
      { type: "firstLetter", letter: "M", label: "Commence par la lettre 'M'" },
      { type: "medium", id: "sculpture", label: "Aussi sculpteur" },
      { type: "containsLetter", letter: "O", label: "Contient la lettre 'O' dans le nom" },
    ],
  },
  {
    date: "2026-04-28",
    difficulty: 4, difficultyLabel: "Difficile",
    cols: [
      { type: "containsLetter", letter: "I", label: "Contient la lettre 'I' dans le nom" },
      { type: "nationality", id: "german", label: "Allemand(e)" },
      { type: "century", century: 20, label: "Actif au XXe siècle" },
    ],
    rows: [
      { type: "movement", id: "surrealism", label: "Surréalisme" },
      { type: "city", id: "paris", label: "A travaillé à Paris" },
      { type: "medium", id: "sculpture", label: "Aussi sculpteur" },
    ],
  },
];
