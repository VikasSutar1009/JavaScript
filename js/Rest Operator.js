// With destructuring
const user = {
    name:'Vikas',
    age: 22,
    city: 'Kolhapur'
};

const { name, ...rest } = user;

console.log(rest);