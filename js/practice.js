// 1. Create a copy of the given array using spread operator.

let fruits = ["Apple", "Banana", "Mango"];
let newFruits = [...fruits];

console.log(newFruits);

// 2. Merge these two arrays into one.
let arr1 = [1,2];
let arr2 = [3,4];
let result = [...arr1, ...arr2];

console.log(result);

// 3. Add number 0 at the start of array.
let numbers = [1,2,3];
let newNumbers = [0,...numbers];

console.log(newNumbers);

// 4. Create a copy of object using spread operator.

let student = {
    name: "Rohit",
    age: 22
};

let copyStudent = {...student}

console.log(copyStudent);

// 5. Merge two objects.
let personal = {name: "Anita"};
let professional = {job:"Developer"};

let merge = {...personal, ...professional};
console.log(merge);

// 6. Change age to 30 using spread operator

let person = {
    name:"Rahul",
    age:25
};

let updatePerson = {...person, age:30};

console.log(updatePerson);

// Combine Multiple Arrays
let a = [1];
let b = [2];
let c = [3];

let combine = [...a, ...b, ...c];

console.log(combine);