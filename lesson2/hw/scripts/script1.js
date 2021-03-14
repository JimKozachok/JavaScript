 // 1. Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные, вывести сообщение "Ошибка". Числа принять от пользователя.


var a = +prompt("Enter your first number: ")
console.log("First number : " + a);

var b = +prompt("Enter your second numder: ")
console.log("Second numder : " +b);

var c = +prompt("Enter your third number: ")
console.log("Third number : " + c);

if (a == b) {
    console.log("Error");
    document.write("Error");
} else if (a == c) {
    console.log("Error");
    document.write("Error");
} else if (b == c) {
    console.log("Error");
    document.write("Error");
} else {
document.write("answer: " + (a + b + c) / 3);
console.log( (a + b + c) / 3);
};