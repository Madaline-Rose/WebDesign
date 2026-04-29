const facts = [
  "Black cats are less likely to be adopted in shelters.",
  "In Japan, black cats bring good luck.",
  "Some black cats appear brown in sunlight.",
  "They are just as affectionate as any other cat."
];

function showFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  document.getElementById("factOutput").textContent = facts[randomIndex];
}