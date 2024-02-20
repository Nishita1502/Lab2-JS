// main.js

// Importing the utilities file
const utils = require('./utils');

// Calling the functions from the utilities file
utils.printWelcomeMessage('Maahi', 'Khan');
const result = utils.convertUnit(25, 'Celsius', 'Fahrenheit');
console.log(result);
const sum = utils.performMathOperation(5, 10, 15, 20);
console.log(sum);
utils.advancedFunction();