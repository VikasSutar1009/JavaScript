// Write an arrow function to add two numbers.
const add= (a,b) => a+b;
console.log(add(2,4));

// Write an arrow function to check if a number is even.
const isEven = (num) => num % 2 === 0;
console.log(isEven(8));

// Write an arrow function to return the length of a string.
const Count = (name) => name.length;
console.log(Count("Vikas"));

// Write an arrow function to return the first character of a string.
const Name = (first) => first[0];
console.log(Name("python"));

// Write an arrow function that returns "Hello World".
const string = () => "Hello World";
console.log(string("Hello,World!"));

// Write an arrow function to find the maximum of two numbers.
const getNumber = (a,b) => (a > b ? a : b);
console.log(getNumber(2,5));

// Write an arrow function to reverse a string.
const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("Python"));

// Write an arrow function to calculate the cube of a number.
const cube = (n) => n ** 3;
console.log(cube(4));

// Write an arrow function to check if a word contains the letter 'a'.
const hasA = (str) => str.includes("a");
console.log(hasA("sumit"))

// Write an arrow function that takes a number and returns:
// "Positive" if > 0
// "Negative" if < 0
// "Zero" if equal to 0
const checkNumber = (n) => 
  n > 0 ? "Positive" : n < 0 ? "Negative" : "Zero";
console.log(checkNumber(0));

// Return all even numbers from an array
const getEvens = (arr) => arr.filter(n => n % 2 === 0);
console.log(getEvens([21, 32, 44, 13]));

// Count how many times a letter appears
const countLetter = (str, letter) => str.split("").filter(ch => ch === letter).length;
console.log(countLetter("Apple","p"));