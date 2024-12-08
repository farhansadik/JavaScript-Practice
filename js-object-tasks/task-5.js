// task 5 

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

// Loop through an object and print the key-value pairs with their types
for (let i in myObject) {
    console.log('key:', i , '| type:', typeof(myObject[i]));
}