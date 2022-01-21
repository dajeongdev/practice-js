// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionally.
// Nearly all objects in JavaScript are instance of Object
// object = { key : value }

// primitive type은 변수 하나당 하나의 값만 가질 수 있다.
const name = 'dajeong';
const age = 4;
print(name, age);
function print(name, age) {
    console.log(name);
    console.log(age);
}

// 하지만 좀 더 다양한 파라미터를 넣고 싶을 때마다 함수의 파라미터를 바꾸는 것은 힘들기 때문에 이때 Object를 사용한다.
const dajeong = {name: 'dajeong', age: 4};
objectPrint(dajeong);
function objectPrint(person) {
    console.log(person.name);
    console.log(person.age);
}

// 1. Literals and properties
// object를 만드는 방법
const obj1 = {}; // curly bracket -> 'object literal' syntax
const obj2 = new Object(); // using class template -> 'object constructor' syntax

// with JavaScript magic (dynamically typed language)
// can add properties later
dajeong.hasJob = true;
console.log(dajeong.hasJob);

// 다른 언어에서 흔한 일은 아니다.
// 이렇게 너무 동적으로 코딩하면 빠르지만 나중에 유지보수하기 힘들고, 생각지도 못한 에러가 발생할 수 있으므로 지양하는 게 좋다.

// can delete properties later
delete dajeong.hasJob;
console.log(dajeong.hasJob);


// 2. Computed properties
// object에 접근할 때 .(온점)을 이용하는 것도 있지만 다른 방법도 있다.
// key should be always string
console.log(dajeong.name);
console.log(dajeong['name']);
dajeong['hasJob'] = true;
console.log(dajeong.hasJob);
// (1) .(dot) -> key에 해당하는 값을 받아오고 싶을 때
// (2) computed properties [''] 
//      -> 정확하게 어떤 key가 필요한지 모를 때 즉, runtime에서 결정될 때, 실시간으로 원하는 값을 받아오고 싶을 때
function printValue(obj, key) {
    console.log(obj, obj[key]);
}
printValue(dajeong, 'name');


// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = Person('dajeong', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in dajeong);
console.log('age' in dajeong);
console.log('random' in dajeong);
console.log(dajeong.random);

// 6. for..in vs for..of
// 나중에 프로젝트를 할 때 굉장히 유용

// for (key in obj)
for (key in dajeong) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (value of array) {
    console.log(value);
}


// 7. Fun cloning (복사)
// Object.assign(dest, [obj1, obj2, obj3, ...])
const user1 = { name: 'dajeong', age: '20'};
const user2 = user1;
user2.name = 'coder';
console.log(user1.name);

// old way
const user3 = {};
for (key in user1) {
    user3[key] = user1[key];
}
console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user1);
console.log(user4);
const user5 = Object.assign({}, user1);
console.log(user5);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
console.log(mixed.size); // big
// 뒤에 있는 객체일 수록 앞에 동일한 key값에 덮어씌워짐