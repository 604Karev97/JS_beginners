function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function mathOprtation(a, b, operation = '') {
    switch (operation) {
        case '+':
        case 'sum':
            return sum(a, b);
        case '-':
        case 'sub':
            return sub(a, b);
        case '*':
        case 'mult':
            return mult(a, b);
        case '/':
        case 'div':
            return div(a, b);
        default: return 'Парам пам пам';
    }
}

let a = 9;
let b = 4;

console.log(`Сложение: ${mathOprtation(a,b, '+')}`);
console.log(`Вычитание: ${mathOprtation(a,b, 'sub')}`);
console.log(`Умножение: ${mathOprtation(a,b, '*')}`);
console.log(`Деление: ${mathOprtation(a,b, 'div')}`);