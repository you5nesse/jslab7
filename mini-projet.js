function lister(livres) {
  return [...livres].sort((a, b) => a.titre.localeCompare(b.titre));
}
function ajouter(livres, livre) {
  const id = livre.id ?? genererId(livres);
  return [...livres, { ...livre, id }];
}
function maj(livres, id, patch) {
  return livres.map(livre =>livre.id === id ? { ...livre, ...patch } : livre);
  function supprimer(livres, id) {
  return livres.filter(l => l.id !== id);
}
}
function rechercher(livres, q) {
  const s = q.trim().toLowerCase();
  if (!s) return [];
  return livres.filter(l => l.titre.toLowerCase().includes(s) || l.auteur.toLowerCase().includes(s));
}
