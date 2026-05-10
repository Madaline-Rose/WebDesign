const facts = [

  "Black cats are less likely to be adopted in shelters.",

  "In Japan, black cats are considered lucky.",

  "Some black cats appear brown in sunlight.",

  "Black cats are just as affectionate as any other cat.",

  "Ancient Egyptians highly respected cats and associated them with protection."

];

function showFact() {

  const randomIndex = Math.floor(Math.random() * facts.length);

  const output = document.getElementById("factOutput");

  output.textContent = facts[randomIndex];

  output.classList.add("show");

}