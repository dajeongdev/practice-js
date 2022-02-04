const calculate = ((command, a, b) => {
    let result;
    switch (command) {
        case 'add':
            result = a + b;
            break;
        case 'substract':
            result = a - b;
            break;
        case 'divide':
            result = a / b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'remainder':
            result = a % b;
            break;
        default:
            throw Error('unknown command');
    }
    console.log (result);
});
