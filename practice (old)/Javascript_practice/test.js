let my_num = 5.5; // number
let my_arr = [1, 50, 3, 21, 95]; // array
let happy = true; // boolean

// object (similar to dictionary in python)
let my_dict = {
    name: 'Kimy',
    num: 55,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`); // this -> context in which a function is executed
    },
};
my_dict.greet();

// functions
function sum(x, y) {
    return x+y;
}
console.log(sum(1,2));

// Control flow
if (happy) {
    console.log("I'm Happy! :D");
}
else {
    console.log("Aw, don't be sad. Here take a cookie! :)");
    happy = true;
}

// for loop
for (let i=0; i<10; i++) {
    process.stdout.write(`${i} `); // `` backticks -> Similar to python's print(f"This is {something}")
}
console.log();

// while loop
let count = 3;
while(count > 0) {
    console.log(count--);
}
console.log("GO!")

// arrow functions -> shorter way to define functions
const sayHey = (name) => console.log(`Hey ${name}, I want to have fuck with you :D`);
sayHey('Kimy');

// Classes and objects
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hi() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old!`);
    }
}
let person = new Person('Kimy', 27);
person.hi();


// ASYNC PROGRAMMING
const makeCoffee = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Coffee is ready! ☕");
        }, 2000);
    }
)}

const makeToast = () => {
    return new Promise((ready, failed) => {
        setTimeout(() => {
            ready("Toast is ready! 🍞");
        }, 1000);
    }) 
}

makeCoffee().then((coffee) => {
    makeToast().then((toast) => {
        console.log("Breakfast is ready:", coffee, toast);
    })
});

async function makeBreakfast() {
    // Not running in parallel
    // let coffee = await makeCoffee();
    // let toast = await makeToast();

    // The following runs in parallel:
    const coffeeMaking = makeCoffee();
    const toastMaking = makeToast();

    const coffee = await coffeeMaking;
    const toast = await toastMaking;

    console.log("Breakfast is ready:", coffee, toast);
}

makeBreakfast();


// EVENT LOOP :: callstack, web APIs/background tasks, callback/task/macrotask queue, priority/microtask queue
// callstack
console.log(1)

// callback/macrotask queue
setTimeout(() => {console.log(2)}, 0)


// microtask queue
// Promise.resolve().then(() => {console.log(3)})

const promise = () => {
    return new Promise((resolve, reject) => {
        resolve(3)
    })
}

promise().then((res) => console.log(res))

// callstack
console.log(4)