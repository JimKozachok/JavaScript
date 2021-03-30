// 3.	Допишите функцию, которая определит, парное ли число (решение должно быть в одну строку).
// Функция должна вернуть "Even" или "Odd";

// function isEven(num) {
//     // your code here
// }

let number =+ prompt('Введите число');

function isEven(number) {
    return (number%2===0) ? "Even" : "Odd";
}
console.log(isEven(number));
