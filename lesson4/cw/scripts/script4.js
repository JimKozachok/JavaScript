// 4. Напишите функцию которая возвращает длину самого длинного слова в предложении. 
// Ваш ответ должен быть числом.
// "The quick brown fox jumped over the lazy dog" => 6


// Второе решение.

let str = prompt ('Введите предложение ');

function findLongestWord(str) {
  return str.split(' ').reduce((a, b) => (b.length > a.length) ? b : a).length;
};


console.log(findLongestWord(str));


// Второе решение.

let str = prompt ('Введите предложение ');

function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = 0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	longestWord = strSplit[i].length;
     }
  }
  return longestWord;
}
console.log(findLongestWord(str));


