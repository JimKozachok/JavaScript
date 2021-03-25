// 3. Напишите функцию которая бы переворачивала предоставленную строку
// Возможно, вам придется превратить строку в массив, прежде чем вы можете обратить его. 
// Ваш результат должен быть строкой.
// "something"

// "test" => "tset"


var text = prompt("Введите текст");

function reverseText(text) {
    
    return text.split("").reverse().join("");
}

console.log(reverseText(text));
