// 2. Создать программу, выполняющую вставку элемента в массив после элемента, значение которого укажет пользователь.
// Описание:
// п.1 Создайте произвольный массив и заполните его данными, например: var cars = ["Mitsubishi", "Honda", "Toyota", "Suzuki", "Audi", "BMW", "Mercedes"];
// п.2 Запросите у пользователя название элемента массива
// п.3.1 Если в массиве такой элемент есть - то необходимо после него вставить новый элемент, который пользователь введет дальше
// п.3.2 Если в массиве такого элемента нет - добавить в конец массива
// п.4 Если в массиве есть одинаковые элементы (из. п.2), программа должна добавлять только после первого найденного элемента
// п.5 Запросите у пользователя новый элемент для массива и вставьте его после найденного элемента или же в конец массива (в зависимости от условий выше)


var cars = ["Mitsubishi", "Honda", "Toyota", "Suzuki", "Audi", "BMW", "Mercedes"];

var input = prompt('Which car would you like ');

var length = cars.length;

for (let i = 0; i < cars.length; i++) {
  if (cars[i] == input) {
    newcar = prompt("a new car: ");
    cars.splice(i+1, 0, newcar);
    console.log(cars);
    break;
      
    } else if ( i == cars.length) {
      cars.push(input);
      console.log("list of the cars" + cars);
      break;
    }

}


let cars = ["Mitsubishi", "Honda", "Toyota", "Suzuki", "Audi", "BMW", "Mercedes"];
let userCar = prompt("Введите марку машины");
for(let i = 0; i <= cars.length; i++){
    if(userCar == cars[i]){
        let newCar = prompt("Введите марку машины для вставки: ");
        cars.splice(i+1, 0, newCar);
        console.log(cars);
        break;
    }
    if(i == cars.length){
        cars.push(userCar);
        console.log(cars);
        break;
    }
}