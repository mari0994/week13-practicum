//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.

const currentDate = new Date();
console.log(currentDate);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.

const currentYear = currentDate.getFullYear();
console.log(currentYear);

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.

const currentMonth = currentDate.getMonth();
console.log(currentMonth);

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.

const currentDay = currentDate.getDate();
console.log(currentDay);

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.

const birthday = new Date (2024, 11, 12);
console.log(birthday);

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.

const futureDate = new Date (2024, 2, 2);
console.log(futureDate);

//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate

const futureTimestamp = Date.parse(futureDate);
const currentTimestamp = Date.parse(currentDate);
const timestampDifference = futureTimestamp - currentTimestamp;
const daysDifference = Math.floor(timestampDifference / (1000 * 60 * 60 * 24));
console.log(daysDifference);

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.

const pastDate = new Date(2024, 0, 28);
console.log(pastDate);

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate

const pastTimestamp = Date.parse(pastDate);
const pastDifference = Date.now() - pastTimestamp;
const pastDaysDifference = Math.floor(pastDifference / (1000 * 60 * 60 * 24));
console.log(pastDaysDifference);

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.

const nextWeek = new Date(2024, 1, 6);
console.log(nextWeek);

//Задание 11
// Выведите в консоль день недели для nextWeek
console.log(nextWeek.getDay());

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.

const futureYear = new Date();
futureYear.setFullYear(currentYear + 5);
console.log(futureYear);

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.

const futureDateInFutureYear = futureYear.setMonth(11, 12);
console.log(new Date(futureDateInFutureYear));


//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом

const futureYearTimestamp = Date.parse(futureYear);
const futureDifferenceTimestamp = futureYearTimestamp - Date.now();
const futureDifference = Math.floor(futureDifferenceTimestamp / (1000 * 60 * 60 * 24 * 365));
console.log(futureDifference);


//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = '2023-06-15T08:30:00.000Z';
const dateOne = new Date(Date.parse(strDate));
console.log(dateOne);

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
const dateOneTimestamp = Date.parse(strDate);
console.log(dateOneTimestamp);

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else

const date = '2023/06/15';
let wrongDate = Date.parse(date);
console.log(wrongDate);

if (isNaN(wrongDate)) {
    console.log('Неправильный формат даты')
} else {
    console.log('Правильный формат даты');
}
//Вместо сравнения wrongDate === 'NaN' следует использовать isNaN(wrongDate), так как NaN – это специальное значение в JavaScript, которое не равно ничему другому, включая себя самого. Правильный способ проверки на NaN – использование глобальной функции isNaN().

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.

const number = 231;

if (number > 0){
    console.log('Положительное число');
} else {
    console.log('Отрицательное число');
}

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.

if (number % 2 === 0){
    console.log('Это четное число');
} else {
    console.log('Это нечетное число');
}

//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.

if (number % 3 === 0){
    console.log('Это число кратно 3');
} else {
    console.log('Это число не кратно 3');
}

//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консолвь.

if (number >= 0 && number <=9){
    console.log('Число однозначное');
} else {
    console.log('Число не однозначное');
}

//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.

if (number >= 10 && number <=99){
    console.log('Число двузначное');
} else {
    console.log('Число не двузначное');
}

//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.

if (number > 0){
    console.log('Это положительное число');
} else if (number === 0){
    console.log('Это ноль');
} else {
    console.log('Это отрицательное число');
}

//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.

if (number % 5 === 0 || number % 7 === 0){
    console.log('Число кратно 5 или 7');
} else {
    console.log('Число не кратно ни 5, ни 7');
}

//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.

if (number < 0){
    console.log('Это отрицательное число');
} else if (number === 0){
    console.log('Это ноль');
} else {
    console.log('Это положительное число');
}

//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.

if (number >= 100 && number<= 999){
    console.log('Это положительное трехзначное число');
} else {
    console.log('Это не положительное трехзначное число');
}

//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).

let dayOfWeek;

dayOfWeek = '5';

switch (dayOfWeek) {
    case '1':
        console.log('Понедельник');
        break;
    case '2':
        console.log('Вторник');
        break;
    case '3':
        console.log('Среда');
        break;
    case '4':
        console.log('Четверг');
        break;
    case '5':
        console.log('Пятница');
        break;
    case '6':
        console.log('Суббота');
        break;
    case '7':
        console.log('Воскресенье');
        break;
    default:
        console.log('Это не день недели');
}

//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = 'W';
let fullName;

switch (direction) {
    case 'W':
        fullName = 'Запад';
        console.log(fullName);
        break;
    case 'N':
        fullName = 'Север';
        console.log(fullName);
        break;
    case 'S':
        fullName = 'Юг';
        console.log(fullName);
        break;
    case 'E':
        fullName = 'Восток';
        console.log(fullName);
        break;
}
