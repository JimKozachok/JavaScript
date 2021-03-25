// 4. Напишите функцию которая возвращает длину самого длинного слова в предложении. 
// Ваш ответ должен быть числом.
// "The quick brown fox jumped over the lazy dog" => 6

let str = prompt ('Введите предложение ');

function findLongestWord(str) {
  return str.split(' ').reduce((a, b) => (b.length > a.length) ? b : a).length;
};


console.log(findLongestWord(str));

