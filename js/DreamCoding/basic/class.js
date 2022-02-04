'use strict';

// 1. Class declarations
class Person {
    // constructor
    constructor (name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak () {
        console.log(`${this.name}: hello!`)
    }
}

const dajeong = new Person('dajeong', 10);
console.log(dajeong.name);
console.log(dajeong.age);
dajeong.speak();

// 2. Getter and setters
class User {
    constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }
    
    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Jobs', -1);
console.log(user1.age); // getter와 setter를 이용하기 때문에 age라고 해도 호출됨

// 3. Fields (public, private)
class Experiment {
    publicField = 2;
    #privateField = 0; // 읽을 수도 변경할 수도 없음
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
class Article {
    static publisher = 'Dream Coding';
    constructor (articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
// console.log(article1.publisher); -> undefined
console.log(Article.printPublisher);
Article.printPublisher();

// 5. Inheritance
class Shape {
    constructor (width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('🔺');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triange = new Triangle(20, 20, 'red');
triange.draw();
console.log(triange.getArea());

// 7. Class checking: instanceof
console.log(rectangle instanceof Rectangle);
console.log(triange instanceof Rectangle);
console.log(triange instanceof Triangle);
console.log(triange instanceof Shape);
console.log(triange instanceof Object);