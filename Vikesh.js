
function counter() {
    let count = 0;
  
    return function() {
      count++; 
      return count;
    };
  }
  
  
  const counter1 = counter();
  const counter2 = counter();
  
  
  console.log(counter1()); 
  console.log(counter1()); 
  console.log(counter1()); 
  
  console.log(counter2()); 
  console.log(counter2()); 
  console.log(counter2()); 
  console.log(counter2()); 
  console.log(counter2()); 
  
  
  console.log('<..................................>')
  function calculate(num1, num2, callback) {
    return callback(num1, num2);
  }
  
  function add(num1, num2) {
    return num1 + num2;
  }
  
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  
  console.log(calculate(5, 3, add)); 
  console.log(calculate(10, 4, subtract)); 
  console.log(calculate(7, 2, multiply)); 