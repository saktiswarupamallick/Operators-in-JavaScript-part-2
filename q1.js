//The ternary operator in JavaScript is a concise way to write simple conditional statements.
//syntax---condition ? expression_if_true : expression_if_false;
// Program to check if a number is even or odd using the ternary operator


var userInput = prompt("Enter a number:");


var number = parseInt(userInput);


var result = (number % 2 === 0) ? "Even" : "Odd";


console.log("The number is " + result + ".");
