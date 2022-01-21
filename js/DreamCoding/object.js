/* Objects */
// 1. Literals and properties
// not object
const name = 'dajeong';
const age = 4;
print(name, age);

function print (person) {
    console.log(person.name);
    console.log(person.age);
}
// object 
const dajeong = { name: "dajeong", age: 4};
print(dajeong);

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

// with Javascript magic (dynamically typed language)
// can add properties later
dajeong.hasJob = true;
console.log(dajeong.hasJob);

// can delete properties later
delete dajeong.hasJob;
console.log(dajeong.hasJob);

// 2. Computed properties
console.log(dajeong.name);
console.log(dajeong['name']);

dajeong['hasJob'] = true;
console.log(dajeong.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(dajeong, 'name');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 20 };
const person2 = { name: 'steve', age: 30 };
const person3 = { name: 'ellie', age: 40 };
const person4 = makePerson('dajeong', 50);
console.log(person4);
function makePerson(name, age) {
    return {
        name,
        age,
    };
}
