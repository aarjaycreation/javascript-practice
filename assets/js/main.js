/*
     ██  █████  ██    ██  █████  ███████  ██████ ██████  ██ ██████  ████████ ███████ 
     ██ ██   ██ ██    ██ ██   ██ ██      ██      ██   ██ ██ ██   ██    ██    ██      
     ██ ███████ ██    ██ ███████ ███████ ██      ██████  ██ ██████     ██    ███████ 
██   ██ ██   ██  ██  ██  ██   ██      ██ ██      ██   ██ ██ ██         ██         ██ 
 █████  ██   ██   ████   ██   ██ ███████  ██████ ██   ██ ██ ██         ██    ███████
 */
// click function by id 
 function click_me() {
     document.getElementById("demo").innerHTML = "You can place any number of scripts in an HTML document.";
   }

// image change 
function first_img() {
     document.getElementById('img').src='/assets/image/pic_bulbon.gif';
}
function second_img() {
     document.getElementById('img').src='/assets/image/pic_bulboff.gif';
}

// change font size 
function fs_900() {
     document.getElementById('demo').style.fontSize='var(--fs-900)'
     document.getElementById('demo').style.fontWeight = "var(--fw-bold)";
}

function fs_400(){
     document.getElementById('demo').style.fontSize="var(--fs-400)";
}

// hide and show content 

function hide_img(){
     document.getElementById('img').style.display='none';
}
function show_img(){
     document.getElementById('img').style.display='block';
}


// vairables 

// var firstName = 'rahul'; //var variable 
// let lastName = 'jangir '; //let variable
// const fullName = 'jangir-rahul' //const variable


// let a = 5 ;
// let b = ++a;

// console.log(b);

// Checking Data Types

console.log(typeof 'rahul') // string
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined


// Declaring different variables of different data types
// let firstName = 'rahul' // first name of a person
// let lastName = 'jangir' // last name of a person
// let country = 'india' // country
// let city = 'pune' // capital city
// let age = 23 // age in years
// let isMarried = false

// console.log(firstName, lastName, country, city, age, isMarried);


// Variables can also be declaring in one line separated by comma, however I recommend to use a seperate line to make code more readble
// let name = 'rahul', job = 'devoloper', live = 'india'
// console.log(name, job, live)




// Primitive Data Types Primitive Data Types


// compare different data values
// let numOne = 3
// let numTwo = 3

// console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = true

console.log(lightOn == lightOff) // true



// Non-Primitive Data Types Non-Primitive Data Types

// aaray 
let nums_one = [1, 2, 3]
nums_one[0] = 10  // modify
nums_one[3] = 30 // add new 

console.log(nums_one)  // [10, 2, 3, 30]


// compare value but not equal Rule of thumb, we do not compare non-primitive data types

// let nums = [1, 2, 3]
// let numbers = [1, 2, 3]

// console.log(nums == numbers)  // false

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

console.log(userOne == userTwo) // false

// Random Number Generator 
// const randNum = Math.random() // creates random number between 0 to 0.999999
// console.log(randNum)

let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10




let space = ' '           // an empty space string
let firstName = 'rahul'
let lastName = 'jangir'
let country = 'india'
let city = 'pune'
let language = 'JavaScript'
let job = 'student'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`


// output
let fullName = firstName + space + lastName + space + quote + `this is string`; // concatenation, merging two string together.
console.log(fullName);

let personInfoTwo = `I am ${fullName}.  I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I learning ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)



let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)           // J


// let secondLetter = string[1]       // a
// let thirdLetter = string[2]        // v
// let lastLetter = string[9]
// let lastIndex = string.length - 1

// console.log(secondLetter)          // a
// console.log(lastLetter)            // t



// console.log(lastIndex)  // 9
// console.log(string[lastIndex])    // t
// console.log(string.toUpperCase())     // JAVASCRIPT
// console.log(firstName.toUpperCase())  // RAHUL
// console.log(string.toLowerCase())     // javascript
// console.log(firstName.toLowerCase())  // rahul
// console.log(country.toLowerCase())   // india

// javascript
console.log(string.substr(4,5))    // Scrip
// india 
console.log(country.substr(1, 3))   // ndi

console.log(string.trim())


// Arithmetic Operators
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo   // 7
let diff = numOne - numTwo  // 1
let mult = numOne * numTwo  // 12
let div = numOne / numTwo   //1.333333333
let remainder = numOne % numTwo   // 1
let powerOf = numOne ** numTwo    // 4*4*4  =  64 !

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64


// Comparison Operators
console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false



// Logical Operators
// && ampersand operator example

// const check = 4 > 3 && 10 > 5         // true && true -> true
// const check = 4 > 3 && 10 < 5         // true && false -> false
// const check = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example

// const check = 4 > 3 || 10 > 5         // true  || true -> true
// const check = 4 > 3 || 10 < 5         // true  || false -> true
// const check = 4 < 3 || 10 < 5         // false || false -> false

//! Negation examples

// let check = 4 > 3                     // true
let check = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true

// Increment Operator

// Pre-increment
let count = 0
console.log(++count)        // 1
console.log(count)          // 1

// Post-increment
let count_second = 0
console.log(count_second++)        // 0
console.log(count_second)          // 1

// let message = `hello`
// alert(message)

const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56


// Conditionals

// if 
let num_one = 3
if (num_one > 0) {
  console.log(`${num_one} is a positive number`)
}

// let isRaining = true
// if (isRaining) {
//   console.log('Remember to take your rain coat.')
// }

// if else 
// let num = -3
// if (num > 0) {
//   console.log(`${num} is a positive number`)
// } else {
//   console.log(`${num} is a negative number`)
// }

// if else if else 
let a = NaN
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}

// switch case 
// let num = prompt('Enter number');
// switch (true) {
//   case num > 0:
//     console.log('Number is positive');
//     break;
//   case num == 0:
//     console.log('Numbers is zero');
//     break;
//   case num < 0:
//     console.log('Number is negative');
//     break;
//   default:
//     console.log('Entered value was not a number');
// }

let isRaining = false
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')


//   const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
//   const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
//   const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
//   const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
//   const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
//   const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries
  
//   // Print the array and its length
  
//   console.log('Numbers:', numbers)
//   console.log('Number of numbers:', numbers.length)
  
//   console.log('Fruits:', fruits)
//   console.log('Number of fruits:', fruits.length)
  
//   console.log('Vegetables:', vegetables)
//   console.log('Number of vegetables:', vegetables.length)
  
//   console.log('Animal products:', animalProducts)
//   console.log('Number of animal products:', animalProducts.length)
  
//   console.log('Web technologies:', webTechs)
//   console.log('Number of web technologies:', webTechs.length)
  
//   console.log('Countries:', countries)
//   console.log('Number of countries:', countries.length)

// deffrent deffrent datatype array 
  const arr = [
     'Asabeneh',
     250,
     true,
     { country: 'Finland', city: 'Helsinki' },
     { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
 ] // arr containing different data types
 console.log(arr)

//  Accessing array items using index 
// const fruits = ['banana', 'orange', 'mango', 'lemon']
// let firstFruit = fruits[0] // we are accessing the first item using its index

// console.log(firstFruit) // banana

// secondFruit = fruits[1]
// console.log(secondFruit) // orange

// let lastFruit = fruits[3]
// console.log(lastFruit) // lemon
// // Last index can be calculated as follows

// let lastIndex = fruits.length - 1
// lastFruit = fruits[lastIndex]

// console.log(lastFruit)  // lemon

// Modifying array element
const numbers = [1, 2, 3, 4, 5]
numbers[0] = 10      // changing 1 at index 0 to 10
numbers[1] = 20      // changing  2 at index 1 to 20

console.log(numbers) // [10, 20, 3, 4, 5]

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

countries[0] = 'Afghanistan'  // Replacing Albania by Afghanistan
let lastIndex = countries.length - 1
countries[lastIndex] = 'Korea' // Replacing Kenya by Korea

console.log(countries)


// function without parameter,  a function which make a number square
function square() {
  let num = 7
  let sq = num * num
  console.log(sq)
}
square() //49


// Function returning value
function printFullName (){
  let firstName = 'rahul'
  let lastName = 'jangir'
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}
console.log(printFullName())

