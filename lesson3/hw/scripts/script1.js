// 1. Сделать собственные примеры методов применяемых для массивов.

// Метод Join()

const fruits = ['apple' , 'pen' , 'pineaple'];

console.log(fruits.join()); // "apple','pen','pineaple"

console.log(fruits.join(' ')); // "apple,pen,pineaple"

console.log(fruits.join('-'));// "apple-pen-pineaple"

// Метод concat()

var fruits = ["яблоко", "груша", "слива", "апельсин"];

var animals = ["собака", "крот", "бывшая"];

var fruits = fruits.concat(animals);

console.log(fruits); 

// Метод reverse()

let letters = ["a, b, c, d, e, f"];

letters = letters.reverse();

console.log(letters); 

// Метод slice()

var stuff = ["гайка", "болт", "шайба", "винт", "шуруп",];

var trash = stuff.slice(1, 4);
console.log(trash);


// Метод splice()

var stuff = ["гайка", "болт", "шайба", "винт", "шуруп",];

var trash = stuff.splice(2, 4);
console.log(trash);
console.log(stuff);

// Метод sort()

var numbers = [63, 37, 14, 2, 9, 95, 45, 21, 111];

numbers.sort();
console.log(numbers);

var letters = ["c, z, h, o, v, a, q"];
letters.sort();
console.log(letters);

// Метод push()

var numbers = [63, 37, 14, 2, 9, 95, 45, 21, 111];

var all = numbers.push(['c, z, h'],['v, a, q']);

console.log(all); 


// Метод pop() 

var numbers = [63, 37, 14, 2, 9, 95, 45, 21, 111];

var all = numbers.pop();

console.log(all); 

// Метод unshift()

var stuff = ["гайка", "болт", "шайба", "винт", "шуруп",];

var trash = stuff.unshift("банан");

console.log(trash);


// Метод shift()

var stuff = ["гайка", "болт", "шайба", "винт", "шуруп",];

var trash = stuff.shift();

console.log(trash);