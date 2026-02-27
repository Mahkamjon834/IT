        // 10 Functions with Positional Arguments
        function add(a, b) {
            return a + b;
        }

        function subtract(a, b) {
            return a - b;
        }

        function multiply(a, b) {
            return a * b;
        }

        function divide(a, b) {
            return b !== 0 ? a / b : 'Cannot divide by zero';
        }

        function max(a, b) {
            return a > b ? a : b;
        }

        function min(a, b) {
            return a < b ? a : b;
        }

        function power(base, exponent) {
            return Math.pow(base, exponent);
        }

        function concatStrings(str1, str2) {
            return str1 + str2;
        }

        function areaOfRectangle(length, width) {
            return length * width;
        }

        function perimeterOfRectangle(length, width) {
            return 2 * (length + width);
        }

        // 10 Functions with Keyword Arguments (using objects)
        function greet({ name = "Guest", age = 0 }) {
            return `Hello, ${name}! You are ${age} years old.`;
        }

        function calculateBMI({ weight, height }) {
            return weight / (height * height);
        }

        function createUser({ username, email }) {
            return { username, email, createdAt: new Date() };
        }

        function formatDate({ date, format = "YYYY-MM-DD" }) {
            return date.toISOString().split('T')[0];
        }

        function calculateCircleArea({ radius }) {
            return Math.PI * radius * radius;
        }

        function calculateCircleCircumference({ radius }) {
            return 2 * Math.PI * radius;
        }

        function generateGreeting({ firstName, lastName }) {
            return `Hello, ${firstName} ${lastName}!`;
        }

        function calculateSpeed({ distance, time }) {
            return distance / time;
        }

        function calculateDiscount({ price, discountPercentage }) {
            return price - (price * discountPercentage / 100);
        }

        function createFullName({ firstName, lastName }) {
            return `${firstName} ${lastName}`;
        }

        // 10 Functions with Combined Arguments
        function calculateTotal(price, { taxRate = 0.1, discount = 0 }) {
            return price + (price * taxRate) - discount;
        }

        function introduce(name, { age = "unknown", city = "unknown" }) {
            return `Hi, I'm ${name}, ${age} years old from ${city}.`;
        }

        function calculateRectangle(length, width, { unit = "cm" }) {
            const area = length * width;
            return `Area: ${area} ${unit}²`;
        }

        function calculateTriangle(base, height, { unit = "cm" }) {
            const area = 0.5 * base * height;
            return `Area: ${area} ${unit}²`;
        }

        function calculateLoan(principal, rate, { years = 1 }) {
            return principal * Math.pow(1 + rate, years);
        }

        function createProfile(name, { age, country = "unknown" }) {
            return { name, age, country };
        }

        function calculateTravelTime(distance, speed, { unit = "hours" }) {
            const time = distance / speed;
            return `Travel time: ${time} ${unit}`;
        }

        function calculateSavings(income, expenses, { months = 12 }) {
            return (income - expenses) * months;
        }

        function generateReport(title, { author = "Anonymous", date = new Date() }) {
            return `Report: ${title}, Author: ${author}, Date: ${date.toDateString()}`;
        }

        function calculateGrade(score, { maxScore = 100 }) {
            return (score / maxScore) * 100;
        }

        