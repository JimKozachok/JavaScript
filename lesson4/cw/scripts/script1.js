// 1. Напишите функцию, которая принимает массив в качестве аргумента. 
// Используя slice(), извлеките информацию из массива аргументов и верните новый массив, содержащий элементы «warm» и «sunny».

// ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']


const weather = ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'];

var newWeather = weather.slice(2, 4);

console.log(newWeather);