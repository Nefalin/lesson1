// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
let a = 'hello';
let b = 'owu';
let c = 'com';
let d = 'ua';
let e = 1;
let f = 10;
let g = -999;
let h = 123;
let p = 3.14;
let k = 2.7;
let l = 16;
let m = true;
let n = false;

console.log(a, b, c, d, e, f, g, h, p, k, l, m, n);
alert(a+ b+ c+ d+ e+ f+ g+ h+ p+ k+ l+ m+ n);
document.write(a, b, c, d, e, f, g, h, p, k, l, m, n);

// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
let book = ['One Man', 234, 'horror'];
console.log(book);

// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
// автори (тип - масив, кожен елемент масиву - це стрінга)
let book2 = {
    name: 'One Man',
    pages: 234,
    type: 'horror',
    autor: [
{name: 'Ivan'},
{name: 'Petro'},
{name: 'Stepan'},
    ]
};
console.log(book2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let name = 'Mykola';
let surname = 'Midyanko';
let lastname = 'Mykolayovick';
let person = (surname+' '+name+' '+lastname);
console.log(person);
console.log(`${surname} ${name} ${lastname}`)

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let nameP = prompt ('What is your name?')
let surnameP = prompt ('What is your surname?')
let yearsP = prompt ('How old are you?')
console.log(`${surnameP} ${nameP} ${yearsP}`);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
a = 100;
b = '100';
c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// - Створити масив об'єктів з назвою books з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let books = [
    {bookName: 'One man', bookPgs: 234, bookType: 'horror', bookAut: [
            {name: 'Ivan'},
            {name: 'Petro'},
            {name: 'Stepan'},
        ]},
    {bookName: 'Second man', bookPgs: 123, bookType: 'comedy', bookAut: [
            {name: 'Igor'},
            {name: 'Vasyl'},
            {name: 'Oksana'},
        ]},
    {bookName: 'Third man', bookPgs: 543, bookType: 'action', bookAut: [
            {name: 'Svitlana'},
            {name: 'Olga'},
            {name: 'Marta'},
        ]},
];
console.log(books[0]);
console.log(books[1]);
console.log(books[2]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let height = 23;
let width = 10;
let s = (height*width);
console.log(s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 10;
let dC = 4;
let v = (p*dC*heightC);
console.log(v);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
n = 3;
m = 4;
k = Math.pow(n, 2)+Math.pow(m, 2);
console.log(Math.sqrt(k));

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
let operator = [
    {bool: 5 < 6}, //-> true
    {bool: 5 > 6}, //-> false
    {bool: 5 >= 6}, //-> false
    {bool: 5 == 6}, //-> false
    {bool: 10 == 10}, //-> true
    {bool: 10 === 10}, //-> true
    {bool: 10 < 10}, //-> false
    {bool: 10 > 10}, //-> false
    {bool: 10 != 10}, //-> false
    {bool: 123 === '123'}, //-> false
    {bool: 123 == '123'}, //-> true
    ]
console.log(operator);