let fromBase = 10, toBase = 2;

function setFromBase(base, el) {
  fromBase = base;
  const buttons = document.getElementById("from-buttons").children;
  for (const btn of buttons) {
    btn.classList.remove("selected");
  }
  el.classList.add("selected");
}

function setToBase(base, el) {
  toBase = base;
  const buttons = document.getElementById("to-buttons").children;
  for (const btn of buttons) {
    btn.classList.remove("selected");
  }
  el.classList.add("selected");
}

function isValidInput(value, base) {
  const patterns = {
    2: /^[01]+$/,
    8: /^[0-7]+$/,
    10: /^[0-9]+$/,
    16: /^[0-9a-fA-F]+$/
  };
  return patterns[base].test(value);
}

function convert() {
  const input = document.getElementById("num").value.trim();
  if (!isValidInput(input, fromBase)) {
    alert("Invalid input for base " + fromBase);
    return;
  }

  const num = parseInt(input, fromBase);
  const result = num.toString(toBase).toUpperCase();
  const subs = { 2: "₂", 8: "₈", 10: "₁₀", 16: "₁₆" };

  document.getElementById("resultnum").value =
    `${input}${subs[fromBase]} = ${result}${subs[toBase]}`;
    
  document.getElementById("num").value = "";
}
