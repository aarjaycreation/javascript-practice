// let x , y , z ; //statement
// x = 5;          //statement
// y = 10;         //statement
// z = 15;         //statement
// console.log(x,y,z)

// // Let Hoisting
// carName = "Volvo";
// var carName;

// let details = {

//     name : 'rahul',
//     class : 'MCA',
//     score : 50

// }
// console.log(details.name)

// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName :function myFunction(p1, p2) {
//         return p1 * p2;   // The function returns the product of p1 and p2
//       }
//   };

//   console.log(person.fullName)

// concatination
let space = " ";
console.log("first" + space + "second");

// string + method
const s = "hello world";
console.log(s); // hello world
console.log(s.length); // 11
console.log(s.toLowerCase()); // hello world
console.log(s.toUpperCase()); //HELLO WORLD
console.log(s.substring(0, 5).toUpperCase()); //HELLO

const str = "rahul, vishal, akshay, sachine, stayam";
console.log(str);
console.log(str.length); // 38
console.log(str.split("")); // ['r', 'a', 'h', 'u', 'l', ',', ' ', 'v', 'i', 's', 'h', 'a', 'l', ',', ' ', 'a', 'k', 's', 'h', 'a', 'y', ',', ' ', 's', 'a', 'c', 'h', 'i', 'n', 'e', ',', ' ', 's', 't', 'a', 'y', 'a', 'm']
console.log(str.split(", ")); // (5) ['rahul', 'vishal', 'akshay', 'sachine', 'stayam']
console.log(str.substring(0, 5)); // l

// array
const color = ["red", "blue", "orenge", "purpale"];
// inser new values in array
color[4] = "apple"; // add element in array index of 4
color.push("banana"); // add in last indexof array
color.unshift("new_fruits"); //add in zero index
// removing
color.pop();

console.log(color); //(5) ['red', 'blue', 'orenge', 'purpale', 'apple']
console.log(color.indexOf("blue")); // 1
console.log(color[0].toUpperCase());

// object
let details = {
  name: "rahul",
  class: "MCA",
  score: 50,
  subject: ["hindi", "english", "math"],
  subObject: {
    name: "rahul",
    class: "MCA",
    score: 50,
  },
};

console.log(details);
console.log(details.name);
console.log(details.subject);
console.log(details.subject[2]); //math
console.log(details.subObject);
console.log(details.subObject.class); //MCA
console.log(details);

const {
  name,
  subject,
  subObject,
  subObject: { score },
} = details;
console.log(name);
console.log(subject[1]);
console.log(subObject.class);
console.log(score);

// adding element on object
details.company = "ort";
console.log(details.company);

// multi objects
const main = [
  {
    id: 1,
    name: "rahul",
    task_Done: true,
  },
  {
    id: 2,
    name: "akshay",
    task_Done: false,
  },
  {
    id: 3,
    name: "sandya",
    task_Done: true,
  },
  {
    id: 4,
    name: "onkar",
    task_Done: false,
  },
];
// best way to print array also strong
for (let t of main) {
  console.log(t);
  console.log(t.id);
  console.log(t.name);
}

// console.log(main)
// console.log(main[1].name) //akshay

// // json
// const mainJson = JSON.stringify(main)
// console.log(mainJson)

// print sting
// const pringObjectString = mainJson.toString(1);
// console.log(pringObjectString);
// console.log(pringObjectString.length);
// console.log(pringObjectString);

// string to array
// const stingToArray = pringObjectString.split(" ");
// console.log(stingToArray)

// console.log(typeof(stingToArray))

// // loops
// for(let i = 0; i <= 10; i++ ){
//     // console.log(i)
//     console.log(`number of for loop ${i}`)
// }

// // while loop
// let i = 0;
// while(i <= 10){
//     console.log(`number of while loop ${i}`)
//     i++;

// }

const mainArr = [
  {
    id: 1,
    name: "rahul",
    task_Done: true,
  },
  {
    id: 2,
    name: "akshay",
    task_Done: false,
  },
  {
    id: 3,
    name: "sandya",
    task_Done: true,
  },
  {
    id: 4,
    name: "onkar",
    task_Done: false,
  },
];

// foreach

mainArr.forEach(function (returnValues) {
  console.log(returnValues.id);
});
console.log(" foreach name ");
mainArr.forEach(function (returnValues) {
  console.log(returnValues.name);
});
console.log(" foreach task Done");
mainArr.forEach(function (returnValues) {
  console.log(returnValues.task_Done);
});
console.log(" foreach all");
mainArr.forEach(function (returnValues) {
  console.log(returnValues.id, returnValues.name, returnValues.task_Done);
});

//  , Map,

const mainArr1 = mainArr.map(function (r) {
  return r.name;
});
console.log("map");
console.log(mainArr1);

// Filter
const mainArr2 = mainArr.filter(function (r1) {
  return r1.task_Done == true;
});
console.log("filter");
console.log(mainArr2);


 // map // filter
const mainAll = mainArr
  .filter(function (r1) {
    return r1.task_Done == true;
  })
  .map(function (r) {
    return r.name;
  });
  console.log("map and filter");
console.log(mainAll);



console.log("=====if else====");
// if else 
const x = 10;
if (x === 10){
    console.log('x is 10')
}
else{
    console.log('x is not 10')
}

// ternarry oprator 
const color1 = x === 10//condition
? 'green' // if
: 'red';  // else

switch(color1){

    case 'red' :
        console.log('color is red')
        break;
    case 'green' :
        console.log('color is green')
        break;
    default :
    console.log('color is NOT red or blue')
}
// console.log(color1)

console.log('function')
// function simple way
function addNum (num1, num2 ){
    console.log(num1 + num2)
}
addNum(2,4);

// little bit hard 
function addNUm1(num1=1, num2=2) {
    return num1 + num2;
}

console.log(addNUm1()); // 1 + 2 = 3
console.log(addNUm1(5,5)); //10

// best way 
const addNum3 = (num1=2, num2=2) =>  num1 + num2 
console.log(addNum3()); // 4

const addition = num => num;
console.log(addition(4*2)) //8



// object oriated programming 
// constructor function 
function Details (firstName, lastName, age, dob){
this.firstName = firstName;
this.lastName = lastName;
this.age = age ;
this.dob = dob = new Date();
// defne a function
this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
}

// instantiate onject
const  person1 = new Details('rahul','jangir',23,'22-01-1998');
const person2 = new Details('harsh','jain',21,'19-3-2001');
console.log(person1.firstName)
console.log(person2.dob)
console.log(person2.getFullName())
