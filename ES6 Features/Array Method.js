// .map()
const user = [{ id: 1, name: 'Vikas'}, {id: 2, name: 'Sushant'}];
const userNames = user.map(user => `<li>${user.name}</li>`);

console.log(userNames);

// .filter()
const products = [
    {name: 'Laptop', price: 1000},
    {name: 'Mouse', price: 20},
    {name: 'Monitor', price: 200}
];

const expensiveItems = products.filter(p => p.price > 100);

console.log(expensiveItems);

// .reduce()
const cart = [10, 25, 15];

const total = cart.reduce((accumulator, currentVal) => {
    return accumulator + currentVal;
}, 0);

console.log(total);