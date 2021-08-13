exports.name = "jonas";

isPalindrome = (num) => {
  return num.toString() === num.toString().split("").reverse().join("");
}

exports.getLargestPalindrome = (N) => {

  let largestPalindrome = 0;

  for (let i = 10 ** (N - 1); i < 10 ** N; i++) { 
    for (let j = 10 ** (N - 1); j < 10 ** N; j++) {
      if (isPalindrome(i * j) && (i * j > largestPalindrome)) {
          largestPalindrome = i * j;
      }
    }
  }

  return largestPalindrome;
}

// input
const N = 3;

// CHALLENGE: Can you optimize the algorithm above so that works for input values N=4, N=5, N=6 in a "reasonable" amount of time?

// N=2, correct output = 9009
// N=3, correct output = 906609
// N=4, correct output = 99000099
// N=5, correct output = 9966006699
// N=6, correct output = 999000000999
// N=7, correct output = 99956644665999

// execution
console.time(exports.name)
console.log("result:", exports.getLargestPalindrome(N))
console.timeEnd(exports.name)
