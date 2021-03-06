  // Q1. make a string out of an array
  {
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(', ');
    console.log(result);
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(",");
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice().sort((a, b) => b - a);
    console.log(result);
    const result2 = array.slice().reverse();
    console.log(result2);
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result);
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
  console.log(students[0]);
  console.log(students[0].score);


  // Q5. find a student with the score 90
  {
    let result = {};
    for (let i = 0; i < students.length; i++) {
        if (students[i].score === 90) {
            result = Object.assign(students[i]);
        }
    }
    console.log('Q5. ' + result);
  }
  
  // Q6. make an array of enrolled students
  {
    const result = students[0].score;
    console.log('Q6. ' + result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
      const result = students['score'];
      console.log('Q7. ' + result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    console.log('Q8. ');
  }
  
  // Q9. compute students' average score
  {
    console.log('Q9. ');
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    console.log('Q10. ');
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    console.log('Bonus. ');
  }