function trailingZeros(n) {
  let count = 0;
  for (let i = 5; n / i >= 1; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

// Prompt input from user
// const input = prompt("Enter a non-negative integer:");
const number = parseInt(input);

// Validate input and show result
if (!isNaN(number) && number >= 0) {
  const result = trailingZeros(number);
  // alert(`Number of trailing zeros in ${number}! is ${result}`);
} else {
  // alert("Please enter a valid non-negative integer.");
}
