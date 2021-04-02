// 2. Создать объект Calculator, который должен содержать методы для расчета суммы, разности, произведения и частного двух чисел.
// Протестировать данный объект, принимая от пользователя значения двух операндов и знак операции.
// В зависимости от принятого знака операции, вызвать соответствующий метод.

let calculator = {
    sum: function (a, b) {
        var result = a +b;
        console.log(result);
    },
    sub: function (a, b) {
        var result = a - b;
        console.log(result);
    },
    mul: function (a, b) {
        var result = a * b;
        console.log(result);
    },
    div: function (a, b) {
        var result = a / b;
        console.log(result);
    },
}

let a = +prompt("Input the first number:");
let sign = prompt("Input a sign: +, -, * or /.");
let b = +prompt("Input the second number:");
if (isNaN(a) || isNaN(b)) {
    console.log("One of the arguments is not a number!");
}

if (sign === '+') {
    calculator.sum(a,b);
} else if (sign === '-') {
    calculator.sub(a, b);
} else if (sign === '*') {
    calculator.mul(a, b);
} else if (sign === '/') {
    calculator.div(a,b);
} else {
    console.log('Enter right sign');
}