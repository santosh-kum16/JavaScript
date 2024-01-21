
/*/Variable is like a Container where we can Store values which uses in our code again and again.

// Declaration of Variables:-

// 1. STRING DATA TYPE -

var fistName = 'Santosh';
var lastName = 'Kumar';

console.log(fistName);

// Concat both values:-

console.log(fistName+' '+lastName);

//2. NUMBER DATA TYPE -

var year = 2024;
console.log(year);

var kg = 115.234;
console.log(kg);

//3. BOOLEAN DATA TYPES - There are two values either 'true' or 'false'

var thisIsMyAge = true;
console.log(thisIsMyAge);

//4. UNDEFINED DATA TYPE-

// Just Declaration of variables
var role;
console.log(role); 

/* So, above line Out put is 'Undefined'

Now defining role var to some value


role = 'Developer';

console.log(role);

// 5. NULL DATA TYPES- It means non-existent.

// NOTE- camelCase is used to define variable name and must not use of Numbers and Special symbols excepts- Dollar symbol and Underscore.

//************************* 

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

/******************************* 
// let, const and var

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);

/*///////////////////  Variable Mutation   ////////////////////////////////////
/*
var year=2020;

//Variable mutation
year = 'Twenty Twenty';

//Taking input from Window and output show to console
var firstName='Santosh';
var lastName=prompt('What is his last Name?');
console.log(firstName+ ' '+lastName);
*/