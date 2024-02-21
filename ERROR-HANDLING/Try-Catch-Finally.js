/* 
We will learn how to use the JavaScript try...catch...finally 
statement to catch exceptions and execute a block whether the exceptions occur or not.

Sometimes, you want to execute a block whether exceptions occur or not. In this case, you can 
use the try...catch...finally statement with the following syntax:

try {
  // code may cause exceptions
} catch (error) {
  // code to handle exceptions
} finally {
  // code to execute whether exceptions occur or not
}

*/

// Example to se how  to use the try...catch...finally statement:
//Example: 1
console.log('Example 1:');
let result = 0;
try {
  result = add(4,2);
} catch (e) {
  console.log('ERROR MSG: '+e.message);
} finally {
  console.log({ result });
}

//Without Exception Finally Block will Execute
//Example: 2
console.log('\nExample 2:');
const add1 = (x, y) => x + y;

let sum = 0;

try {
    sum = add1(5, 6);
} catch (e) {
  console.log(e.message);
} finally {
  console.log({ sum });
}

//NOTE- Above both example "finally" Block always executed.

/*
Try...Catch...Finally...Return

The finally block always executes whether exceptions occur or not. Also, you can do nothing to prevent it from 
executing including using a return statement. 
For example:
*/
console.log('\nExample 3:')
function display() {
    try 
    {
      return 'Try Block Execute';
    } 
    catch 
    {
      return 'Catch Block Execute';
    } 
    finally 
    {
      return 'Finally Block Execute';
    }
  }
  
  console.log(display());
//NOTE- Over all we have seen above examples "Finally-Block" Always be Executed.