// 1. Создать объект Point, содержащий два свойства: "x" и "y" — координаты точки, и метод GetQuadrant, вычисляющий, в каком квадранте в 
// декартовой системе координат находится данная точка. Протестируйте данный объект, изменяя значения его координат, и повторно вызавая метод GetQuadrant.



let a = +prompt("Enter the coordinates (x):");
let b = +prompt("Enter the coordinates (y):");

if (isNaN(a) || isNaN(b)) {
    console.log("'x' or 'y' isn't a number!");
}

let point ={
    x: a,
    y: b
};
console.log(point);

function GetQuadrant () {
    if (point.x >0 && point.y >0) {
        console.log("Point in the first quadrant");
    } else if (point.x > 0 && point.y < 0) {
        console.log("Point in the second quadrant");
    } else if (point.x > 0 && point.y > 0) {
        console.log("Point in the third quadrant");
    }  else if (point.x < 0 && point.y >0 ) {
        console.log("Point in the fourth quadrant");
    } else if (point.x == 0 && point.y == 0 ) {
        console.log("Zero point")
    }
}    
GetQuadrant();
