// Closures
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


// Higher-Order Functions
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




  // Task management system
const taskManagementSystem = [];


function addTask(taskName) {
  const taskId = taskManagementSystem.length + 1;
  const task = {
    id: taskId,
    name: taskName,
    completed: false
  };
  taskManagementSystem.push(task);
}


const completeTask = function(taskId) {
  const task = taskManagementSystem.find(task => task.id === taskId);
  if (task) {
    task.completed = true;
  }
}


const getTasks = () => taskManagementSystem;


addTask("Buy groceries");
addTask("Clean the house");
addTask("Finish the report");


completeTask(1);


console.log("Tasks:");
const tasks = getTasks();
tasks.forEach(task => {
  const status = task.completed ? "(Completed)" : "";
  console.log(`● Task ${task.id}: ${task.name} ${status}`);
});
