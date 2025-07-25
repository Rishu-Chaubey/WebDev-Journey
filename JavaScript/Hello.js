// Simple console logs to show messages
console.log("Hello World");
console.log("Learning JS");

// Declare variables and initialize
let a = 10;
let b = 20;
let temp;

console.log("Before Swapping");
console.log(`a = ${a} and b = ${b}`);

// Swap values of a and b using temp variable
temp = a;
a = b;
b = temp;

console.log("After swapping");
console.log(`a = ${a} and b = ${b}`);

// Loop from 1 to 5 and print each number
for (let i = 1; i <= 5; i++) {
  console.log(`Number: ${i}`);
}

// Node.js user input section using readline module

// Import the readline module for handling input/output with user
const readline = require('readline');

// Create interface for reading input and writing output
const rl = readline.createInterface({
  input: process.stdin,    // Standard input (keyboard)
  output: process.stdout   // Standard output (console)
});

// Ask a question to the user and get input asynchronously
rl.question('What is your name? ', function(name) {
  console.log(`Hello, ${name}!`);
  rl.close();  // Close readline interface after input
});
