// Javascript template literals
const website = 'freeCodeCamp'
const message = `Welcome to ${website}`

console.log(message);

// String Interpolation with Expressions
// 1
 const x = 10;
 const y = 20;
 console.log(`The sum of ${x} and ${y} is ${x + y}`);

// 2
const name = "Alice";
const greeting = `Hello, ${name}!`
console.log(greeting);

//  Multi-line string
// 1
const s =`This is a multi-line
string that spans across
serveral lines.`;
console.log(s);

// 2
const poem = `Roses are red,
Violets are blue,
Javascript is awesome,
And so are you !`;
console.log(poem);

// 3
const multiLineString = `
    This is the first line.
    This is the second line.
    This is the third line.
    `;
console.log(multiLineString);

// Tagged 
function tag(strings, ...values) {
    return strings.reduce((acc, str, i) => acc + str + (values[i] || ''), '');
}
const output = tag`Hello, ${"Vikas"}!`
console.log(output);


// 4. HTML Template
const title = "Welcome";
const html = `<h1>${title}</h1>`;
console.log(html);


// 5. Conditionals in Templates
const isAdmin = true;
const userRole = `User role: ${isAdmin ? "Admin" : "Guest"}.`;
console.log(userRole);

// Loops with templets
const items = ['apple', 'banana', 'cherry'];
const list = `Items: ${items.map(item => `\n-${item}`)}`;
console.log(list);

