// 5.  Создать игру "Камень-Ножницы-Бумага".
// Выбор компьютера определяется строкой:  

// var computerChoice = Math.random();
// alert(computerChoice);



function compare() {

    let userChoice = prompt("Please enter 'Rock' or 'Paper' or 'Scissors' ")

    var computerChoice = Math.random();

    if (computerChoice < 0.34) {
        computerChoice = "Rock";

    } else if (computerChoice <= 0.67) {
        computerChoice = "Paper";

    } else {
        computerChoice = "Scissors";
        
    }
    if(userChoice === computerChoice){
        return "Draw";
    }

    else if(userChoice === "Rock"){
        if(computerChoice === "Scissors")  {
            return "User's rock win";
        }else{
            return "Computer's paper win";
        }
    }

    else if(userChoice === "Paper"){
        if(computerChoice === "Rock"){
            return "User's paper win";
        }else{
            return "Computer's scissors win";
        }
    }

    else if(userChoice === "Scissors"){
        if(computerChoice === "Paper"){
            return "User's scissors win";
        }else{
            return "Computer's rock win";
        }
    }
}

console.log(compare());