//11. Подмассив наибольшей суммы
// 		Определите максимальную сумму в подмассиве
		
// 		// Setup
// 		var a = [
// 			[1, -10, 4, 5],
// 			[1, 5, 5, 3],
// 			[-1, 8, 4, 1],
// 			[1, -10, -4, 5],
// 			[1, 10, 4, 0],
// 		];

// 		Например:
// 		var a = [
// 			[1, 3, 6], 
// 			[3, 1, -1], 
// 			[3, 0]
// 		];
		
// 		Максимальная сумма тут первого подмассива: 1 + 3 + 6 = 10;
// 		Ответ: 10

// 		-------------------------------------------------------------------
var a = [
    [1, -10, 4, 5],
    [1, 5, 5, 3],
    [-1, 8, 4, 1],
    [1, -10, -4, 5],
    [1, 10, 4, 0],
   ];
 
 var arrOfSum = [];
 for (let i = 0; i < a.length; i++) {
   let sum = 0;
   for (let j = 0; j < a[i].length; j++) {
     sum += a[i][j];
   };
   arrOfSum.push(sum);
 }
 
 console.log(Math.max(...arrOfSum));
