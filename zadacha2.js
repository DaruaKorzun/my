// Запрашиваем у пользователя два числа
let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));

// Сравниваем числа и выводим наибольшее
if (num1 > num2) {
console.log("Наибольшее число: " + num1);
} else if (num2 > num1) {
console.log("Наибольшее число: " + num2);
} else {
console.log("Оба числа равны: " + num1);
}