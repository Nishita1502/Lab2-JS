// utils.js

// Function: Print welcome message
function printWelcomeMessage(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to Georgian College`);
  }
  
  // Function: Convert measurement unit
  function convertUnit(value, fromUnit, toUnit) {
    if (fromUnit === 'Celsius' && toUnit === 'Fahrenheit') {
      return (value * 9/5) + 32;
    } else if (fromUnit === 'Fahrenheit' && toUnit === 'Celsius') {
      return (value - 32) * 5/9;
    } else if (fromUnit === 'Minutes' && toUnit === 'Hours') {
      return value / 60;
    } else if (fromUnit === 'Hours' && toUnit === 'Minutes') {
      return value * 60;
    } else {
      console.log('Invalid conversion');
    }
  }
  
  // Function: Perform math operation
  function performMathOperation(...values) {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
      sum += values[i];
    }
    return sum;
  }
  
  // Function: Advanced function
  function advancedFunction() {
    // Adding advanced function logic here
    console.log('The advanced function appears here');
  }
  
  // Exporting the functions
  module.exports = {
    printWelcomeMessage,
    convertUnit,
    performMathOperation,
    advancedFunction
  };

  