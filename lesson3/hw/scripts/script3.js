// 3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный подмассив заполнить значением 'odd', а чётный - 'even'. 
// Размер каждого вложенного массива - 3.

let arr = new Array(0);

let size = +prompt("Введите размер массива");

for (let i = 0; i<size; i++){
    if (i%2){
        arr.push(['odd' , 'odd' , 'odd']);
    } else {
        arr.push(['even' , 'even' , 'even']);
    }
}
console.log(arr);

