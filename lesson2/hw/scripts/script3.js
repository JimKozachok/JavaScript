//Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.

var a=+prompt("Enter a");

var b=+prompt("Enter b");

var c=+prompt("Enter c");


if (a>b && a>c) {
    document.write('max a= '+ a);
    
} else if (b>c && b>a ) {
    document.write('max b= '+ b);

} else if (c>a && c>b) {
    document.write('max c= '+ c );
}; 
