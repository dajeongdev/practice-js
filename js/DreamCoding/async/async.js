'use strict';

// 1. async
async function fetchUser() {
    return 'dajeong';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return 'apple';
}

async function getBanana() {
    await delay(1000);
    return 'banana';
}

async function pickFruits() {
    const applePromise = getApple(); 
    const bananaPromise = getBanana(); 
    const apple = await applePromise;
    const banana = await bananaPromise;     
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);

// callback hell example applying
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

async function checkUser() {
    try {
        const userId = await userStorage.loginUser(id, password);
        const user = await userStorage.getRoles(userId);
        alert(`Hello ${user.name}, you have a ${user.role}`);
    } catch (error) {
        console.log(error);
    }
}
checkUser();