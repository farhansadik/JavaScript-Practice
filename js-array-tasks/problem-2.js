// problem 2 
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output


// Declare an array of 3 tourist destinations
let destinations = [ 'bandarban', 'coxbazar', 'sundarban' ];

// Add a new tourist destination to your tourist array
let newDestination = destinations.push('sajek');

// Add two more to your array
let twoMoreDestination = destinations.push('durgapur', 'mohasthangor');

// Remove the last tourist destination you have added
let deleteLastDest = destinations.pop();

// display the final array as output
console.log(destinations);