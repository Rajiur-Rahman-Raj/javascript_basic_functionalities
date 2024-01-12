// Loops are a fundamental programming concept that allows you to repeat a block of code multiple times.JavaScript supports three types of loops: the for loop, the while loop, and the do -while loop.

// The for Loop:
// The for loop is the most commonly used loop in JavaScript.It allows you to loop through a block of code a fixed number of times.Here's an example:


// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


// In this example, we're using a for loop to log the values of i from 0 to 9. The loop is composed of three parts:

// Initialization: let i = 0 initializes the loop counter variable to 0.
// Condition: i < 10 specifies the condition that must be true for the loop to continue executing. In this case, the loop will continue as long as i is less than 10.
// Increment: i++ increments the loop counter variable by 1 after each iteration.

// A for loop is a control flow statement that allows you to execute a block of code repeatedly based on a set number of iterations.It's commonly used when you want to perform an operation a certain number of times, such as iterating over an array or looping through a range of numbers.

// Here's the basic syntax of a for loop in JavaScript:


for (initialization; condition; increment / decrement) {
  // code to be executed
}
// Let's break down each part of this syntax:

// Initialization: This is where you set the initial value of the loop counter variable.You can declare the variable using the let keyword or use an existing variable.

// Condition: This is the condition that is checked before each iteration of the loop.If the condition evaluates to true, the loop continues.If it evaluates to false, the loop stops.

// Increment / decrement: This is where you specify how the loop counter variable should be modified after each iteration of the loop.You can use either the++ operator to increment the variable by one or the-- operator to decrement it by one.

// Let's look at a simple example that uses a for loop to iterate over an array of numbers:


// const numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// In this example, we first declare an array called numbers that contains five elements.We then use a for loop to iterate over the array and log each element to the console.The loop counter variable i is initialized to 0, the loop continues as long as i is less than the length of the array(numbers.length), and i is incremented by one after each iteration.

//That's the basics of a for loop in JavaScript! 


// The while Loop:
// The while loop is used when you don't know the number of times you want to loop. It continues to execute the loop as long as the condition specified is true. Here's an example:


// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;
// }


// In this example, we're using a while loop to log the values of i from 0 to 9. The loop continues to execute as long as i is less than 10.

// 1. Logging numbers from 1 to 10:

// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }



// 2. Repeating a task until a condition is met:


let isDone = false;
while (!isDone) {
    // do something
    if (conditionIsMet) {
        isDone = true;
    }
}


// 3. Generating a random number between 1 and 10:

// let randomNumber;
// while (!randomNumber || randomNumber < 1 || randomNumber > 10) {
//     randomNumber = Math.floor(Math.random() * 10) + 1;
// }
// console.log(randomNumber);

// 4.Checking if a string contains a certain character:

// let inputString = "hello world";
// let i = 0;
// let containsLetter = false;

// while (i < inputString.length) {
//     if (inputString[i] === "o") {
//         containsLetter = true;
//         break;
//     }
//     i++;
// }

// console.log(containsLetter); // true


// 5. Summing up numbers in an array:

// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// let i = 0;

// while (i < numbers.length) {
//     sum += numbers[i];
//     i++;
// }

// console.log(sum); // 15




// The do -while Loop:
// The do -while loop is similar to the while loop, but it guarantees that the loop body will execute at least once.Here's an example:


// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 10);


// In this example, we're using a do-while loop to log the values of i from 0 to 9. The loop body is executed once before the condition is checked.

// Loops can also be nested, which means that you can have a loop inside another loop.This is useful when you need to perform a repetitive task that involves multiple levels of iteration.


// Here are some tips and tricks for using loops in JavaScript:

// Choose the right type of loop: JavaScript offers three types of loops: for, while, and do -while.Choose the one that best suits your use case.

// Keep track of the loop counter: In a for loop, the counter variable is often used to keep track of the current iteration.Make sure you initialize it properly and update it correctly to avoid infinite loops or other errors.

// Use break and continue statements: break allows you to exit a loop early, while continue allows you to skip over certain iterations.These statements can be very useful for controlling the flow of your loop.

// Avoid modifying the loop counter inside the loop: Modifying the loop counter inside the loop can lead to unexpected results, such as skipping over iterations or infinite loops.It's usually better to use a separate variable to track any changes you need to make.

// Use Array.forEach() for iterating over arrays: If you're just iterating over an array, you can use the forEach() method instead of a for loop. This can make your code cleaner and more readable.

// Use Object.keys() for iterating over objects: If you need to iterate over an object's keys, you can use the Object.keys() method to get an array of the keys, and then use a for loop or forEach() to iterate over them.

// Use a debugger to step through your loop: If you're having trouble with your loop, you can use a debugger to step through the code line by line and see what's happening at each step.This can help you identify any bugs or issues with your loop.


// Use try-catch blocks for error handling: If your loop contains code that can throw an error, it's a good idea to wrap it in a try-catch block. This can help you handle any errors gracefully and prevent your loop from crashing.

// Use a labeled statement for nested loops: If you have nested loops and need to break out of both loops at once, you can use a labeled statement to specify which loop to break out of.For example:


outerLoop: for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
      if (i * j >= 25) {
          break outerLoop;
      }
  }
}
// In this example, the break outerLoop; statement will break out of both loops at once.

// Use the Array.map() method to transform arrays: If you need to transform an array into a new array, you can use the map() method instead of a for loop.This can make your code more concise and easier to read.For example:

var numbers = [1, 2, 3, 4, 5];
var doubledNumbers = numbers.map(function (number) {
  return number * 2;
});

// In this example, the map() method creates a new array with each element multiplied by 2.
//
// Use the Array.filter() method to filter arrays: If you need to filter an array based on a certain condition, you can use the filter() method instead of a for loop.This can make your code more concise and easier to read.For example:

var numbers = [1, 2, 3, 4, 5];
var evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});
// In this example, the filter() method creates a new array with only the even numbers from the original array.