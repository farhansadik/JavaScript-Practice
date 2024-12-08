// problem 1 
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array

// Declare an array with 5 elements containing fruits
let fruits = [ 'apple', 'banana', 'guava', 'jackfruit', 'peach' ];
// console log the 3rd index element
console.log(fruits[2]); 

// change the value of the 2nd index element to jambura
const oldValue = fruits.indexOf('banana'); // finding the element
const newValue = 'jambura'; // declaring new element 
fruits[oldValue] = newValue; // replacing element 

// console log the final array
console.log(fruits); 