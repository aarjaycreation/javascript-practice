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
let firstName = 'rahul' // first name of a person
let lastName = 'jangir' // last name of a person
let country = 'india' // country
let city = 'pune' // capital city
let age = 23 // age in years
let isMarried = false

console.log(firstName, lastName, country, city, age, isMarried);


// Variables can also be declaring in one line separated by comma, however I recommend to use a seperate line to make code more readble
let name = 'rahul', job = 'devoloper', live = 'india'
console.log(name, job, live)




// Primitive Data Types Primitive Data Types


// compare different data values
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

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

let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false

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