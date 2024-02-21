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
let result = 0;
try {
  result = add(4,2);
} catch (e) {
  console.log(e.message);
} finally {
  console.log({ result });
}

