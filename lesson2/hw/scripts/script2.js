//2. Построить прямоугольный треугольник состоящий из символа "*".

var rows =prompt("Enter numerof  rows:");

for (var a = -1; a < rows; a++) { 
    for(var b = -1; b<a; b++){
        document.write(" * ");
    }
    document.write("<br/>");
}





