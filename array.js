// declaring an array
let names = [ 'farhan', 'sadik', 'umayer', 'sowrov', 'mahin'];

// printing all elements
let i;
let al = names.length - 1;

// printing array
for (i = 0; i <= names.length - 1; i++) {
	console.log(i+1, " - ", names[i]);
}

// pop
// displays the last element
console.log(names.pop());

// shift 
// displays the first element 
console.log(names.shift());

// at 
// displays any elements from the last 
console.log(names.at(-2));

// push 
// adding a new element from last into the array 
let new_element = names.push("zihad");
console.log(names.pop()); // displaying the last element 

// unshift 
// adding a new element from first into the array 
let new_element_from_first = names.unshift("sayeed");
console.log(names.shift()); // displaying the first element 

console.log("New Array");
// printing array using for in 
for (let j in names) {
	console.log(j, " - ", names[j]);
}