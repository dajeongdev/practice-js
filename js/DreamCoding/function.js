'use strict';

// 1. Function declaration
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

// 2. Paramters
function changeName(obj) {
    obj.name = 'coder';
}
const dajeong = { name: 'dajeong' };
changeName(dajeong);
console.log(dajeong);

// 3. Default Parameters
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest Parameters
function printAll(...args) {
	for (let i = 0; i < args.length; i++) {
		console.log(args[i]);
	}

	for (const arg of args) {
		console.log(`for of: ${arg}`);
	}

    args.forEach((arg) => console.log(`forEach: ${arg}`));
}
printAll('dream', 'coding', 'ellie', 'perfect!');

// 5. Local Scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    
    function printAnother() {
        console.log(meesage);
        let childMessage = 'hello';
    }
    // console.log(childMessage); // error!
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic
    }
}

// good
function updateUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic
}


// First-class function
// 1. Function expression
const print = function () { // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain(); // 'print'
const sumAgain = sum;
console.log(sumAgain(1, 3)); // 4

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log('yes!');
}
// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function
const simplePrint1 = function () {
    console.log('simplePrint1!');
}

const simplePrint2 = () => console.log('simplePrint2!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
}

// IIFE
(function hello() {
    console.log('IIFE');
})();

// Fun quiz time
// add, subtract, divide, multiply, remainder
const calculate = (command, a, b) => {
    let result;
    switch (command) {
        case 'add':
            result = a + b;
            break;
        case 'subtract':
            result = a - b;
            break;
        case 'divide':
            result = a / b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'remainder':
            result = a % b;
            break;
        default:
            throw Error('unknown command');
    }
    return result;
}
console.log(`result: ${calculate('add', 3, 4)}`);