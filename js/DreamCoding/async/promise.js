'use strict';

// Promise is a Javascript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new promise is created, the executor runs automatically!
const promise = new Promise((resolve, reject) => {
    // doing something heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        resolve('dajeong');
        //reject(new Error('no network'));
    }, 2000);
});
// 사용자가 버튼을 누를 때 실행되어야 하면 맞지 않음 (바로 실행됨!)

// 2. Consumers: then, catch, finally
promise
.then((value) => {
    console.log(value);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log('finally');
});

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));

// 4. Error handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('hen'), 1000);
    });

const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => egg`), 1000);
    });

const cook = egg => 
    new Promise((resolve, reject) => {
        resolve((`${egg} => sunny side up!`), 1000);
    });

getHen()
    .then(getEgg)
    .catch(error => {
        return 'bread';
    }) // 에러 시 처리
    .then(cook)
    .then(console.log)
    .catch(console.log);

// callback hell example
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'dajeong' && password === 'dream') ||
                    (id === 'coder' && password === 'coding')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not fount'));
                }
            }, 2000);
        });
    }

    getRoles(user, onSuccess, onError) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'dajeong') {
                    resolve({ name: 'dajeong', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}
const userStorage = new UserStorage();
const id = prompt('enter your ID');
const password = prompt('enter your password');
userStorage.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);
