// 4. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, и каждому из объектов
// будет добавлять новое свойство "salary", хранящее зарплату сотрудника. 
// Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
//     • "director" — 3000;
//     • "manager" — 1500;
//     • "programmer" — 2000;
//     • для остальных значений — 1000.
// После выполнения функции — вывести информацию о сотрудниках.
    
// // sort(function(a, b) { return a > b });
// // 1, 2, 3, 5, 10, 14
// // 1, 10, 14, 2, 3,
var company = [
employe1 = {
    name: a = prompt("Enter first name:"), 
    sName: b = prompt("Enter surname:"),
    age: c = prompt("Enter age:"),
    occupation: d = prompt("Enter an occupation:"),
},
employe2 = {
    name: a = prompt("Enter first name:"), 
    sName: b = prompt("Enter surname:"),
    age: c = prompt("Enter age:"),
    occupation: d = prompt("Enter an occupation:"),
},
employe3 = {
    name: a = prompt("Enter first name:"), 
    sName: b = prompt("Enter surname:"),
    age: c = prompt("Enter age:"),
    occupation: d = prompt("Enter an occupation:"),
}
]

function addSalary(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].occupation == "director") {
            arr[i].salary = 3000;            
        }
        else if (arr[i].occupation == "manager") {
            arr[i].salary = 1500;
        }
        else if (arr[i].occupation == "programmer") {
            arr[i].salary = 2000;
        }
        else {
            arr[i].salary = 1000;
        }
    }
}

addSalary(company);

for (var i = 0; i < company.length; i++) {
console.log("First name: " + company[i].name);
console.log("Surname: " + company[i].sName);
console.log("Age: " + company[i].age + " years old");
console.log("Occupation: " + company[i].occupation);
console.log("Salary: " + company[i].salary);
}