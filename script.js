
let fromBase = 10, toBase = 2; 

//the choesen base  hilighted and the other no
function setFromBase(base, el) {
  fromBase = base; 
  const buttons = document.getElementById("from-buttons").children;
  for (const btn of buttons) btn.classList.remove("selected"); // Unselect all
  el.classList.add("selected"); // Highlight selected
}

function setToBase(base, el) {
  toBase = base; // Set target base
  const buttons = document.getElementById("to-buttons").children;
  for (const btn of buttons) btn.classList.remove("selected"); // Unselect all
  el.classList.add("selected"); // Highlight selected
}

//checks if the input is valid for the selected base
function isValidInput(value, base) {
  const patterns = {
    2: /^[01]+$/,  // Binary
    8: /^[0-7]+$/, // Octal
    10: /^[0-9]+$/, // Decimal
    16: /^[0-9a-fA-F]+$/ // Hex
  };
  return patterns[base].test(value); // Check match
}

//if the inpout is valid for the selected base he converts it 
function convert() {
  const input = document.getElementById("num").value.trim(); // Get input
  if (!isValidInput(input, fromBase)) {
    alert("Invalid input for base " + fromBase); // Error if invalid
    return;
  }

  const num = parseInt(input, fromBase); // Convert to decimal
  const result = num.toString(toBase).toUpperCase(); // Convert to selected base

  const subs = { 2: "₂", 8: "₈", 10: "₁₀", 16: "₁₆" }; // Subscripts

  document.getElementById("resultnum").value =
    `${input}${subs[fromBase]} = ${result}${subs[toBase]}`; // Show result

  document.getElementById("num").value = ""; // Clear input
}
