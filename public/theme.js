// Fichier séparé et bloquant : applique le thème avant le premier rendu
// sans script inline, pour respecter la CSP.
try {
  var saved = localStorage.getItem('portfolio-theme')
  if (saved === 'light' || saved === 'dark') {
    document.documentElement.dataset.theme = saved
    document.querySelector('meta[name="theme-color"]').content = saved === 'light' ? '#ffffff' : '#0b0a0a'
  }
} catch (e) {}
