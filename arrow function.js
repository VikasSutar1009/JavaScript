// simple arrow function
const add = (a,b) => {
    return a + b;
}
console.log(add(10,5))

// Arrow function with one parameter
const square = x => x * x;
console.log(square(10));

// Arrow function with no parameter
const sayHello = () => "Hello!";
console.log(sayHello())


// Real-life simple examle
const price = 100;

const calculateGST= amount => amount * 0.18;

console.log(calculateGST(price));

// Arrow function in real use (button click)
button.addEventListener("click", () => {
    console.log("Button clicked");
});