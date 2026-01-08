// Problem 1: Reverse a String

function reverseString(str) {
  return str.split("").reverse().join("");
}

// console.log("Reverse String:", reverseString("hello"));

// Problem 2: Count Vowels in a String

function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}
// console.log("Count Vowels:", countVowels("programming"));

// Problem 3: Check for Palindrome

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
// console.log("Is Palindrome (madam):", isPalindrome("madam"));
// console.log("Is Palindrome (hello):", isPalindrome("hello"));

// Problem 4: Find the Maximum Number

function findMax(arr) {
    return Math.max(...arr);
}
// console.log("Max Number:", findMax([5, 1, 9, 3]));

// Problem 5: Remove Duplicates from an Array

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
// console.log("Unique Array:", removeDuplicates([1, 2, 2, 3, 4, 4]));

// Problem 6: Sum of All Numbers in an Array

function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
// console.log("Sum of Array:", sumArray([1, 2, 3, 4]));

// Problem 7: Find Even Numbers in an Array

function findEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
// console.log("Even Numbers:", findEvenNumbers([1, 2, 3, 4, 5, 6]));

// Problem 8: Capitalize First Letter of Each Word

function capitalizeWords(str) {
    return str.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}
// console.log("Capitalize:", capitalizeWords("hello world"));

// Problem 9: Find the Factorial of a Number

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
// console.log("Factorial of 5:", factorial(5));

// Problem 10: PingPong Challenge

function pingPongChallenge() {
    // console.log("PingPong Output:");
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("PingPong");
        } else if (i % 3 === 0) {
            console.log("Ping");
        } else if (i % 5 === 0) {
            console.log("Pong");
        } else {
            console.log(i);
        }
    }
}
pingPongChallenge();