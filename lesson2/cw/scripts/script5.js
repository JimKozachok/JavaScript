//5. Остановите цикл, когда i = 7 и выведите в консоль все числа до 7 пропустив 3.
//for (var i = 0; i < 10; i++) {}

for (var i = 0; i < 10; i++) {
    if (i > 7) {
        break;
    }
    if (i===3) {
        continue;
    }
    console.log(i);
}