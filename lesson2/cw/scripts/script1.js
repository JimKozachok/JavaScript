// 1. Напишите цепочку операторов if / else if, чтобы выполнить следующие условия (num вводит пользователь), результат вывести в консоль:
// num < 5 - "Tiny"
// num < 10 - "Small"
// num < 15 - "Medium"
// num < 20 - "Large"
// num >= 20 - "Huge"


var num = +prompt("num: ")
console.log("num : " + num);

if (num < 5) {
    document.write('Tiny');
    
} else if (num < 10) {
    document.write('Small');

} else if (num < 15) {
    document.write('Medium');

}else if (num < 20) {
    document.write('Large');

}else if (num >= 20) {
    document.write('Huge');

};


