'use strict';

// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    console.log(fruits.join());
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(",");
    console.log(result);

    // split: 구분자를 받아서 string을 나눠서 배열에 담는다. (return 받을 배열의 사이즈 지정 가능)
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const array2 = array.slice(2);
    console.log(array2);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    console.log(students.find(student => student.score === 90));

}

// Q6. make an array of enrolled students
{
    const result = students.filter(student => student.enrolled === true);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    console.log(result);

    // 콜백함수로 전달되는 인자는 최대한 이해하기 쉽게 쓰는 것이 중요하다!
}

// Q8. check if there is a student with the score lower than 50
{
    console.clear();
    const result = students.some(student => student.score < 50); // 하나라도
    console.log(result);
    
    const result2 = !students.some(student => student.score >= 50); // 모두
    console.log(result2);
}

// Q9. compute students' average score
{
    const scores = students.map((student) => student.score);
    const avarage = scores.reduce((prev, cur) => prev + cur) / scores.length;
    console.log(avarage);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const scores = students.map((student) => student.score)
                            .filter((score) => score >= 50)
                            .join();
    console.log(scores);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const scores = students.map((student) => student.score)
                            .sort((a, b) => a - b)
                            .join();
    console.log(scores);
}
