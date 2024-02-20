// We will learn how to use the JavaScript try...catch statements to handle exceptions. Lets see below.
// console.log('Execution Start');
// let sum = add(5,3);
// console.log(sum);
// console.log('Execution End');

/*
The above example attempts to call the add() function that doesn’t exist:
So, JavaScript engine issues the following error:
"Uncaught TypeError: add is not a function"

The error message states that the add is not a function and the error type is TypeError.

When the JavaScript engine encounters an error, it issues that error and immediately terminates the execution 
of the entire script.
In the above example, the code execution stops at the first line.

If we want to handle the error and continue the execution. Use the try...catch statement 
with the following syntax:

try {
  // possibility to error in the code
} catch(error){
  // code to handle error
}

Above syntax:-

1> Place the code that may cause an error in the try block.
2> Implement the logic to handle the error in the catch block.

NOTE- If an error occurs in the try block, the JavaScript engine immediately executes the code in the catch block. 
Also, the JavaScript engine provides you with an error object that contains detailed information about the error.

Basically, the error object has at least two properties:-
1> Name specifies the error name.
2> Message explains the error in detail.
If no error occurs in the try block, the JavaScript engine ignores the catch block

*/

//Example:-
  console.log('Execution Start');
try {
    let sum = add(5,3);
    console.log(sum);
  } catch (e) {
    console.log({ name: e.name, message: e.message });
  }
  console.log('Execution End');