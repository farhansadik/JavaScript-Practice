// task 2

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

// For this object below add a property named passenger capacity with value 5
Object.defineProperty(car, "passenger capacity", {value: 5});

console.log(car);