	// 5.	Напишите функцию, которая сгенерирует массив рандомных чисел (на 10 элементов) от -10 до 10
    //     Выведите массив в консоль
    //     Посчитайте сумму позитивных чисел из массива и выведите ее в консоль



    var arr = [];
    for (var i=-10, t=10; i<t; i++) {
        arr.push(Math.round(Math.random() * t))
     }
    console.log(arr);
    


    var arr = [];

    function randomNumbers() {
      
        for (var i=-10, t=10; i<t; i++) {
        arr.push(Math.round(Math.random() * t)); 
        }
    }
    randomNumbers();
    console.log(arr);