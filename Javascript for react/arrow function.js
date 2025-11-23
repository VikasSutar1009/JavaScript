// 2. Arrow Functions
// Write an arrow function to:
// find square of a number
const square = (num) => num * num;
console.log(square(5));      // 25

// return full name
const getFullName = (first, last) => `${first} ${last}`;
console.log(getFullName("Vikas", "Sutar"));   // Vikas Sutar

// convert Celsius to Fahrenheit
// Formula:
// F = (C × 9/5) + 32
const celsiusToFahrenheit = (c) => (c * 9/5)+ 32;
console.log(celsiusToFahrenheit(25));        // 77

// address:
const address = (city, taluka) => `${city} ${taluka}`;

console.log(address("kolhapur", "ajara"));

// // detail
// const FullName = (first, middle, last) => `${first} ${middle} ${last}`;
// const addresses = (taluka) => `${taluka}`;
// const PhoneNumber = (Number)=> `${Number}`;
// console.log(FullName("Vikas", "Mahesh", "Sutar"));
// console.log(addresses("Ajara"));
// console.log(PhoneNumber(9158257510));

const FullName = (first, middle, last) => `${first} ${middle} ${last}`;
const addresses = (taluka) => `${taluka}`;
const PhoneNumber = (Number) => `${Number}`;

console.log(FullName("Vikas", "Mahesh", "Sutar"));
console.log(addresses("Ajara"));
console.log(PhoneNumber("9158257510"));

