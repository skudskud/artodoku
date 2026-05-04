const ARTISTS = [
  // Renaissance (~18)
  { name: "Léonard de Vinci", key: "Vinci", born: 1452, died: 1519, nationality: "italian", movements: ["renaissance"], media: ["painting", "drawing", "sculpture"], cities: ["florence", "milan", "rome"] },
  { name: "Michel-Ange", key: "Michel-Ange", born: 1475, died: 1564, nationality: "italian", movements: ["renaissance"], media: ["painting", "sculpture", "drawing"], cities: ["florence", "rome"] },
  { name: "Raphaël", key: "Raphaël", born: 1483, died: 1520, nationality: "italian", movements: ["renaissance"], media: ["painting"], cities: ["florence", "rome"] },
  { name: "Sandro Botticelli", key: "Botticelli", born: 1445, died: 1510, nationality: "italian", movements: ["renaissance"], media: ["painting"], cities: ["florence"] },
  { name: "Titien", key: "Titien", born: 1488, died: 1576, nationality: "italian", movements: ["renaissance"], media: ["painting"], cities: ["venice", "rome"] },
  { name: "Donatello", key: "Donatello", born: 1386, died: 1466, nationality: "italian", movements: ["renaissance"], media: ["sculpture"], cities: ["florence", "rome"] },
  { name: "Fra Angelico", key: "Fra Angelico", born: 1395, died: 1455, nationality: "italian", movements: ["renaissance"], media: ["painting"], cities: ["florence", "rome"] },
  { name: "Andrea Mantegna", key: "Mantegna", born: 1431, died: 1506, nationality: "italian", movements: ["renaissance"], media: ["painting"], cities: ["rome", "venice"] },
  { name: "Giovanni Bellini", key: "Bellini", born: 1430, died: 1516, nationality: "italian", movements: ["renaissance"], media: ["painting"], cities: ["venice"] },
  { name: "Giorgione", key: "Giorgione", born: 1477, died: 1510, nationality: "italian", movements: ["renaissance"], media: ["painting"], cities: ["venice"] },
  { name: "Le Tintoret", key: "Tintoret", born: 1518, died: 1594, nationality: "italian", movements: ["renaissance"], media: ["painting"], cities: ["venice"] },
  { name: "Paolo Véronèse", key: "Véronèse", born: 1528, died: 1588, nationality: "italian", movements: ["renaissance"], media: ["painting"], cities: ["venice"] },
  { name: "Le Corrège", key: "Corrège", born: 1489, died: 1534, nationality: "italian", movements: ["renaissance"], media: ["painting"], cities: ["rome"] },
  { name: "Piero della Francesca", key: "Piero", born: 1415, died: 1492, nationality: "italian", movements: ["renaissance"], media: ["painting"], cities: ["florence", "rome"] },
  { name: "Albrecht Dürer", key: "Dürer", born: 1471, died: 1528, nationality: "german", movements: ["renaissance"], media: ["painting", "drawing", "printmaking"], cities: ["nuremberg", "venice"] },
  { name: "Hans Holbein", key: "Holbein", born: 1497, died: 1543, nationality: "german", movements: ["renaissance"], media: ["painting", "drawing"], cities: ["london"] },
  { name: "Jérôme Bosch", key: "Bosch", born: 1450, died: 1516, nationality: "dutch", movements: ["renaissance"], media: ["painting"], cities: [] },
  { name: "Pieter Bruegel", key: "Bruegel", born: 1525, died: 1569, nationality: "flemish", movements: ["renaissance"], media: ["painting"], cities: ["antwerp", "brussels"] },

  // Baroque (~15)
  { name: "Le Caravage", key: "Caravage", born: 1571, died: 1610, nationality: "italian", movements: ["baroque"], media: ["painting"], cities: ["rome", "naples", "milan"] },
  { name: "Rembrandt", key: "Rembrandt", born: 1606, died: 1669, nationality: "dutch", movements: ["baroque"], media: ["painting", "drawing", "printmaking"], cities: ["amsterdam"] },
  { name: "Johannes Vermeer", key: "Vermeer", born: 1632, died: 1675, nationality: "dutch", movements: ["baroque"], media: ["painting"], cities: ["delft"] },
  { name: "Pierre Paul Rubens", key: "Rubens", born: 1577, died: 1640, nationality: "flemish", movements: ["baroque"], media: ["painting"], cities: ["antwerp"] },
  { name: "Diego Velázquez", key: "Velázquez", born: 1599, died: 1660, nationality: "spanish", movements: ["baroque"], media: ["painting"], cities: ["madrid", "seville"] },
  { name: "Georges de La Tour", key: "La Tour", born: 1593, died: 1652, nationality: "french", movements: ["baroque"], media: ["painting"], cities: ["paris"] },
  { name: "Francisco de Zurbarán", key: "Zurbarán", born: 1598, died: 1664, nationality: "spanish", movements: ["baroque"], media: ["painting"], cities: ["seville", "madrid"] },
  { name: "Bartolomé Esteban Murillo", key: "Murillo", born: 1617, died: 1682, nationality: "spanish", movements: ["baroque"], media: ["painting"], cities: ["seville"] },
  { name: "Artemisia Gentileschi", key: "Gentileschi", born: 1593, died: 1656, nationality: "italian", movements: ["baroque"], media: ["painting"], cities: ["rome", "florence", "naples"] },
  { name: "Le Bernin", key: "Bernin", born: 1598, died: 1680, nationality: "italian", movements: ["baroque"], media: ["sculpture"], cities: ["rome"] },
  { name: "Frans Hals", key: "Hals", born: 1582, died: 1666, nationality: "dutch", movements: ["baroque"], media: ["painting"], cities: ["haarlem"] },
  { name: "Jacob van Ruisdael", key: "Ruisdael", born: 1628, died: 1682, nationality: "dutch", movements: ["baroque"], media: ["painting"], cities: ["amsterdam", "haarlem"] },
  { name: "El Greco", key: "El Greco", born: 1541, died: 1614, nationality: "greek", movements: ["baroque", "renaissance"], media: ["painting"], cities: ["rome", "venice", "madrid"] },
  { name: "Nicolas Poussin", key: "Poussin", born: 1594, died: 1665, nationality: "french", movements: ["classicism"], media: ["painting"], cities: ["rome", "paris"] },
  { name: "Guido Reni", key: "Reni", born: 1575, died: 1642, nationality: "italian", movements: ["baroque"], media: ["painting"], cities: ["rome"] },

  // 18th century — Rococo / Neoclassicism (~10)
  { name: "Jean-Honoré Fragonard", key: "Fragonard", born: 1732, died: 1806, nationality: "french", movements: ["rococo"], media: ["painting"], cities: ["paris"] },
  { name: "Jacques-Louis David", key: "David", born: 1748, died: 1825, nationality: "french", movements: ["neoclassicism"], media: ["painting"], cities: ["paris", "rome"] },
  { name: "Jean-Auguste-Dominique Ingres", key: "Ingres", born: 1780, died: 1867, nationality: "french", movements: ["neoclassicism"], media: ["painting", "drawing"], cities: ["paris", "rome"] },
  { name: "Antoine Watteau", key: "Watteau", born: 1684, died: 1721, nationality: "french", movements: ["rococo"], media: ["painting"], cities: ["paris"] },
  { name: "François Boucher", key: "Boucher", born: 1703, died: 1770, nationality: "french", movements: ["rococo"], media: ["painting"], cities: ["paris"] },
  { name: "Jean-Baptiste-Siméon Chardin", key: "Chardin", born: 1699, died: 1779, nationality: "french", movements: ["rococo"], media: ["painting"], cities: ["paris"] },
  { name: "Thomas Gainsborough", key: "Gainsborough", born: 1727, died: 1788, nationality: "british", movements: ["rococo"], media: ["painting"], cities: ["london"] },
  { name: "Giambattista Tiepolo", key: "Tiepolo", born: 1696, died: 1770, nationality: "italian", movements: ["rococo"], media: ["painting"], cities: ["venice", "madrid"] },
  { name: "Canaletto", key: "Canaletto", born: 1697, died: 1768, nationality: "italian", movements: ["rococo"], media: ["painting"], cities: ["venice", "london"] },
  { name: "Élisabeth Vigée Le Brun", key: "Vigée Le Brun", born: 1755, died: 1842, nationality: "french", movements: ["neoclassicism"], media: ["painting"], cities: ["paris", "rome", "stpetersburg"] },

  // Romanticism (~10)
  { name: "Eugène Delacroix", key: "Delacroix", born: 1798, died: 1863, nationality: "french", movements: ["romanticism"], media: ["painting"], cities: ["paris"] },
  { name: "Théodore Géricault", key: "Géricault", born: 1791, died: 1824, nationality: "french", movements: ["romanticism"], media: ["painting"], cities: ["paris"] },
  { name: "William Turner", key: "Turner", born: 1775, died: 1851, nationality: "british", movements: ["romanticism"], media: ["painting"], cities: ["london"] },
  { name: "Caspar David Friedrich", key: "Friedrich", born: 1774, died: 1840, nationality: "german", movements: ["romanticism"], media: ["painting"], cities: ["dresden"] },
  { name: "Francisco Goya", key: "Goya", born: 1746, died: 1828, nationality: "spanish", movements: ["romanticism", "realism"], media: ["painting", "drawing", "printmaking"], cities: ["madrid"] },
  { name: "John Constable", key: "Constable", born: 1776, died: 1837, nationality: "british", movements: ["romanticism"], media: ["painting"], cities: ["london"] },
  { name: "William Blake", key: "Blake", born: 1757, died: 1827, nationality: "british", movements: ["romanticism"], media: ["painting", "drawing", "printmaking"], cities: ["london"] },
  { name: "Johann Heinrich Füssli", key: "Füssli", born: 1741, died: 1825, nationality: "swiss", movements: ["romanticism"], media: ["painting"], cities: ["london", "zurich"] },
  { name: "Gustave Doré", key: "Doré", born: 1832, died: 1883, nationality: "french", movements: ["romanticism"], media: ["drawing", "printmaking", "painting"], cities: ["paris"] },
  { name: "Thomas Cole", key: "Cole", born: 1801, died: 1848, nationality: "american", movements: ["romanticism"], media: ["painting"], cities: ["newyork"] },

  // Realism (~12)
  { name: "Gustave Courbet", key: "Courbet", born: 1819, died: 1877, nationality: "french", movements: ["realism"], media: ["painting"], cities: ["paris"] },
  { name: "Jean-François Millet", key: "Millet", born: 1814, died: 1875, nationality: "french", movements: ["realism"], media: ["painting"], cities: ["paris", "barbizon"] },
  { name: "Auguste Rodin", key: "Rodin", born: 1840, died: 1917, nationality: "french", movements: ["realism"], media: ["sculpture"], cities: ["paris"] },
  { name: "Honoré Daumier", key: "Daumier", born: 1808, died: 1879, nationality: "french", movements: ["realism"], media: ["painting", "drawing", "printmaking", "sculpture"], cities: ["paris"] },
  { name: "Rosa Bonheur", key: "Bonheur", born: 1822, died: 1899, nationality: "french", movements: ["realism"], media: ["painting", "sculpture"], cities: ["paris"] },
  { name: "Thomas Eakins", key: "Eakins", born: 1844, died: 1916, nationality: "american", movements: ["realism"], media: ["painting"], cities: ["philadelphia", "paris"] },
  { name: "Winslow Homer", key: "Homer", born: 1836, died: 1910, nationality: "american", movements: ["realism"], media: ["painting"], cities: ["newyork"] },
  { name: "Ilya Repin", key: "Repin", born: 1844, died: 1930, nationality: "russian", movements: ["realism"], media: ["painting"], cities: ["stpetersburg", "moscow"] },
  { name: "Édouard Vuillard", key: "Vuillard", born: 1868, died: 1940, nationality: "french", movements: ["realism"], media: ["painting"], cities: ["paris"] },
  { name: "Pierre Bonnard", key: "Bonnard", born: 1867, died: 1947, nationality: "french", movements: ["realism"], media: ["painting"], cities: ["paris"] },
  { name: "Félix Vallotton", key: "Vallotton", born: 1865, died: 1925, nationality: "swiss", movements: ["realism"], media: ["painting", "printmaking"], cities: ["paris"] },
  { name: "Camille Claudel", key: "Claudel", born: 1864, died: 1943, nationality: "french", movements: ["realism"], media: ["sculpture"], cities: ["paris"] },

  // Impressionism (~12)
  { name: "Claude Monet", key: "Monet", born: 1840, died: 1926, nationality: "french", movements: ["impressionism"], media: ["painting"], cities: ["paris", "giverny"] },
  { name: "Édouard Manet", key: "Manet", born: 1832, died: 1883, nationality: "french", movements: ["impressionism", "realism"], media: ["painting"], cities: ["paris"] },
  { name: "Pierre-Auguste Renoir", key: "Renoir", born: 1841, died: 1919, nationality: "french", movements: ["impressionism"], media: ["painting", "sculpture"], cities: ["paris"] },
  { name: "Edgar Degas", key: "Degas", born: 1834, died: 1917, nationality: "french", movements: ["impressionism", "realism"], media: ["painting", "sculpture", "drawing"], cities: ["paris"] },
  { name: "Camille Pissarro", key: "Pissarro", born: 1830, died: 1903, nationality: "french", movements: ["impressionism"], media: ["painting"], cities: ["paris"] },
  { name: "Alfred Sisley", key: "Sisley", born: 1839, died: 1899, nationality: "british", movements: ["impressionism"], media: ["painting"], cities: ["paris"] },
  { name: "Berthe Morisot", key: "Morisot", born: 1841, died: 1895, nationality: "french", movements: ["impressionism"], media: ["painting"], cities: ["paris"] },
  { name: "Gustave Caillebotte", key: "Caillebotte", born: 1848, died: 1894, nationality: "french", movements: ["impressionism"], media: ["painting"], cities: ["paris"] },
  { name: "Mary Cassatt", key: "Cassatt", born: 1844, died: 1926, nationality: "american", movements: ["impressionism"], media: ["painting"], cities: ["paris"] },
  { name: "Frédéric Bazille", key: "Bazille", born: 1841, died: 1870, nationality: "french", movements: ["impressionism"], media: ["painting"], cities: ["paris"] },
  { name: "Armand Guillaumin", key: "Guillaumin", born: 1841, died: 1927, nationality: "french", movements: ["impressionism"], media: ["painting"], cities: ["paris"] },
  { name: "James McNeill Whistler", key: "Whistler", born: 1834, died: 1903, nationality: "american", movements: ["impressionism"], media: ["painting"], cities: ["london", "paris"] },

  // Post-Impressionism (~10)
  { name: "Paul Cézanne", key: "Cézanne", born: 1839, died: 1906, nationality: "french", movements: ["post-impressionism", "impressionism"], media: ["painting"], cities: ["paris", "aix"] },
  { name: "Vincent van Gogh", key: "Van Gogh", born: 1853, died: 1890, nationality: "dutch", movements: ["post-impressionism", "expressionism"], media: ["painting"], cities: ["paris", "arles"] },
  { name: "Paul Gauguin", key: "Gauguin", born: 1848, died: 1903, nationality: "french", movements: ["post-impressionism", "symbolism"], media: ["painting", "sculpture", "ceramics"], cities: ["paris", "tahiti"] },
  { name: "Georges Seurat", key: "Seurat", born: 1859, died: 1891, nationality: "french", movements: ["post-impressionism"], media: ["painting"], cities: ["paris"] },
  { name: "Henri de Toulouse-Lautrec", key: "Toulouse-Lautrec", born: 1864, died: 1901, nationality: "french", movements: ["post-impressionism"], media: ["painting", "drawing", "printmaking"], cities: ["paris"] },
  { name: "Henri Rousseau", key: "Rousseau", born: 1844, died: 1910, nationality: "french", movements: ["post-impressionism", "naive"], media: ["painting"], cities: ["paris"] },
  { name: "Paul Signac", key: "Signac", born: 1863, died: 1935, nationality: "french", movements: ["post-impressionism"], media: ["painting"], cities: ["paris"] },
  { name: "John Singer Sargent", key: "Sargent", born: 1856, died: 1925, nationality: "american", movements: ["post-impressionism"], media: ["painting"], cities: ["paris", "london"] },
  { name: "Joaquín Sorolla", key: "Sorolla", born: 1863, died: 1923, nationality: "spanish", movements: ["post-impressionism"], media: ["painting"], cities: ["madrid", "paris"] },
  { name: "Anders Zorn", key: "Zorn", born: 1860, died: 1920, nationality: "swedish", movements: ["post-impressionism"], media: ["painting"], cities: ["paris", "stockholm"] },

  // Symbolism / Art Nouveau (~10)
  { name: "Gustav Klimt", key: "Klimt", born: 1862, died: 1918, nationality: "austrian", movements: ["art-nouveau", "symbolism"], media: ["painting"], cities: ["vienna"] },
  { name: "Alphonse Mucha", key: "Mucha", born: 1860, died: 1939, nationality: "czech", movements: ["art-nouveau"], media: ["painting", "drawing"], cities: ["paris", "prague"] },
  { name: "Gustave Moreau", key: "Moreau", born: 1826, died: 1898, nationality: "french", movements: ["symbolism"], media: ["painting"], cities: ["paris"] },
  { name: "Odilon Redon", key: "Redon", born: 1840, died: 1916, nationality: "french", movements: ["symbolism"], media: ["painting"], cities: ["paris"] },
  { name: "Fernand Khnopff", key: "Khnopff", born: 1858, died: 1921, nationality: "belgian", movements: ["symbolism"], media: ["painting"], cities: ["brussels"] },
  { name: "Pierre Puvis de Chavannes", key: "Puvis de Chavannes", born: 1824, died: 1898, nationality: "french", movements: ["symbolism"], media: ["painting"], cities: ["paris"] },
  { name: "Arnold Böcklin", key: "Böcklin", born: 1827, died: 1901, nationality: "swiss", movements: ["symbolism"], media: ["painting"], cities: ["rome", "zurich"] },
  { name: "Aubrey Beardsley", key: "Beardsley", born: 1872, died: 1898, nationality: "british", movements: ["art-nouveau"], media: ["drawing"], cities: ["london"] },
  { name: "Jan Toorop", key: "Toorop", born: 1858, died: 1928, nationality: "dutch", movements: ["symbolism", "art-nouveau"], media: ["painting", "drawing"], cities: ["amsterdam"] },
  { name: "Koloman Moser", key: "Moser", born: 1868, died: 1918, nationality: "austrian", movements: ["art-nouveau"], media: ["painting"], cities: ["vienna"] },

  // Fauvism / Expressionism (~15)
  { name: "Henri Matisse", key: "Matisse", born: 1869, died: 1954, nationality: "french", movements: ["fauvism", "modernism"], media: ["painting", "sculpture", "collage"], cities: ["paris", "nice"] },
  { name: "André Derain", key: "Derain", born: 1880, died: 1954, nationality: "french", movements: ["fauvism"], media: ["painting", "sculpture"], cities: ["paris"] },
  { name: "Maurice de Vlaminck", key: "Vlaminck", born: 1876, died: 1958, nationality: "french", movements: ["fauvism"], media: ["painting"], cities: ["paris"] },
  { name: "Raoul Dufy", key: "Dufy", born: 1877, died: 1953, nationality: "french", movements: ["fauvism"], media: ["painting"], cities: ["paris", "nice"] },
  { name: "Kees van Dongen", key: "Van Dongen", born: 1877, died: 1968, nationality: "dutch", movements: ["fauvism"], media: ["painting"], cities: ["paris"] },
  { name: "Georges Rouault", key: "Rouault", born: 1871, died: 1958, nationality: "french", movements: ["fauvism", "expressionism"], media: ["painting"], cities: ["paris"] },
  { name: "Edvard Munch", key: "Munch", born: 1863, died: 1944, nationality: "norwegian", movements: ["expressionism", "symbolism"], media: ["painting", "printmaking"], cities: ["oslo", "paris", "berlin"] },
  { name: "Egon Schiele", key: "Schiele", born: 1890, died: 1918, nationality: "austrian", movements: ["expressionism"], media: ["painting", "drawing"], cities: ["vienna"] },
  { name: "Ernst Ludwig Kirchner", key: "Kirchner", born: 1880, died: 1938, nationality: "german", movements: ["expressionism"], media: ["painting", "printmaking"], cities: ["berlin", "dresden"] },
  { name: "Franz Marc", key: "Marc", born: 1880, died: 1916, nationality: "german", movements: ["expressionism"], media: ["painting"], cities: ["munich"] },
  { name: "August Macke", key: "Macke", born: 1887, died: 1914, nationality: "german", movements: ["expressionism"], media: ["painting"], cities: ["munich", "berlin"] },
  { name: "Emil Nolde", key: "Nolde", born: 1867, died: 1956, nationality: "german", movements: ["expressionism"], media: ["painting"], cities: ["berlin"] },
  { name: "Oskar Kokoschka", key: "Kokoschka", born: 1886, died: 1980, nationality: "austrian", movements: ["expressionism"], media: ["painting"], cities: ["vienna", "london"] },
  { name: "Max Beckmann", key: "Beckmann", born: 1884, died: 1950, nationality: "german", movements: ["expressionism"], media: ["painting"], cities: ["berlin", "amsterdam", "newyork"] },
  { name: "Käthe Kollwitz", key: "Kollwitz", born: 1867, died: 1945, nationality: "german", movements: ["expressionism"], media: ["drawing", "printmaking", "sculpture"], cities: ["berlin"] },

  // Cubism / Futurism / Constructivism (~14)
  { name: "Pablo Picasso", key: "Picasso", born: 1881, died: 1973, nationality: "spanish", movements: ["cubism", "surrealism"], media: ["painting", "sculpture", "ceramics", "drawing", "printmaking"], cities: ["paris", "barcelona"] },
  { name: "Georges Braque", key: "Braque", born: 1882, died: 1963, nationality: "french", movements: ["cubism"], media: ["painting", "sculpture"], cities: ["paris"] },
  { name: "Juan Gris", key: "Gris", born: 1887, died: 1927, nationality: "spanish", movements: ["cubism"], media: ["painting"], cities: ["paris", "madrid"] },
  { name: "Fernand Léger", key: "Léger", born: 1881, died: 1955, nationality: "french", movements: ["cubism"], media: ["painting"], cities: ["paris"] },
  { name: "Robert Delaunay", key: "R. Delaunay", born: 1885, died: 1941, nationality: "french", movements: ["cubism", "abstract"], media: ["painting"], cities: ["paris"] },
  { name: "Sonia Delaunay", key: "S. Delaunay", born: 1885, died: 1979, nationality: "french", movements: ["cubism", "abstract"], media: ["painting"], cities: ["paris"] },
  { name: "Albert Gleizes", key: "Gleizes", born: 1881, died: 1953, nationality: "french", movements: ["cubism"], media: ["painting"], cities: ["paris"] },
  { name: "Umberto Boccioni", key: "Boccioni", born: 1882, died: 1916, nationality: "italian", movements: ["futurism"], media: ["painting", "sculpture"], cities: ["milan"] },
  { name: "Giacomo Balla", key: "Balla", born: 1871, died: 1958, nationality: "italian", movements: ["futurism"], media: ["painting"], cities: ["rome", "turin"] },
  { name: "Kazimir Malevitch", key: "Malevitch", born: 1879, died: 1935, nationality: "russian", movements: ["abstract", "constructivism"], media: ["painting"], cities: ["moscow", "stpetersburg"] },
  { name: "El Lissitzky", key: "Lissitzky", born: 1890, died: 1941, nationality: "russian", movements: ["constructivism"], media: ["painting", "drawing"], cities: ["moscow"] },
  { name: "Vladimir Tatline", key: "Tatline", born: 1885, died: 1953, nationality: "russian", movements: ["constructivism"], media: ["sculpture"], cities: ["moscow", "stpetersburg"] },
  { name: "Natalia Gontcharova", key: "Gontcharova", born: 1881, died: 1962, nationality: "russian", movements: ["futurism", "cubism"], media: ["painting"], cities: ["moscow", "paris"] },
  { name: "František Kupka", key: "Kupka", born: 1871, died: 1957, nationality: "czech", movements: ["abstract"], media: ["painting"], cities: ["paris", "prague"] },

  // Dada / Surrealism (~15)
  { name: "Marcel Duchamp", key: "Duchamp", born: 1887, died: 1968, nationality: "french", movements: ["dadaism", "surrealism"], media: ["sculpture", "painting"], cities: ["paris", "newyork"] },
  { name: "Max Ernst", key: "Ernst", born: 1891, died: 1976, nationality: "german", movements: ["surrealism", "dadaism"], media: ["painting", "sculpture", "collage"], cities: ["paris", "newyork", "cologne"] },
  { name: "Salvador Dalí", key: "Dalí", born: 1904, died: 1989, nationality: "spanish", movements: ["surrealism"], media: ["painting", "sculpture"], cities: ["paris", "figueres", "newyork"] },
  { name: "René Magritte", key: "Magritte", born: 1898, died: 1967, nationality: "belgian", movements: ["surrealism"], media: ["painting"], cities: ["brussels", "paris"] },
  { name: "Joan Miró", key: "Miró", born: 1893, died: 1983, nationality: "spanish", movements: ["surrealism"], media: ["painting", "sculpture", "ceramics"], cities: ["paris", "barcelona"] },
  { name: "Man Ray", key: "Man Ray", born: 1890, died: 1976, nationality: "american", movements: ["surrealism", "dadaism"], media: ["photography", "painting"], cities: ["paris", "newyork"] },
  { name: "Frida Kahlo", key: "Kahlo", born: 1907, died: 1954, nationality: "mexican", movements: ["surrealism"], media: ["painting"], cities: ["mexicocity"] },
  { name: "Jean Arp", key: "Arp", born: 1886, died: 1966, nationality: "french", movements: ["dadaism", "surrealism"], media: ["sculpture", "collage"], cities: ["paris", "zurich"] },
  { name: "Francis Picabia", key: "Picabia", born: 1879, died: 1953, nationality: "french", movements: ["dadaism", "surrealism"], media: ["painting"], cities: ["paris", "newyork"] },
  { name: "Kurt Schwitters", key: "Schwitters", born: 1887, died: 1948, nationality: "german", movements: ["dadaism"], media: ["collage", "sculpture"], cities: ["berlin", "london"] },
  { name: "Yves Tanguy", key: "Tanguy", born: 1900, died: 1955, nationality: "french", movements: ["surrealism"], media: ["painting"], cities: ["paris", "newyork"] },
  { name: "André Masson", key: "Masson", born: 1896, died: 1987, nationality: "french", movements: ["surrealism"], media: ["painting"], cities: ["paris"] },
  { name: "Leonora Carrington", key: "Carrington", born: 1917, died: 2011, nationality: "british", movements: ["surrealism"], media: ["painting", "sculpture"], cities: ["mexicocity", "paris"] },
  { name: "Paul Delvaux", key: "Delvaux", born: 1897, died: 1994, nationality: "belgian", movements: ["surrealism"], media: ["painting"], cities: ["brussels"] },
  { name: "Remedios Varo", key: "Varo", born: 1908, died: 1963, nationality: "spanish", movements: ["surrealism"], media: ["painting"], cities: ["mexicocity", "paris"] },

  // Abstract / De Stijl (~12)
  { name: "Vassily Kandinsky", key: "Kandinsky", born: 1866, died: 1944, nationality: "russian", movements: ["abstract", "expressionism"], media: ["painting"], cities: ["munich", "paris", "moscow"] },
  { name: "Piet Mondrian", key: "Mondrian", born: 1872, died: 1944, nationality: "dutch", movements: ["abstract", "de-stijl"], media: ["painting"], cities: ["paris", "amsterdam", "newyork"] },
  { name: "Paul Klee", key: "Klee", born: 1879, died: 1940, nationality: "swiss", movements: ["abstract", "expressionism"], media: ["painting"], cities: ["munich", "bern"] },
  { name: "Josef Albers", key: "Albers", born: 1888, died: 1976, nationality: "german", movements: ["abstract"], media: ["painting"], cities: ["berlin", "newyork"] },
  { name: "Hans Hartung", key: "Hartung", born: 1904, died: 1989, nationality: "german", movements: ["abstract"], media: ["painting"], cities: ["paris"] },
  { name: "Pierre Soulages", key: "Soulages", born: 1919, died: 2022, nationality: "french", movements: ["abstract"], media: ["painting"], cities: ["paris"] },
  { name: "Nicolas de Staël", key: "De Staël", born: 1914, died: 1955, nationality: "russian", movements: ["abstract"], media: ["painting"], cities: ["paris", "nice"] },
  { name: "Serge Poliakoff", key: "Poliakoff", born: 1900, died: 1969, nationality: "russian", movements: ["abstract"], media: ["painting"], cities: ["paris"] },
  { name: "Hilma af Klint", key: "Af Klint", born: 1862, died: 1944, nationality: "swedish", movements: ["abstract"], media: ["painting"], cities: ["stockholm"] },
  { name: "Sophie Taeuber-Arp", key: "Taeuber-Arp", born: 1889, died: 1943, nationality: "swiss", movements: ["abstract", "dadaism"], media: ["painting", "sculpture"], cities: ["zurich", "paris"] },
  { name: "László Moholy-Nagy", key: "Moholy-Nagy", born: 1895, died: 1946, nationality: "hungarian", movements: ["abstract", "constructivism"], media: ["painting", "photography", "sculpture"], cities: ["berlin", "chicago"] },
  { name: "Theo van Doesburg", key: "Van Doesburg", born: 1883, died: 1931, nationality: "dutch", movements: ["abstract", "de-stijl"], media: ["painting"], cities: ["paris", "amsterdam"] },

  // Abstract Expressionism (~10)
  { name: "Jackson Pollock", key: "Pollock", born: 1912, died: 1956, nationality: "american", movements: ["abstract-expressionism"], media: ["painting"], cities: ["newyork"] },
  { name: "Mark Rothko", key: "Rothko", born: 1903, died: 1970, nationality: "american", movements: ["abstract-expressionism"], media: ["painting"], cities: ["newyork"] },
  { name: "Willem de Kooning", key: "De Kooning", born: 1904, died: 1997, nationality: "dutch", movements: ["abstract-expressionism"], media: ["painting"], cities: ["newyork"] },
  { name: "Franz Kline", key: "Kline", born: 1910, died: 1962, nationality: "american", movements: ["abstract-expressionism"], media: ["painting"], cities: ["newyork"] },
  { name: "Barnett Newman", key: "Newman", born: 1905, died: 1970, nationality: "american", movements: ["abstract-expressionism"], media: ["painting"], cities: ["newyork"] },
  { name: "Helen Frankenthaler", key: "Frankenthaler", born: 1928, died: 2011, nationality: "american", movements: ["abstract-expressionism"], media: ["painting"], cities: ["newyork"] },
  { name: "Lee Krasner", key: "Krasner", born: 1908, died: 1984, nationality: "american", movements: ["abstract-expressionism"], media: ["painting"], cities: ["newyork"] },
  { name: "Robert Motherwell", key: "Motherwell", born: 1915, died: 1991, nationality: "american", movements: ["abstract-expressionism"], media: ["painting", "collage"], cities: ["newyork"] },
  { name: "Clyfford Still", key: "Still", born: 1904, died: 1980, nationality: "american", movements: ["abstract-expressionism"], media: ["painting"], cities: ["newyork"] },
  { name: "Sam Francis", key: "Francis", born: 1923, died: 1994, nationality: "american", movements: ["abstract-expressionism"], media: ["painting"], cities: ["losangeles", "paris"] },

  // Pop Art / Nouveau Réalisme (~12)
  { name: "Andy Warhol", key: "Warhol", born: 1928, died: 1987, nationality: "american", movements: ["pop-art"], media: ["painting", "printmaking", "photography"], cities: ["newyork"] },
  { name: "Roy Lichtenstein", key: "Lichtenstein", born: 1923, died: 1997, nationality: "american", movements: ["pop-art"], media: ["painting", "sculpture"], cities: ["newyork"] },
  { name: "David Hockney", key: "Hockney", born: 1937, died: null, nationality: "british", movements: ["pop-art"], media: ["painting", "drawing", "photography"], cities: ["london", "losangeles"] },
  { name: "Claes Oldenburg", key: "Oldenburg", born: 1929, died: 2022, nationality: "swedish", movements: ["pop-art"], media: ["sculpture"], cities: ["newyork"] },
  { name: "Robert Rauschenberg", key: "Rauschenberg", born: 1925, died: 2008, nationality: "american", movements: ["pop-art"], media: ["painting", "collage", "sculpture"], cities: ["newyork"] },
  { name: "Jasper Johns", key: "Johns", born: 1930, died: null, nationality: "american", movements: ["pop-art"], media: ["painting", "sculpture"], cities: ["newyork"] },
  { name: "Richard Hamilton", key: "Hamilton", born: 1922, died: 2011, nationality: "british", movements: ["pop-art"], media: ["painting", "collage"], cities: ["london"] },
  { name: "Yves Klein", key: "Klein", born: 1928, died: 1962, nationality: "french", movements: ["nouveau-realisme"], media: ["painting", "sculpture"], cities: ["paris", "nice"] },
  { name: "Niki de Saint Phalle", key: "Saint Phalle", born: 1930, died: 2002, nationality: "french", movements: ["nouveau-realisme"], media: ["sculpture", "painting"], cities: ["paris"] },
  { name: "Jean Tinguely", key: "Tinguely", born: 1925, died: 1991, nationality: "swiss", movements: ["nouveau-realisme"], media: ["sculpture"], cities: ["paris"] },
  { name: "Tom Wesselmann", key: "Wesselmann", born: 1931, died: 2004, nationality: "american", movements: ["pop-art"], media: ["painting", "collage"], cities: ["newyork"] },
  { name: "James Rosenquist", key: "Rosenquist", born: 1933, died: 2017, nationality: "american", movements: ["pop-art"], media: ["painting"], cities: ["newyork"] },

  // Minimalism / Conceptual (~8)
  { name: "Donald Judd", key: "Judd", born: 1928, died: 1994, nationality: "american", movements: ["minimalism"], media: ["sculpture"], cities: ["newyork"] },
  { name: "Dan Flavin", key: "Flavin", born: 1933, died: 1996, nationality: "american", movements: ["minimalism"], media: ["sculpture", "installation"], cities: ["newyork"] },
  { name: "Sol LeWitt", key: "LeWitt", born: 1928, died: 2007, nationality: "american", movements: ["minimalism", "conceptual"], media: ["sculpture", "drawing"], cities: ["newyork"] },
  { name: "Agnes Martin", key: "Martin", born: 1912, died: 2004, nationality: "american", movements: ["minimalism"], media: ["painting"], cities: ["newyork", "santafe"] },
  { name: "Frank Stella", key: "Stella", born: 1936, died: 2024, nationality: "american", movements: ["minimalism"], media: ["painting", "sculpture"], cities: ["newyork"] },
  { name: "Richard Serra", key: "Serra", born: 1938, died: 2024, nationality: "american", movements: ["minimalism"], media: ["sculpture"], cities: ["newyork"] },
  { name: "Ellsworth Kelly", key: "Kelly", born: 1923, died: 2015, nationality: "american", movements: ["minimalism"], media: ["painting", "sculpture"], cities: ["newyork", "paris"] },
  { name: "Carl Andre", key: "Andre", born: 1935, died: 2024, nationality: "american", movements: ["minimalism"], media: ["sculpture"], cities: ["newyork"] },

  // Neo-Expressionism / Contemporary (~25)
  { name: "Jean-Michel Basquiat", key: "Basquiat", born: 1960, died: 1988, nationality: "american", movements: ["neo-expressionism"], media: ["painting"], cities: ["newyork"] },
  { name: "Francis Bacon", key: "Bacon", born: 1909, died: 1992, nationality: "irish", movements: ["figurative", "expressionism"], media: ["painting"], cities: ["london", "paris"] },
  { name: "Lucian Freud", key: "Freud", born: 1922, died: 2011, nationality: "british", movements: ["figurative"], media: ["painting"], cities: ["london"] },
  { name: "Louise Bourgeois", key: "Bourgeois", born: 1911, died: 2010, nationality: "french", movements: ["contemporary"], media: ["sculpture", "installation"], cities: ["newyork", "paris"] },
  { name: "Yayoi Kusama", key: "Kusama", born: 1929, died: null, nationality: "japanese", movements: ["contemporary"], media: ["painting", "sculpture", "installation"], cities: ["tokyo", "newyork"] },
  { name: "Ai Weiwei", key: "Ai Weiwei", born: 1957, died: null, nationality: "chinese", movements: ["contemporary"], media: ["sculpture", "installation"], cities: ["beijing", "berlin"] },
  { name: "Jeff Koons", key: "Koons", born: 1955, died: null, nationality: "american", movements: ["contemporary", "pop-art"], media: ["sculpture"], cities: ["newyork"] },
  { name: "Banksy", key: "Banksy", born: 1974, died: null, nationality: "british", movements: ["street-art"], media: ["painting", "installation"], cities: ["london", "bristol"] },
  { name: "Amedeo Modigliani", key: "Modigliani", born: 1884, died: 1920, nationality: "italian", movements: ["expressionism", "modernism"], media: ["painting", "sculpture"], cities: ["paris"] },
  { name: "Marc Chagall", key: "Chagall", born: 1887, died: 1985, nationality: "russian", movements: ["modernism"], media: ["painting"], cities: ["paris", "newyork"] },
  { name: "Georgia O'Keeffe", key: "O'Keeffe", born: 1887, died: 1986, nationality: "american", movements: ["modernism"], media: ["painting"], cities: ["newyork", "santafe"] },
  { name: "Gerhard Richter", key: "Richter", born: 1932, died: null, nationality: "german", movements: ["contemporary"], media: ["painting"], cities: ["berlin", "cologne", "dresden"] },
  { name: "Anselm Kiefer", key: "Kiefer", born: 1945, died: null, nationality: "german", movements: ["neo-expressionism"], media: ["painting", "sculpture"], cities: ["berlin", "paris"] },
  { name: "Georg Baselitz", key: "Baselitz", born: 1938, died: null, nationality: "german", movements: ["neo-expressionism"], media: ["painting", "sculpture"], cities: ["berlin", "munich"] },
  { name: "Marina Abramović", key: "Abramović", born: 1946, died: null, nationality: "serbian", movements: ["contemporary"], media: ["installation"], cities: ["newyork", "amsterdam"] },
  { name: "Cindy Sherman", key: "Sherman", born: 1954, died: null, nationality: "american", movements: ["contemporary"], media: ["photography"], cities: ["newyork"] },
  { name: "Keith Haring", key: "Haring", born: 1958, died: 1990, nationality: "american", movements: ["street-art", "pop-art"], media: ["painting", "drawing"], cities: ["newyork"] },
  { name: "Takashi Murakami", key: "Murakami", born: 1962, died: null, nationality: "japanese", movements: ["contemporary"], media: ["painting", "sculpture"], cities: ["tokyo"] },
  { name: "Damien Hirst", key: "Hirst", born: 1965, died: null, nationality: "british", movements: ["contemporary"], media: ["sculpture", "installation"], cities: ["london"] },
  { name: "Anish Kapoor", key: "Kapoor", born: 1954, died: null, nationality: "indian", movements: ["contemporary"], media: ["sculpture", "installation"], cities: ["london"] },
  { name: "JR", key: "JR", born: 1983, died: null, nationality: "french", movements: ["street-art"], media: ["photography", "installation"], cities: ["paris", "newyork"] },
  { name: "Shepard Fairey", key: "Fairey", born: 1970, died: null, nationality: "american", movements: ["street-art"], media: ["painting", "printmaking"], cities: ["losangeles"] },
  { name: "Maurizio Cattelan", key: "Cattelan", born: 1960, died: null, nationality: "italian", movements: ["contemporary"], media: ["sculpture", "installation"], cities: ["newyork", "milan"] },
  { name: "Christian Boltanski", key: "Boltanski", born: 1944, died: 2021, nationality: "french", movements: ["contemporary"], media: ["installation", "photography"], cities: ["paris"] },
  { name: "Daniel Buren", key: "Buren", born: 1938, died: null, nationality: "french", movements: ["conceptual"], media: ["installation", "painting"], cities: ["paris"] },

  // Photography (~8)
  { name: "Henri Cartier-Bresson", key: "Cartier-Bresson", born: 1908, died: 2004, nationality: "french", movements: ["modernism"], media: ["photography"], cities: ["paris"] },
  { name: "Robert Doisneau", key: "Doisneau", born: 1912, died: 1994, nationality: "french", movements: ["modernism"], media: ["photography"], cities: ["paris"] },
  { name: "Diane Arbus", key: "Arbus", born: 1923, died: 1971, nationality: "american", movements: ["contemporary"], media: ["photography"], cities: ["newyork"] },
  { name: "Richard Avedon", key: "Avedon", born: 1923, died: 2004, nationality: "american", movements: ["contemporary"], media: ["photography"], cities: ["newyork", "paris"] },
  { name: "Annie Leibovitz", key: "Leibovitz", born: 1949, died: null, nationality: "american", movements: ["contemporary"], media: ["photography"], cities: ["newyork"] },
  { name: "Robert Mapplethorpe", key: "Mapplethorpe", born: 1946, died: 1989, nationality: "american", movements: ["contemporary"], media: ["photography", "sculpture"], cities: ["newyork"] },
  { name: "Sebastião Salgado", key: "Salgado", born: 1944, died: null, nationality: "brazilian", movements: ["contemporary"], media: ["photography"], cities: ["paris"] },
  { name: "Helmut Newton", key: "Newton", born: 1920, died: 2004, nationality: "australian", movements: ["contemporary"], media: ["photography"], cities: ["paris", "losangeles"] },

  // Modern Sculpture
  { name: "Alberto Giacometti", key: "Giacometti", born: 1901, died: 1966, nationality: "swiss", movements: ["surrealism", "modernism"], media: ["sculpture", "painting"], cities: ["paris"] },
  { name: "Constantin Brancusi", key: "Brancusi", born: 1876, died: 1957, nationality: "romanian", movements: ["modernism"], media: ["sculpture"], cities: ["paris"] },
  { name: "Alexander Calder", key: "Calder", born: 1898, died: 1976, nationality: "american", movements: ["modernism"], media: ["sculpture"], cities: ["paris", "newyork"] },

  // ── Women artists (additional) ──
  { name: "Sofonisba Anguissola", key: "Anguissola", born: 1532, died: 1625, nationality: "italian", movements: ["renaissance"], media: ["painting"], cities: ["milan", "rome", "madrid"] },
  { name: "Lavinia Fontana", key: "Fontana", born: 1552, died: 1614, nationality: "italian", movements: ["renaissance"], media: ["painting"], cities: ["rome"] },
  { name: "Judith Leyster", key: "Leyster", born: 1609, died: 1660, nationality: "dutch", movements: ["baroque"], media: ["painting"], cities: ["haarlem"] },
  { name: "Angelica Kauffman", key: "Kauffman", born: 1741, died: 1807, nationality: "swiss", movements: ["neoclassicism"], media: ["painting"], cities: ["london", "rome"] },
  { name: "Adélaïde Labille-Guiard", key: "Labille-Guiard", born: 1749, died: 1803, nationality: "french", movements: ["neoclassicism"], media: ["painting"], cities: ["paris"] },
  { name: "Suzanne Valadon", key: "Valadon", born: 1865, died: 1938, nationality: "french", movements: ["post-impressionism"], media: ["painting"], cities: ["paris"] },
  { name: "Paula Modersohn-Becker", key: "Modersohn-Becker", born: 1876, died: 1907, nationality: "german", movements: ["expressionism"], media: ["painting"], cities: ["berlin", "paris"] },
  { name: "Gabriele Münter", key: "Münter", born: 1877, died: 1962, nationality: "german", movements: ["expressionism"], media: ["painting"], cities: ["munich"] },
  { name: "Marie Laurencin", key: "Laurencin", born: 1883, died: 1956, nationality: "french", movements: ["cubism"], media: ["painting"], cities: ["paris"] },
  { name: "Sonia Delaunay", key: "Sonia Delaunay", born: 1885, died: 1979, nationality: "french", movements: ["cubism", "abstract"], media: ["painting"], cities: ["paris"] },
  { name: "Tamara de Lempicka", key: "Lempicka", born: 1898, died: 1980, nationality: "polish", movements: ["modernism"], media: ["painting"], cities: ["paris", "newyork"] },
  { name: "Dorothea Tanning", key: "Tanning", born: 1910, died: 2012, nationality: "american", movements: ["surrealism"], media: ["painting", "sculpture"], cities: ["newyork", "paris"] },
  { name: "Meret Oppenheim", key: "Oppenheim", born: 1913, died: 1985, nationality: "swiss", movements: ["surrealism"], media: ["sculpture", "painting"], cities: ["paris", "bern"] },
  { name: "Barbara Hepworth", key: "Hepworth", born: 1903, died: 1975, nationality: "british", movements: ["modernism"], media: ["sculpture"], cities: ["london"] },
  { name: "Joan Mitchell", key: "Mitchell", born: 1925, died: 1992, nationality: "american", movements: ["abstract-expressionism"], media: ["painting"], cities: ["newyork", "paris"] },
  { name: "Bridget Riley", key: "Riley", born: 1931, died: null, nationality: "british", movements: ["contemporary"], media: ["painting"], cities: ["london"] },
  { name: "Eva Hesse", key: "Hesse", born: 1936, died: 1970, nationality: "german", movements: ["minimalism"], media: ["sculpture"], cities: ["newyork"] },
  { name: "Judy Chicago", key: "Chicago", born: 1939, died: null, nationality: "american", movements: ["contemporary"], media: ["installation", "painting"], cities: ["losangeles"] },
  { name: "Jenny Holzer", key: "Holzer", born: 1950, died: null, nationality: "american", movements: ["conceptual"], media: ["installation"], cities: ["newyork"] },
  { name: "Marlene Dumas", key: "Dumas", born: 1953, died: null, nationality: "dutch", movements: ["contemporary"], media: ["painting"], cities: ["amsterdam"] },
  { name: "Kiki Smith", key: "Kiki Smith", born: 1954, died: null, nationality: "american", movements: ["contemporary"], media: ["sculpture", "drawing"], cities: ["newyork"] },
  { name: "Rachel Whiteread", key: "Whiteread", born: 1963, died: null, nationality: "british", movements: ["contemporary"], media: ["sculpture"], cities: ["london"] },
  { name: "Shirin Neshat", key: "Neshat", born: 1957, died: null, nationality: "iranian", movements: ["contemporary"], media: ["photography", "installation"], cities: ["newyork"] },
  { name: "Jenny Saville", key: "Saville", born: 1970, died: null, nationality: "british", movements: ["contemporary"], media: ["painting"], cities: ["london"] },
  { name: "Wangechi Mutu", key: "Mutu", born: 1972, died: null, nationality: "kenyan", movements: ["contemporary"], media: ["sculpture", "painting"], cities: ["newyork"] },
  { name: "Amy Sherald", key: "Sherald", born: 1973, died: null, nationality: "american", movements: ["contemporary"], media: ["painting"], cities: ["newyork"] },
  { name: "Lubaina Himid", key: "Himid", born: 1954, died: null, nationality: "british", movements: ["contemporary"], media: ["painting", "installation"], cities: ["london"] },
  { name: "Cecily Brown", key: "Brown", born: 1969, died: null, nationality: "british", movements: ["contemporary"], media: ["painting"], cities: ["newyork"] },
  { name: "Julie Mehretu", key: "Mehretu", born: 1970, died: null, nationality: "american", movements: ["contemporary"], media: ["painting"], cities: ["newyork"] },
  { name: "Ana Mendieta", key: "Mendieta", born: 1948, died: 1985, nationality: "cuban", movements: ["contemporary"], media: ["installation", "sculpture"], cities: ["newyork"] },

  // ── More women artists ──
  { name: "Élisabeth-Sophie Chéron", key: "Chéron", born: 1648, died: 1711, nationality: "french", movements: ["baroque"], media: ["painting"], cities: ["paris"] },
  { name: "Clara Peeters", key: "Peeters", born: 1594, died: 1657, nationality: "flemish", movements: ["baroque"], media: ["painting"], cities: ["antwerp"] },
  { name: "Rachel Ruysch", key: "Ruysch", born: 1664, died: 1750, nationality: "dutch", movements: ["baroque"], media: ["painting"], cities: ["amsterdam"] },
  { name: "Élaine de Kooning", key: "Élaine de Kooning", born: 1918, died: 1989, nationality: "american", movements: ["abstract-expressionism"], media: ["painting"], cities: ["newyork"] },
  { name: "Alice Neel", key: "Neel", born: 1900, died: 1984, nationality: "american", movements: ["figurative", "expressionism"], media: ["painting"], cities: ["newyork"] },
  { name: "Grace Hartigan", key: "Hartigan", born: 1922, died: 2008, nationality: "american", movements: ["abstract-expressionism"], media: ["painting"], cities: ["newyork"] },
  { name: "Alma Thomas", key: "Thomas", born: 1891, died: 1978, nationality: "american", movements: ["abstract"], media: ["painting"], cities: ["newyork"] },
  { name: "Lois Mailou Jones", key: "Mailou Jones", born: 1905, died: 1998, nationality: "american", movements: ["modernism"], media: ["painting"], cities: ["paris", "newyork"] },
  { name: "Leonor Fini", key: "Fini", born: 1907, died: 1996, nationality: "italian", movements: ["surrealism"], media: ["painting"], cities: ["paris"] },
  { name: "Dora Maar", key: "Maar", born: 1907, died: 1997, nationality: "french", movements: ["surrealism"], media: ["photography", "painting"], cities: ["paris"] },
  { name: "Lee Miller", key: "Miller", born: 1907, died: 1977, nationality: "american", movements: ["surrealism"], media: ["photography"], cities: ["paris", "london"] },
  { name: "Claude Cahun", key: "Cahun", born: 1894, died: 1954, nationality: "french", movements: ["surrealism"], media: ["photography"], cities: ["paris"] },
  { name: "Toyen", key: "Toyen", born: 1902, died: 1980, nationality: "czech", movements: ["surrealism"], media: ["painting"], cities: ["paris", "prague"] },
  { name: "Germaine Richier", key: "Richier", born: 1902, died: 1959, nationality: "french", movements: ["modernism"], media: ["sculpture"], cities: ["paris"] },
  { name: "Niki de Saint Phalle", key: "Saint Phalle", born: 1930, died: 2002, nationality: "french", movements: ["nouveau-realisme"], media: ["sculpture", "painting"], cities: ["paris", "newyork"] },
  { name: "Lygia Clark", key: "Clark", born: 1920, died: 1988, nationality: "brazilian", movements: ["contemporary"], media: ["sculpture", "installation"], cities: ["paris"] },
  { name: "Lygia Pape", key: "Pape", born: 1927, died: 2004, nationality: "brazilian", movements: ["contemporary"], media: ["sculpture", "installation"], cities: [] },
  { name: "Magdalena Abakanowicz", key: "Abakanowicz", born: 1930, died: 2017, nationality: "polish", movements: ["contemporary"], media: ["sculpture"], cities: [] },
  { name: "Pipilotti Rist", key: "Rist", born: 1962, died: null, nationality: "swiss", movements: ["contemporary"], media: ["installation"], cities: ["zurich"] },
  { name: "Annette Messager", key: "Messager", born: 1943, died: null, nationality: "french", movements: ["contemporary"], media: ["installation", "sculpture"], cities: ["paris"] },
  { name: "Sophie Calle", key: "Calle", born: 1953, died: null, nationality: "french", movements: ["conceptual"], media: ["photography", "installation"], cities: ["paris"] },
  { name: "Rosemarie Trockel", key: "Trockel", born: 1952, died: null, nationality: "german", movements: ["contemporary"], media: ["sculpture", "installation"], cities: ["cologne"] },
  { name: "Sheila Hicks", key: "Hicks", born: 1934, died: null, nationality: "american", movements: ["contemporary"], media: ["sculpture"], cities: ["paris"] },
  { name: "Betye Saar", key: "Saar", born: 1926, died: null, nationality: "american", movements: ["contemporary"], media: ["sculpture", "installation"], cities: ["losangeles"] },
  { name: "Faith Ringgold", key: "Ringgold", born: 1930, died: 2024, nationality: "american", movements: ["contemporary"], media: ["painting"], cities: ["newyork"] },
  { name: "Kara Walker", key: "Walker", born: 1969, died: null, nationality: "american", movements: ["contemporary"], media: ["drawing", "installation"], cities: ["newyork"] },
  { name: "Njideka Akunyili Crosby", key: "Akunyili Crosby", born: 1983, died: null, nationality: "nigerian", movements: ["contemporary"], media: ["painting"], cities: ["losangeles"] },
  { name: "Zanele Muholi", key: "Muholi", born: 1972, died: null, nationality: "south-african", movements: ["contemporary"], media: ["photography"], cities: [] },
  { name: "Cao Fei", key: "Cao Fei", born: 1978, died: null, nationality: "chinese", movements: ["contemporary"], media: ["installation"], cities: ["beijing"] },
  { name: "Bharti Kher", key: "Kher", born: 1969, died: null, nationality: "indian", movements: ["contemporary"], media: ["sculpture"], cities: [] },
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
  "futurism": "Futurisme",
  "constructivism": "Constructivisme",
  "minimalism": "Minimalisme",
  "nouveau-realisme": "Nouveau réalisme",
  "conceptual": "Art conceptuel",
  "naive": "Art naïf",
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
  "swedish": "Suédois(e)",
  "danish": "Danois(e)",
  "brazilian": "Brésilien(ne)",
  "hungarian": "Hongrois(e)",
  "chilean": "Chilien(ne)",
  "serbian": "Serbe",
  "greek": "Grec(que)",
  "indian": "Indien(ne)",
  "nigerian": "Nigérian(e)",
  "ethiopian": "Éthiopien(ne)",
  "korean": "Coréen(ne)",
  "polish": "Polonais(e)",
  "portuguese": "Portugais(e)",
  "finnish": "Finlandais(e)",
  "colombian": "Colombien(ne)",
  "cuban": "Cubain(e)",
  "argentine": "Argentin(e)",
  "bulgarian": "Bulgare",
  "australian": "Australien(ne)",
  "iranian": "Iranien(ne)",
  "kenyan": "Kényan(e)",
  "icelandic": "Islandais(e)",
  "canadian": "Canadien(ne)",
  "ukrainian": "Ukrainien(ne)",
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
  "prague": "Prague",
  "milan": "Milan",
  "naples": "Naples",
  "antwerp": "Anvers",
  "seville": "Séville",
  "giverny": "Giverny",
  "arles": "Arles",
  "delft": "Delft",
  "aix": "Aix-en-Provence",
  "barbizon": "Barbizon",
  "tahiti": "Tahiti",
  "mexicocity": "Mexico",
  "beijing": "Pékin",
  "bristol": "Bristol",
  "bern": "Berne",
  "zurich": "Zurich",
  "figueres": "Figueres",
  "santafe": "Santa Fe",
  "turin": "Turin",
  "cologne": "Cologne",
  "haarlem": "Haarlem",
  "nuremberg": "Nuremberg",
  "chicago": "Chicago",
  "philadelphia": "Philadelphie",
  "stpetersburg": "Saint-Pétersbourg",
  "stockholm": "Stockholm",
  "lisbon": "Lisbonne",
  "buenosaires": "Buenos Aires",
  "havana": "La Havane",
  "copenhagen": "Copenhague",
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

// ══════════════════════════════════════════════════
// DETERMINISTIC GRID GENERATOR
// Same date → same grid, always. No cron needed.
// ══════════════════════════════════════════════════

function mulberry32(seed) {
  return function() {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function hashDate(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h) + str.charCodeAt(i);
    h |= 0;
  }
  return h;
}

const CATEGORY_POOL = {
  movement: [
    { type: "movement", id: "impressionism", label: "Impressionnisme" },
    { type: "movement", id: "cubism", label: "Cubisme" },
    { type: "movement", id: "surrealism", label: "Surréalisme" },
    { type: "movement", id: "baroque", label: "Baroque" },
    { type: "movement", id: "renaissance", label: "Renaissance" },
    { type: "movement", id: "romanticism", label: "Romantisme" },
    { type: "movement", id: "realism", label: "Réalisme" },
    { type: "movement", id: "fauvism", label: "Fauvisme" },
    { type: "movement", id: "expressionism", label: "Expressionnisme" },
    { type: "movement", id: "post-impressionism", label: "Post-impressionnisme" },
    { type: "movement", id: "pop-art", label: "Pop Art" },
    { type: "movement", id: "abstract-expressionism", label: "Expr. abstrait" },
    { type: "movement", id: "symbolism", label: "Symbolisme" },
    { type: "movement", id: "neoclassicism", label: "Néoclassicisme" },
    { type: "movement", id: "futurism", label: "Futurisme" },
    { type: "movement", id: "minimalism", label: "Minimalisme" },
    { type: "movement", id: "constructivism", label: "Constructivisme" },
    { type: "movement", id: "nouveau-realisme", label: "Nouveau réalisme" },
  ],
  nationality: [
    { type: "nationality", id: "french", label: "Français(e)" },
    { type: "nationality", id: "spanish", label: "Espagnol(e)" },
    { type: "nationality", id: "italian", label: "Italien(ne)" },
    { type: "nationality", id: "dutch", label: "Néerlandais(e)" },
    { type: "nationality", id: "american", label: "Américain(e)" },
    { type: "nationality", id: "british", label: "Britannique" },
    { type: "nationality", id: "german", label: "Allemand(e)" },
    { type: "nationality", id: "swedish", label: "Suédois(e)" },
    { type: "nationality", id: "hungarian", label: "Hongrois(e)" },
  ],
  city: [
    { type: "city", id: "paris", label: "A travaillé à Paris" },
    { type: "city", id: "newyork", label: "A travaillé à New York" },
    { type: "city", id: "rome", label: "A travaillé à Rome" },
    { type: "city", id: "london", label: "A travaillé à Londres" },
    { type: "city", id: "florence", label: "A travaillé à Florence" },
    { type: "city", id: "berlin", label: "A travaillé à Berlin" },
    { type: "city", id: "vienna", label: "A travaillé à Vienne" },
    { type: "city", id: "amsterdam", label: "A travaillé à Amsterdam" },
    { type: "city", id: "munich", label: "A travaillé à Munich" },
  ],
  firstLetter: [
    { type: "firstLetter", letter: "M", label: "Commence par la lettre 'M'" },
    { type: "firstLetter", letter: "D", label: "Commence par la lettre 'D'" },
    { type: "firstLetter", letter: "C", label: "Commence par la lettre 'C'" },
    { type: "firstLetter", letter: "R", label: "Commence par la lettre 'R'" },
    { type: "firstLetter", letter: "G", label: "Commence par la lettre 'G'" },
    { type: "firstLetter", letter: "B", label: "Commence par la lettre 'B'" },
    { type: "firstLetter", letter: "P", label: "Commence par la lettre 'P'" },
    { type: "firstLetter", letter: "K", label: "Commence par la lettre 'K'" },
    { type: "firstLetter", letter: "S", label: "Commence par la lettre 'S'" },
    { type: "firstLetter", letter: "T", label: "Commence par la lettre 'T'" },
    { type: "firstLetter", letter: "V", label: "Commence par la lettre 'V'" },
    { type: "firstLetter", letter: "F", label: "Commence par la lettre 'F'" },
  ],
  firstNameLetter: [
    { type: "firstNameLetter", letter: "P", label: "Prénom commence par 'P'" },
    { type: "firstNameLetter", letter: "J", label: "Prénom commence par 'J'" },
    { type: "firstNameLetter", letter: "H", label: "Prénom commence par 'H'" },
    { type: "firstNameLetter", letter: "A", label: "Prénom commence par 'A'" },
    { type: "firstNameLetter", letter: "M", label: "Prénom commence par 'M'" },
    { type: "firstNameLetter", letter: "F", label: "Prénom commence par 'F'" },
    { type: "firstNameLetter", letter: "G", label: "Prénom commence par 'G'" },
    { type: "firstNameLetter", letter: "R", label: "Prénom commence par 'R'" },
    { type: "firstNameLetter", letter: "L", label: "Prénom commence par 'L'" },
    { type: "firstNameLetter", letter: "S", label: "Prénom commence par 'S'" },
    { type: "firstNameLetter", letter: "C", label: "Prénom commence par 'C'" },
    { type: "firstNameLetter", letter: "E", label: "Prénom commence par 'E'" },
    { type: "firstNameLetter", letter: "D", label: "Prénom commence par 'D'" },
  ],
  containsLetter: [
    { type: "containsLetter", letter: "O", label: "Contient 'O' dans le nom" },
    { type: "containsLetter", letter: "A", label: "Contient 'A' dans le nom" },
    { type: "containsLetter", letter: "E", label: "Contient 'E' dans le nom" },
    { type: "containsLetter", letter: "I", label: "Contient 'I' dans le nom" },
    { type: "containsLetter", letter: "R", label: "Contient 'R' dans le nom" },
    { type: "containsLetter", letter: "N", label: "Contient 'N' dans le nom" },
    { type: "containsLetter", letter: "L", label: "Contient 'L' dans le nom" },
  ],
  medium: [
    { type: "medium", id: "sculpture", label: "Aussi sculpteur" },
  ],
  century: [
    { type: "century", century: 20, label: "Actif au XXe siècle" },
    { type: "century", century: 19, label: "Actif au XIXe siècle" },
  ],
};

const GRID_TEMPLATES = [
  { cols: ["movement", "nationality", "containsLetter"], rows: ["city", "firstLetter", "medium"] },
  { cols: ["movement", "firstLetter", "city"], rows: ["nationality", "containsLetter", "medium"] },
  { cols: ["nationality", "containsLetter", "century"], rows: ["city", "firstLetter", "medium"] },
  { cols: ["city", "movement", "containsLetter"], rows: ["nationality", "firstLetter", "century"] },
  { cols: ["containsLetter", "movement", "city"], rows: ["nationality", "firstLetter", "medium"] },
  { cols: ["firstLetter", "nationality", "century"], rows: ["movement", "containsLetter", "city"] },
  { cols: ["movement", "containsLetter", "medium"], rows: ["nationality", "city", "firstLetter"] },
  { cols: ["nationality", "city", "firstLetter"], rows: ["movement", "containsLetter", "century"] },
  { cols: ["movement", "city", "firstLetter"], rows: ["containsLetter", "nationality", "medium"] },
  { cols: ["containsLetter", "nationality", "city"], rows: ["firstLetter", "movement", "medium"] },
  { cols: ["century", "movement", "firstLetter"], rows: ["city", "containsLetter", "nationality"] },
  { cols: ["city", "containsLetter", "medium"], rows: ["movement", "firstLetter", "nationality"] },
  { cols: ["movement", "firstNameLetter", "city"], rows: ["nationality", "containsLetter", "medium"] },
  { cols: ["firstNameLetter", "nationality", "containsLetter"], rows: ["movement", "city", "medium"] },
  { cols: ["city", "movement", "firstNameLetter"], rows: ["containsLetter", "nationality", "century"] },
  { cols: ["nationality", "containsLetter", "medium"], rows: ["firstNameLetter", "movement", "city"] },
  { cols: ["movement", "city", "containsLetter"], rows: ["firstNameLetter", "nationality", "medium"] },
  { cols: ["firstNameLetter", "movement", "medium"], rows: ["city", "containsLetter", "nationality"] },
];

function _matchCat(cat, artist) {
  const key = artist.key.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  switch (cat.type) {
    case "containsLetter": return key.includes(cat.letter.toLowerCase());
    case "firstLetter": return key.startsWith(cat.letter.toLowerCase());
    case "firstNameLetter": {
      const fn = artist.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      return fn.startsWith(cat.letter.toLowerCase());
    }
    case "movement": return artist.movements.includes(cat.id);
    case "nationality": return artist.nationality === cat.id;
    case "medium": return artist.media.includes(cat.id);
    case "city": return artist.cities.includes(cat.id);
    case "century": {
      const s = (cat.century - 1) * 100, e = cat.century * 100;
      return artist.born < e && (artist.died || 2026) > s;
    }
    default: return false;
  }
}

function _pick(arr, rng) {
  return arr[Math.floor(rng() * arr.length)];
}

function _shuffle(arr, rng) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const WOMEN_ARTISTS = new Set([
  "Morisot","Cassatt","Kahlo","Bourgeois","Kusama","O'Keeffe","Gentileschi",
  "Vigée Le Brun","Bonheur","Claudel","Kollwitz","Gontcharova","Carrington",
  "Varo","Af Klint","Taeuber-Arp","Frankenthaler","Krasner","Saint Phalle",
  "Martin","Abramović","Sherman","Arbus","Leibovitz","Anguissola","Fontana",
  "Leyster","Kauffman","Labille-Guiard","Valadon","Modersohn-Becker","Münter",
  "Laurencin","Sonia Delaunay","Lempicka","Tanning","Oppenheim","Hepworth",
  "Mitchell","Riley","Hesse","Chicago","Holzer","Dumas","Kiki Smith",
  "Whiteread","Neshat","Saville","Mutu","Sherald","Himid","Brown","Mehretu",
  "Mendieta","Chéron","Peeters","Ruysch","Élaine de Kooning","Neel",
  "Hartigan","Thomas","Mailou Jones","Fini","Maar","Miller","Cahun","Toyen",
  "Richier","Clark","Pape","Abakanowicz","Rist","Messager","Calle","Trockel",
  "Hicks","Saar","Ringgold","Walker","Akunyili Crosby","Muholi","Cao Fei","Kher",
]);

function _validateGrid(cols, rows) {
  let minSolutions = Infinity;
  let cellsWithWomen = 0;
  for (const row of rows) {
    for (const col of cols) {
      const matches = ARTISTS.filter(a => _matchCat(row, a) && _matchCat(col, a));
      if (matches.length === 0) return { valid: false, min: 0 };
      minSolutions = Math.min(minSolutions, matches.length);
      if (matches.some(a => WOMEN_ARTISTS.has(a.key))) cellsWithWomen++;
    }
  }
  if (cellsWithWomen < 2) return { valid: false, min: 0 };
  return { valid: true, min: minSolutions };
}

function generateGrid(dateStr) {
  const hardcoded = GRIDS.find(g => g.date === dateStr);
  if (hardcoded) return hardcoded;

  for (let attempt = 0; attempt < 200; attempt++) {
    const rng = mulberry32(hashDate(dateStr) + attempt * 7919);

    const template = _pick(GRID_TEMPLATES, rng);

    const cols = template.cols.map(group => {
      const pool = CATEGORY_POOL[group];
      return pool ? _pick(_shuffle(pool, rng), rng) : null;
    }).filter(Boolean);

    const rows = template.rows.map(group => {
      const pool = CATEGORY_POOL[group];
      return pool ? _pick(_shuffle(pool, rng), rng) : null;
    }).filter(Boolean);

    if (cols.length !== 3 || rows.length !== 3) continue;

    const hasDupe = new Set([...cols, ...rows].map(c => JSON.stringify(c))).size < 6;
    if (hasDupe) continue;

    const { valid, min } = _validateGrid(cols, rows);
    if (!valid) continue;

    let difficulty, difficultyLabel;
    if (min >= 6) { difficulty = 1; difficultyLabel = "Très facile"; }
    else if (min >= 4) { difficulty = 2; difficultyLabel = "Facile"; }
    else if (min >= 2) { difficulty = 3; difficultyLabel = "Moyen"; }
    else if (min >= 1) { difficulty = 4; difficultyLabel = "Difficile"; }
    else { difficulty = 5; difficultyLabel = "Très difficile"; }

    return { date: dateStr, difficulty, difficultyLabel, cols, rows, generated: true };
  }

  return GRIDS[0];
}
