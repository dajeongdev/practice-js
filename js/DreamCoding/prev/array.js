'use strict';
/* Array */

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];


// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]); 
// 보통 마지막 데이터에 접근할 때는 fruits.length - 1


// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
// value마다 전달한 함수를 출력한다. (콜백 함수)
// 인자: value(배열의 값), index(배열의 인덱스), array
fruits.forEach((fruit) => console.log(fruit));


// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('strawberry', 'peach');
console.log(fruits);

// pop: remove an item from the end
fruits.pop(fruits);
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('fig', 'lemon');
console.log(fruits);

// shift: remove an item to the beginning
fruits.shift();
console.log(fruits);

// note! shift, unshift are slower than pop, push
// pop, push는 기존의 데이터를 움직이지 않아도 되기 때문에 빠르지만,
// shift, unshift는 기존의 데이터를 먼저 뒤로 옮기고 앞에 넣거나 빼야하기 때문에 느리다.
// 그렇기 때문에 가급적으로 pop과 push를 사용하는 것이 좋다.

// remove an item by index position
// splice: remove an item by index position
fruits.push('strawberry', 'peach', 'fig');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, 'apple');
console.log(fruits);

// combine two arrays
const fruits2 = ['pear', 'coconut'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple')); // 1
console.log(fruits.indexOf('coconut')); // -1

// includes
console.log(fruits.includes('fig')); // true
console.log(fruits.includes('coconut')); // false

// lastIndexOf
console.clear();
console.log(fruits);
// 만약 똑같은 데이터가 하나 더 있다면? indexOf는 제일 첫번째로 만나는 값의 인덱스를 출력한다.
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));


console.clear();

/* 숙제 */
// Array library 읽어보고 한 번씩 만들어보기
// sort, every, some

// 1. length
// 배열의 개수를 출력
console.log(fruits.length);

// 2. toString()
// 배열 안의 요소들을 문자열로 변환해서 출력함
console.log(fruits.toString());

// 3. toLocaleString()
// 배열 안의 요소들을 toLocaleString 함수를 사용하여 문자열로 변환해서 출력함
console.log(fruits.toLocaleString());

// 4. pop()
// 배열의 마지막 요소를 지우고 배열로 리턴함
// 빈 배열이라면 undefined를 리턴
const popped = fruits.pop(); // 배열에서 지운 마지막 요소를 할당
console.log(fruits);

// 5. push()
// 배열의 마지막에 새로운 요소를 삽입하고 배열로 리턴함
// 새로운 요소로 배열을 받을 수 있음
fruits.push('grape');
console.log(fruits);

// 6. concat()
// 두 개 이상의 배열들을 합침
// 이미 있거나 수정된 배열이 아니라 새로운 배열을 리턴함
// ConcatArray 혹은 기본 배열을 파라미터로 받을 수 있음
const fruits3 = fruits.concat(fruits2);
console.log(fruits3);

// 7. join()
// 배열의 모든 요소를 연결하여 하나의 문자열로 만들어 리턴함
// 파라미터로 인자를 넣을 수 있는데 생략하면 콤마(,)로 구분함
let joinFruits = fruits.join();
console.log(joinFruits);
joinFruits = fruits.join(' ');
console.log(joinFruits);
joinFruits = fruits.join('-');
console.log(joinFruits);

// 8. reverse()
// 배열의 요소를 역순으로 뒤집어서 리턴함
let reverseFruits = fruits.reverse();
fruits.reverse();
console.log(reverseFruits);

// 9. shift()
// 배열의 첫 번째 요소를 삭제하여 리턴함
// 빈 배열이라면 undefined를 리턴
fruits.shift();
console.log(fruits);

// 10. slice(startIndex, endIndex)
// 배열을 복사하여 시작인덱스부터 마지막 인덱스 전까지 리턴함
// - 인덱스를 사용하면 배열 마지막부터 시작
const sliceFruits = fruits.slice(0, 3);
console.log(sliceFruits);

// 11. sort()
// 해당 배열에서 정렬함
/* 숫자 */
// a - b -> a가 앞으로 (오름차순)
// b - a -> b가 앞으로 (내림차순)
// 생략하면 오름차순으로 정렬
const sortArr = [4, 1, 6, 2, 8];
const sortArrByAsc = sortArr.sort((a, b) => a - b);
console.log(sortArrByAsc);
const sortArrByDesc = sortArr.sort((a, b) => b - a);
console.log(sortArrByDesc);
/* 문자열 */
// localeCompare 사용 -> a 오름차순, b 내림차순
const sortFruitsByAsc = fruits.sort((a, b) => a.localeCompare(b));
console.log(sortFruitsByAsc);
const sortFruitsByDesc = fruits.sort((a, b) => b.localeCompare(a));
console.log(sortFruitsByDesc);

// 12. splice(startIndex, deleteCount)
//     splice(startIndex, deleteCount, items[])
// 시작 인덱스부터 개수를 지정하여 삭제함
// 시작 인덱스부터 개수를 지정하여 삭제하고 그 자리에 새로운 요소를 추가함
// 기존 배열에서 수행함
let spliceFruits = fruits.splice(0, 3);
console.log(spliceFruits);
spliceFruits = fruits.slice().splice(0, 1, 'peach');
console.log(spliceFruits);
console.log(fruits);

// 13. unshift()
// 배열의 첫 번째 위치에 새로운 요소를 삽입하여 리턴함
fruits.unshift('lemon');
console.log(fruits);

// 14. indexOf(searchElement, fromIndex)
// fromIndex -> 찾기 시작하는 위치를 나타내는 인덱스 값
// 찾을 수 없다면 -1 리턴 
console.log(fruits.indexOf('fig'));
console.log(fruits.indexOf('fig', 2));

console.clear();
// 15. lastIndexOf(searchElement, fromIndex)
// indexOf()는 첫 번째로 만나는 요소의 인덱스 값을 리턴하므로
// 마지막으로 만나는 요소의 인덱스값을 알고 싶을 때 사용
fruits.push('fig');
console.log(fruits);
console.log(fruits.indexOf('fig')); // 2
console.log(fruits.lastIndexOf('fig')); // 4

// 16. every(value, index, array)
// 배열의 요소가 모든 조건을 만족하는지 테스트하여 boolean 값을 리턴함
// 빈 배열에서 호출하면 무조건 true
function isBigEnough(element, index, array) {
    return element >= 5;
}
console.log([4, 1, 7, 9, 6].every(isBigEnough)); // false
console.log([14, 11, 17, 9, 6].every(isBigEnough)); // true
// 화살표 함수 사용
console.log([53, 34, 6, 14, 7].every(elem => elem >= 5)); // true

// 17. some(value, index, array)
// 배열의 요소가 주어진 판별 함수를 하나라도 통과하는지 테스트하여 boolean 값 리턴
// 빈 배열에서 호출하면 무조건 false
// 값이 배열 내 존재하는지 확인할 때도 사용 가능
console.log([4, 1, 6, 8, 2].some(elem => elem > 5)); // true

console.clear();
// 18. forEach(callbackFn(value, index, array))
// 주어진 함수(callbackFn)를 배열 요소마다 실행함
const eachArr = [4, 2, 7, 8];
eachArr.forEach((each) => console.log(each));

// 19. map()
// 배열 내의 모든 요소에 대하여 주어진 함수를 호출한 결과를 새로운 배열로 리턴함
const mapArr = [1, 4, 9, 16];
const map = mapArr.map(x => x * 2);
console.log(map);

// 20. filter(callbackFn(value, index, array))
// 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 리턴함
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

// 21. reduce(callbackFn(previousValue, currentValue, currentIndex, array))
// 배열의 각 요소에 대해 주어진 reducer 함수를 실행하고, 하나의 결과값 리턴
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer)); // 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5)); // 15