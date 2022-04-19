// - Є змінна х, якій ви надаєте довільне числове значення.
let x = +prompt('Input number');
console.log(x);


//     Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = +prompt('Choose 1, 0 or -3');
if (a === 0) {
    console.log('false')
} else {
    console.log('true')
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = +prompt('Intup from 0 to 59');
if (0 <= time && time <= 14) {
    console.log('1 part');
} else if (14 < time && time <= 29) {
    console.log('2 part')
} else if (29 < time && time <= 44) {
    console.log('3 part')
} else if (time > 44 && time <= 59) {
    console.log('4 part')
} else {
    console.log('wrong number')
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('Intup from 1 to 31');
if (0 < day && day <= 10) {
    console.log('1 part');
} else if (10 < day && day <= 20) {
    console.log('2 part')
} else if (20 < day && day <= 31) {
    console.log('3 part')
} else {
    console.log('wrong number')
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayNumber = +prompt('Input day from 1 to 7');
switch (dayNumber) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('wrong number');
}


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let first = +prompt('Input First number');
let second = +prompt('Input Second number');
if (first>second) {
    console.log('First Number');
} else if (first<second) {
    console.log('Second Number')
} else if (first === second) {
    console.log('Numbers are equal')
} else {
    console.log('error')
}
