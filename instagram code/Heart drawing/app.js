for (let i = 1; i <= 3; i++) {
  let line = "";
  for (let j = 1; j <= 15; j++) {
    if ((j >= 4 - i && j <= 4 + i) || (j >= 12 - i && j <= 12 + i)) {
      line += "*";
    } else {
      line += " ";
    }
  }
  console.log(line);
}

for (let i = 8; i >= 1; i--) {
  let line = "";
  for (let j = 1; j <= 8 - i; j++) {
    line += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    line += "*";
  }
  console.log(line);
}
