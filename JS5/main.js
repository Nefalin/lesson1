// Все стірлочними!!!!!!!!!
//-------------------------------------------------------

//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array = [1,3,7,9];
// let ser = array => {
//     let a = 0;
//     for (let arrayElements of array) {
//         a += arrayElements
//     }
//     return a / array.length
// }
// console.log(ser(array));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let array = [1,3,7,9];
// let minimal = array => {
//     let a = array[0];
//     let b = array[0];
//     for (let argElement of array) {
//         if (argElement < a) {
//             a = argElement;
//     }
//     if (argElement > b) {
//         b = argElement;
//     }
// }
//     console.log(b);
//     return a;
//
// }
// console.log(minimal(array));

// - створити функцію яка заповнює масив рандомними числами
// let rnd = array => {
//     let a = [];
//     for (let i = 0; i < 10; i++) {
//         a[i] = Math.random();
//     }
//     return array = a
// };
// console.log(rnd())

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let rnd = () => {
//     let num = Math.round(Math.random()*100);
//     return num;
// }
// console.log(rnd())

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let rnd = (limit) => {
//     let a = [];
//     for (let i = 0; i < limit; i++) {
//         a[i] = Math.random();
//     }
//     return a;
// };
// console.log(rnd(4))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let array = [1,3,7,9];
// let revers = array => { return array.reverse()};
// console.log(revers(array));

//-------------------------------------------------------
// Переробити на стрілочні функції з попереднього дз
//-------------------------------------------------------

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let  result = (a, b) => {return ((a + b) * 2)};
// console.log(result(2, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let result = (r) => {
//     return (3.14 * r * r)
// };
// console.log(result(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let result = (r, h) => {
//         return (2 * 3.14 * r * h)
// };
// console.log(result(2,5));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let displayA = (array) => {
//     for (let item of array) {
//         console.log(item);
//     }
//
// }
// let books = [
//     {bookName: 'One man', bookPgs: 234, bookType: 'horror', bookAut: [
//             {name: 'Ivan'},
//             {name: 'Petro'},
//             {name: 'Stepan'},
//         ]},
//     {bookName: 'Second man', bookPgs: 123, bookType: 'comedy', bookAut: [
//             {name: 'Igor'},
//             {name: 'Vasyl'},
//             {name: 'Oksana'},
//         ]},
//     {bookName: 'Third man', bookPgs: 543, bookType: 'action', bookAut: [
//             {name: 'Svitlana'},
//             {name: 'Olga'},
//             {name: 'Marta'},
//         ]},
// ];
// console.log(displayA(books))

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let paragraf = (txt) => {document.write(`<p>${txt}</p>`)}
// paragraf('some text here');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let ul_li = (txt) => {
//     document.write(`<ul>
//         <li>${txt}</li>
//         <li>${txt}</li>
//         <li>${txt}</li>
//     </ul>`)
//     }
// ul_li('some text here');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let ul_li = (txt, number) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${txt}</li>`)
//         }
//     document.write(`</ul>`);
//     }
// ul_li('some text here', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [10, 'text', true]
// let elementsA = (array) => {
//     document.write(`<ul>
//         <li>${array[0]}</li>
//         <li>${array[1]}</li>
//         <li>${array[2]}</li>
//     </ul>`)
// }
// elementsA(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let books = [
//     {name: 'One man', age: 234, id: 'horror'},
//     {name: 'Second man', age: 123,id: 'comedy'},
//     {name: 'Third man', age: 543, id: 'action'},
// ];
// let elementsA = (array) => {
//     document.write(`<ul>`)
//         for (let items of array) {
//             document.write(`<li>${items.id} ${items.name} ${items.age}</li>`)
//         }
//     document.write(`</ul>`);
// }
// elementsA(books);

// - створити функцію яка повертає найменьше число з масиву
// let array = [1,3,7,9,15,4, -15];
// let minimal = (array) => {
//     let a = array[0];
//     for (let items of array) {
//         if (items <= a)
//         a = items;
//     }
//         return a;
// }
// document.write(`${minimal(array)}`);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array = [1,3,7,9,15,4,-15,22,6,18,4,9];
// let suma = (array) => {
//     let a = array[0];
//     for (let items of array) {
//        a = a + items;
//     }
//         return a - array[0];
// }
// document.write(`${suma(array)}`);

//------------------------------------------------------
//------------------------------------------------------

// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
// let books = [
//     {bookName: 'One man', bookPgs: 234, bookType: 'horror', bookAut: [
//             {name: 'Ivan'},
//             {name: 'Petro'},
//             {name: 'Stepan'},
//         ]},
//     {bookName: 'Second man', bookPgs: 123, bookType: 'comedy', bookAut: [
//             {name: 'Igor'},
//             {name: 'Vasyl'},
//             {name: 'Oksana'},
//         ]},
// ];
// let rev = (books) => [books[0],books[1]] = [books[1],books[0]];
// console.log(rev(books));