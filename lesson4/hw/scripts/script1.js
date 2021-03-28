// 1.	Создать функцию calculate(a, b, sign), где a и b — два числа, sign — знак арифметической операции.
// Функция должна расчитывать результат операции, исходя из переданного ей знака. 
// Функция должна проверять корректность введенных чисел и знака операции.
// Все аргументы для функции принять от пользователя.

let a = +prompt("Введите a");

let sign = prompt("Введите знак арифметической операции(sign) ");

let b = +prompt("Введите b");


function calculate(a, sign, b) {
    if ((isNaN(a)) || (isNaN(b))) {
        return ("Введите 'a' или 'b'")
    } else if (sign == "+") {
        return (a + b)
    } else if (sign == "-") {
        return (a - b);
    } else if (sign == "*") {
        return (a * b)
    } else if (sign == "/") {
        return (a / b);
    } else if (sign != "+" || sign != "-" || sign != "*" || sign != "/") {
        return ("Введите знак арифметической операции(+, -, *, /)  ");
    }
}
console.log(calculate(a, sign, b));