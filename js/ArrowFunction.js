// Simple function
function add(a, b) {
    return a + b
}
console.log(add(10,5))

// Arrow function
const add = (a,b) => a+b;
console.log(add(20,5))

// One parameter
const square = x => x * x;
console.log(square(8))

// Multiple lines
const greet = (name) =>{
    return `Hello ${name}`;
};
console.log(greet("vikas"))
