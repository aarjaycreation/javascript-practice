// syntax
class ClassName {
    constructor() {}
  }

// example 
// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//   }
// // create object
//   let myCar1 = new Car("Ford", 2014);
//   let myCar2 = new Car("Audi", 2019);

//   console.log(myCar1.name)
//   console.log(myCar2.year)
//   console.log(myCar1)

//   Class Methods
// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//     //function 
//     age() {
//       let date = new Date();
//     //   date condition 
//       return date.getFullYear() - this.year;
//     }
//   }
  
//   let myCar = new Car("Ford", 2018);
//   console.log(  "My car is " + myCar.age() + " years old.")

// set perameters 
//   class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//     age(x) {
//       return x - this.year;
//     }
//   }
// //   define date 
//   let date = new Date();
//   let year = date.getFullYear();
  
//   let myCar = new Car("MAJOR", 2006);
//   console.log("My car (" + myCar.name +   ") is " + myCar.age(year) + " years old." )
  

//   Class Inheritance

// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       return 'I have a ' + this.carname;
//     }
//   }
  
//   class Model extends Car { // modal class inharite  data and functions 
//     constructor(brand, modal) {
//       super(brand);
//       this.model = modal;
//     }
//     show() {
//       return this.present() + ', modal = ' + this.model;
//     }
//   }
  
//   let myCar = new Model("mahindra", "Major");
// console.log(myCar.show())

// //self made class
// class Details {
//     constructor(fullName,className,subject,course){
//          this.fullName = fullName ;
//     this.className = className ;
//     this.subject = subject ;
//     this.course = course;
//     }
   

// }

// const obj = new Details('rahul','mca','english','information tc');

// console.log(obj)



// getter and setter 
// getter mean get the function (like ) in like same properties
// setter meaning set the values in aoutside class / objects
class Car {
    constructor(brand) {
      this.carname = brand;
    }
    get cnam() {
      return this.carname;
    }
    set cnam(x) {
      this.carname = x;
    }
  }
  
  let myCar = new Car("Ford");
  
  
  console.log( myCar.cnam)// get cnam(); in cnam

