//Задание 1
let name = prompt(`Ваше имя?`);
console.log(name);

let age = prompt(`Ваш возраст?`);
console.log(age);

let city = prompt(`Город проживания?`);
console.log(city);

let phone = prompt(`Ваш телефон?`);
console.log(phone);

let email = prompt(`Ваш email?`);
console.log(email);

let company = prompt(`Где Вы работаете?`);
console.log(company);

document.write(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}.`);



//задание 3

let a = prompt('Значение a'),
    b = prompt('Значение b'),
    c = prompt('Значение c'),
    d = prompt('Значение d'),
    e = prompt('Значение e'),
    f = prompt('Значение f');
if (a + b + c == d + e + f) {
    console.log('Да');
} else {
    console.log('Нет');
}

//задание 4

let g = 1;
//let g = 0;
//let g = -3;
if (g > 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//задание 5

let j = 10,
    k = 2;

let sum = j + k,
    difference = j - k,
    multiply = j * k,
    divide = j / k;

console.log(sum);
console.log(difference);
console.log(multiply);
console.log(divide);

if (sum > 1) {
    console.log(sum ** 2);
} else {
    console.log(sum);
}

//задание 6

if (j > 2 && j < 11 || k >= 6 && k < 14) {
    console.log('верно');
} else {
    console.log('неверно');
}

//задание 7

let n = prompt ('Задайте значение от 0 до 59');

if (n <= 15) {
        console.log('Первая четверть');
} else if (n >= 16 && n <=30) {
    console.log('Вторая четверть');
} else if (n >= 31 && n <=45) {
    console.log('Третья четверть');
} else if (n >= 46 && n <=59) {
    console.logt('Четвертая четверть')
} else {
    console.log('Неверно');
}

//задание 8

let day = prompt (`Задайте значение от 0 до 31`);

if (day >= 1 && day <= 10){
    console.log('Первая декада'); 
} else if (day >= 11 && day <= 20 ){
    console.log('Вторая декада'); 
}else if (day >= 21 && day <= 31 ){
console.log('Третья декада'); 
} else {
    console.log('Неверно');
}

//задание 9

let days = prompt ('Количество дней'),
    years = days/365,
    months = days/31,
    weeks = days/7,
    hours = days * 24, 
    min = hours * 60,
    sec = min * 60;

    if (years < 1) {
        console.log(`Меньше года`)
    } else {
        document.write(`Количество лет: ${years}`);
    }

    if (days < 31) {
        console.log(`Меньше месяца`);
    } else {
        document.write(`Количество месяцев: ${months}`);
    }

    if (days < 7) {
        console.log('Меньше недели');
    } else {
        document.write(`Количество недель: ${weeks}`);
    }

    // 10 
let season;

if (days >=1 && DAY <=31) {
    console.log('Январь');
} else if ( days >= 32  && DAY <= 59 ) {
    console.log('Февраль');
} else if (days >= 60 && DAY <= 90 ) {
    console.log('Март');
} else if (days >= 91 && DAY <= 120 ) {
    console.log('Апрель');
} else if (days >= 121 && DAY <= 151) {
    console.log('Май');
} else if (days >= 152 && DAY <= 181) {
    console.log( 'Июнь');
} else if ( days >= 182 && DAY <= 212) {
    console.log('Июль');
} else if ( days >= 213 && DAY <= 243) {
    console.log('Август');
} else if (days >= 244 && DAY <= 273) {
    console.log('Сентябрь');
} else if (days >= 274 && DAY <= 304) {
    console.log('Октябрь');
} else if ( days >= 305 && DAY <= 334) {
    console.log('Ноябрь');
} else if (days >=335 && DAY <= 365) {
    console.log('Декабрь');
}

switch (season) {
    
}