// Getting elements by tag name
// const allTitles = document.getElementsByTagName('h1')

// console.log(allTitles) //HTMLCollections
// console.log(allTitles.length) // 5

// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i]) // prints each elements in the HTMLCollection
// }

// h1
// dom.js:7 h1#first-title.title
// dom.js:7 h1#second-title.title
// dom.js:7 h1#third-title.title
// dom.js:7 h1

// Getting elements by class name
// const allTitles = document.getElementsByClassName('title')

// console.log(allTitles) //HTMLCollections
// console.log(allTitles.length) // 4

// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i]) // prints each elements in the HTMLCollection
// }

// Getting an element by id
// let firstTitle = document.getElementById('first-title')
// console.log(firstTitle) // <h1>First Title</h1>

// let firstTitle = document.querySelector('h1') // select the first available h1 element
// let firstTitle = document.querySelector('#first-title') // select id with first-title
// let firstTitle = document.querySelector('.title') // select the first available element with class title
// console.log(firstTitle)

// const allTitles = document.querySelectorAll('h1')

// console.log(allTitles.length) // 5
// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i])
// }
// same work like a for loop to print all
// allTitles.forEach(title => console.log(title))

// Adding attribute
// const titles = document.querySelectorAll('h1')
// titles[0].className = 'title'
// titles[0].id = 'fourth-title'

// Adding attribute using //setAttribute
// const titles = document.querySelectorAll('h1')
// titles[4].setAttribute('class', 'title')
// titles[4].setAttribute('id', 'fourth-title')

// Adding attribute without //setAttribute
// titles[4].className = 'title'
// titles[4].id = 'fourth-title'

// Adding class using classList
//another way to setting an attribute: append the class, doesn't over ride
// titles[4].classList.add('title', 'header-title')
// Removing class using remove
//another way to setting an attribute: append the class, doesn't over ride
// titles[4].classList.remove('title', 'header-title')

// Adding Text to HTML elementAdding Text to HTML element
// Adding Text to HTML elementAdding Text to HTML element
// titles[4].textContent = 'Fourth Title adding using .textContent'

// Inner HTML Inner HTMLInner HTMLInner HTML Inner HTML Inner HTML
// const lists = `
// <li>list 1</li>
// <li>list 2</li>
// <li>list 3</li>
// <li>list 4</li>
// <li>list 5</li>
// <li>list 6</li>
// <li>list 7</li>`
// console.log(lists) //for print list
// const ul = document.querySelector('ul')
// ul.innerHTML = lists;

// remove content of ul
// const ul = document.querySelector('ul')
// ul.innerHTML = ''

// Creating an Element
// let title = document.createElement("h1");
// title.className = "title";
// title.style.fontSize = "24px";
// title.textContent = "Creating HTML element DOM Day 2";

// console.log(title);

// create multiple elements
let title;
for (let i = 0; i < 3; i++) {
  title = document.createElement("h1");
  title.className = "title";
  title.style.fontSize = "24px";
  title.textContent = i;
  console.log(title);
}
