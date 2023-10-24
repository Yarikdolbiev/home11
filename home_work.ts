function isPalindrome(num: number): boolean {
  const strNum = num.toString();
  const reversedStrNum = strNum.split('').reverse().join('');
  return strNum === reversedStrNum;
}

function reverseAndAdd(num: number): number {
  const reversedNum = parseInt(num.toString().split('').reverse().join(''), 10);
  return num + reversedNum;
}

function findLychrelNumberPalindrome(initialNumber: number): { result: number | null, steps: number } {
  let num = initialNumber;
  let steps = 0;

  while (steps < 500) { 
    num = reverseAndAdd(num);
    steps++;

    if (isPalindrome(num)) {
      return { result: num, steps };
    }
  }

  return { result: null, steps };
}

const initialNumber = 196;
const { result, steps } = findLychrelNumberPalindrome(initialNumber);

if (result !== null) {
  console.log(`Palindrome found after ${steps} steps: ${result}`);
} else {
  console.log(`No palindrome found after ${steps} steps.`);
}






function generatePermutations(arr: number[]): number[][] {
  if (arr.length === 0) {
    return [[]]; 
  }

  const permutations: number[][] = [];

  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const restPermutations = generatePermutations(rest);

    for (const perm of restPermutations) {
      permutations.push([arr[i], ...perm]);
    }
  }

  return permutations;
}

const inputArray = [1, 2, 3];
const result1 = generatePermutations(inputArray);

console.log(result1);