// 2. Повторить с swith, при условии 
// num = 5 - "Tiny"
// num = 10 - "Small"
// num = 15 - "Medium"
// num = 20 - "Large"
// num = 25 - "Huge"

var num = +prompt("num: ")
console.log("num : " + num);

switch (num){
    case 1:
    case 2:
    case 3:
    case 4:
        console.log('Tiny');
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
        console.log('Small')
        break;
}