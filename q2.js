//The comma operator in JavaScript allows you to combine multiple expressions into a single statement. It evaluates each expression from left to right and returns the value of the last expression. 
var a = 5, b = 10, c = 15;

// The comma operator is used to combine multiple expressions in a single statement
var result = (a++, b++, c++);

// The value of 'result' will be the value of the last expression, which is 'c++'
console.log(result); // Output: 15

// The values of 'a', 'b', and 'c' have been incremented due to the comma operator
console.log(a); // Output: 6
console.log(b); // Output: 11
console.log(c); // Output: 16