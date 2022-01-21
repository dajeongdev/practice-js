'use strcit';

// 1. Object to JSON (serialize)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'peanut',
    color: 'grey',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

// 전달하고 싶은 데이터만 자세히 선택 가능
json = JSON.stringify(rabbit, ['name', 'color', 'size']); 
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'bada' : value;
});

// 2. JSON to Object (deserialize)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// 함수는 serialize 할 때 포함되지 않았기 때문에 error 발생
// obj.jump(); 

console.log(rabbit.birthDate.getDate());
// birthDate 는 string이기 때문에 date 타입으로 인식하지 않기 때문에 error 발생
console.log(obj.birthDate.getDate()); 