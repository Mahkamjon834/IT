const a = parseFloat(prompt("Введите первое число: "));
const b = parseFloat(prompt("Введите второе число: "));
const op = prompt("Введите знак операции (+, -, *, /): ");

if (op === '+') {
    console.log("Результат:", a + b);
} else if (op === '-') {
    console.log("Результат:", a - b);
} else if (op === '*') {
    console.log("Результат:", a * b);
} else if (op === '/') {
    if (b !== 0) {
        console.log("Результат:", a / b);
    } else {
        console.log("Ошибка: деление на ноль!");
    }
} else {
    console.log("Ошибка: неправильный знак операции!");
}