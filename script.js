function trailingZeros(n) {
  let count = 0;

  // Keep dividing n by powers of 5
  for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
    count += Math.floor(n / i);
  }

  return count;
}

const input = prompt("Enter a non-negative integer:");
const number = parseInt(input);

if (!isNaN(number) && number >= 0) {
  const result = trailingZeros(number);
  alert(`Number of trailing zeros in ${number}! is: ${result}`);
} else {
  alert("Please enter a valid non-negative integer.");
}
