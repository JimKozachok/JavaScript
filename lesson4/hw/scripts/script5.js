// 5.  Создать игру "Камень-Ножницы-Бумага".
// Выбор компьютера определяется строкой:  

// var computerChoice = Math.random();
// alert(computerChoice);


var userChoice = prompt("Выберете камень ножницы или бумагу?")

var computerChoice = Math.random();


if(computerChoice <= 0.333 )
{
    computerChoice = "Камень";
}

else if(computerChoice <= 0.666)
{
    computerChoice = "Бумага";
}

else 
{
    computerChoice = "Ножницы";
}

alert(computerChoice);