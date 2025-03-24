// Funktion zur Umwandlung von Zahlen in römische Zahlen
function toRoman(num) {
  const romanMap = {
    1: "I", 4: "IV", 5: "V", 9: "IX",
    10: "X", 40: "XL", 50: "L", 90: "XC",
    100: "C", 400: "CD", 500: "D", 900: "CM",
    1000: "M"
  };

  let result = "";
  const values = Object.keys(romanMap).map(Number).sort((a, b) => b - a);

  for (const value of values) {
    while (num >= value) {
      result += romanMap[value];
      num -= value;
    }
  }

  return result;
}

// Funktion zur Umwandlung von römischen Zahlen in normale Zahlen
function fromRoman(roman) {
  const romanMap = {
    "I": 1, "IV": 4, "V": 5, "IX": 9,
    "X": 10, "XL": 40, "L": 50, "XC": 90,
    "C": 100, "CD": 400, "D": 500, "CM": 900,
    "M": 1000
  };

  let i = 0, num = 0;
  while (i < roman.length) {
    if (i + 1 < roman.length && romanMap[roman.substring(i, i + 2)]) {
      num += romanMap[roman.substring(i, i + 2)];
      i += 2;
    } else {
      num += romanMap[roman[i]];
      i++;
    }
  }
  return num;
}

// Einlesen der Benutzereingabe über Deno
if (import.meta.main) {
  const input = prompt("Geben Sie eine Zahl oder eine römische Zahl ein: ");
  if (!isNaN(parseInt(input, 10))) {
    const number = parseInt(input, 10);
    if (number >= 1 && number <= 3999) {
      console.log(`Römische Zahl: ${toRoman(number)}`);
    } else {
      console.log("Fehler: Die Zahl muss zwischen 1 und 3999 liegen.");
    }
  } else {
    console.log(`Normale Zahl: ${fromRoman(input)}`);
  }
}
export { toRoman, fromRoman };
