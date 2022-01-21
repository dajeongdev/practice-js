// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

console.log("ellie's book"); // \n \t

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substrct
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(counter);
const postIncrement = ++counter;
console.log(counter);
const preDecrement = --counter;
console.log(counter);
const postDecrement = counter--;
console.log(counter);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // more than
console.log(10 >= 6); // more than or equal

// 6. Logical operators : or(||), and(&&), not(!)
const value1 = false;
const value2 = 4 < 2; // false

// ||(or), finds the first truthy value
// 연산을 많이 하는 함수를 호출하거나 expression을 제일 앞에 두면 안된다!

// &&(and), finds the first falsy value
// and 또한 연산이 많은 함수는 가장 뒤에 호출한다.
// 그리고 and는 간편하게 null check도 많이 사용한다.
// nullableObject && nullableObject.something 
// ===
// if (nullableObject != null) {
//  nullableObject.something;
// }

// !(not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
// 웬만하면 strict를 사용하자.
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const cat1 = { name: "peanut" };
const cat2 = { name: "peanut" };
const cat3 = cat1;
console.log(cat1 == cat2); // false
console.log(cat1 === cat2); // false
console.log(cat1 === cat3); // true

// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if
// if, else if, else
const name = 'df';
if (name === 'dajeong') {
    console.log('Welcome, Dajeong!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
// 묶어서 쓰지 말고 간단한 경우에만 사용! (묶을 때 if나 switch)
console.log(name === 'dajeong' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks (else if가 많은 경우)
// use for enum-like value check (enum을 검사하는 경우)
// use for multiple type checks in TS (정해져 있는 타입을 검사하는 경우)
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy, body code is executed
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let  i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`)
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    } 
    console.log(`continue: ${i}`);
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i <= 10; i++) {
    if (i > 8) {
        break;
    }
    console.log(`break: ${i}`);
}

// label