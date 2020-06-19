// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

console.log('~~TaskBTask1');

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// BEA: The nested function is able to access the variable internally because its in the lexical scope of its parent. 
//  we can pass variables down but we cannot pass them back up 
// closures give us the ability to put functions together 
// code that has been identified elsewhere that we can use later

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

console.log('~~TaskBTask2');

function summation(counter) {
  if (counter == 1)
    return 1;
  else
    return counter + summation(counter - 1);
}


console.log(summation(4));