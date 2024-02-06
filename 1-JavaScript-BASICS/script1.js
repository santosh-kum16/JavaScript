
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

/*
 ***********  Basic Operators *********
 
// Math Operators
 var currentYear, yearSam, YearMark;
 currentYear = 2024;

 yearSam = currentYear - 20;
 YearMark = currentYear -22;

 console.log(yearSam);
 console.log(YearMark);
 console.log(currentYear + 2);
 console.log(currentYear - 2);
 console.log(currentYear * 2);
 console.log(currentYear / 2);
 console.log(currentYear % 2);

 //Logical Operators
var samOld = yearSam < YearMark;
console.log(samOld);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Operator Precedence
const now = 2024;
const myAge = now - 1992;
const ageVansh = now - 2018;

console.log(now - 1992 > now - 2018);

let x1, y;
x1 = y = 25 - 10 - 5; // x1 = y = 10, x1 = 10
console.log(x1, y);

const averageAge = (myAge + ageVansh) / 2;
console.log(ageJonas, ageVansh, averageAge);


/////////////////////////////////////////
// Taking Decisions: if / else Statements
const age = 15;

if (age >= 18) {
  console.log('Hardik can start driving license');
} else {
  const yearsLeft = 18 - age;
  console.log(`Hardik is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

////////////////////////////////////
// The switch Statement
/** 
const day = 'tuesday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('This is Monaday');
    break;
  case 'tuesday':
    console.log('Thia is Tuesday');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('This is Thursday');
    break;
  case 'friday':
    console.log('This is Friday');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('This is Monaday');
} else if (day === 'tuesday') {
  console.log('This is tuesday');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

*/
///////////--- FUNCTIONS ---//////////////
//[1] Take Nothing Return Nothing
/*
function nameDisplay() {
    console.log('My name is Santosh');
  }
  
  // calling/ invoking function
  nameDisplay();
  nameDisplay();

//[2] Take Something Return Something...
function  calculateAge(birthYear){
    return 2024 - birthYear;
}

var ageSantosh = calculateAge(1992);
console.log(ageSantosh);
*/

///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
/*
function calcAge1(birthYear) {
    return 2024 - birthYear;
  }
  const age1 = calcAge1(1991);
  console.log(age1);
  
  // Function expression
  const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
  }
  const age2 = calcAge2(1991);
  
  console.log(age1, age2);
  
  
  ///////////////////////////////////////
  // Arrow functions
  
  const calcAge3 = birthYear => 2037 - birthYear;
  const age3 = calcAge3(1991);
  console.log(age3);
  
  const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
  }
  
  console.log(yearsUntilRetirement(1991, 'Hrithik')); console.log(yearsUntilRetirement(1980, 'Shahrukh'));
  */

  /////************************************
// Functions Calling Other Functions
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(5, 9));


//******************************************************
// Reviewing Functions

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Ajay'));
console.log(yearsUntilRetirement(1950, 'Sanjay'));
*/
//******************************************************************
// Introduction to Arrays
/*
const friend1 = 'Nitish';
const friend2 = 'Ajay';
const friend3 = 'Sanjay';

const friends = ['Amrit', 'Rahul', 'Abhishek']; //Declaring friends ARRAY with values
console.log('Displaying friends: '+friends);//Displaying ARRAY

const year= new Array(1991, 1984, 2008, 2020);  //Declaration of Array
console.log(year);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Vijay';
console.log(friends);

const firstName = 'Kamlesh';
const vipu = [firstName, 'Arun', 2037 - 1991, 'teacher', friends];
console.log(vipu);
console.log(vipu.length);
*/
//********************** OPERATIONS ON ARRAY *******************/
/*
1. Add Elements -> push(), unshift()
2. Remove Elements-> pop(), shift()


// Add elements
const friends = ['Sumit','Durgesh']
const newLength = friends.push('Ajay');//Adding element to ARRAY at last-Index.

console.log(friends);// Display updated Array
console.log(newLength); //Getting updated length offrinds array i.e 3

friends.unshift('Jogi');//unshift method adding element at 0th-Index.
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log('Friends Displaying: '+friends);

//******** IndexOf method and Includes ********

console.log(friends.indexOf('Sumit'));
console.log(friends.indexOf('Vijay'));

friends.push(23);
console.log(friends.includes('Sanjeev'));
console.log(friends.includes('Deepak'));
console.log(friends.includes(23));
console.log(friends);

if (friends.includes('Santosh')) {
  console.log('You have a friend called Santosh');
}
*/
//*************************************************************************
// Introduction to Objects

const arr = [
  'Santosh',
  'Kumar',
  2024 - 1992,
  'Programmer',
  ['Sanjay', 'Ajay', 'Nitish']
];

const objects = {
  firstName: 'Santosh',
  lastName: 'Kumar',
  age: 2024 - 1992,
  job: 'Programmer',
  friends: ['Sanjay', 'Ajay', 'Nitish']
};
console.log('This is ARRAY: '+arr);
console.log('This is Object: '+objects);

//****************************************************************************************** */
// Dot vs. Bracket Notation

console.log(objects.lastName);
console.log(objects['lastName']);

const nameKey = 'Name';
console.log(objects['first' + nameKey]);
console.log(objects['last' + nameKey]);

objects.location = 'Portugal';
objects['twitter'] = '@jonasschmedtman';
console.log(objects);