// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function squareP(a, b) {
//     let  result = (a + b) * 2;
//     return result;
// }
// let answer = squareP(2, 5);
// console.log(answer);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function circleS(r) {
//     let result = 3.14 * r * r;
//     return result;
// }
// let answer = circleS(2);
// console.log(answer)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinderS(r, h) {
//     let result = 2 * 3.14 * r * h;
//     return result;
// }
// let answer = cylinderS(2, 5);
// console.log(answer);

// - створити функцію яка приймає масив та виводить кожен його елемент
// function displayA(array) {
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
// displayA(books)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraf(txt) {
//     console.log(txt);
// }
// paragraf('some text here');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function ul_li(txt) {
//     document.write(`<ul>
//         <li>${txt}</li>
//         <li>${txt}</li>
//         <li>${txt}</li>
//     </ul>`)
//     }
// ul_li('some text here');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function ul_li(txt, number) {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${txt}</li>`)
//         }
//     document.write(`</ul>`);
//     }
// ul_li('some text here', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [10, 'text', true]
// function elementsA(array) {
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
// function elementsA(array) {
//     document.write(`<ul>`)
//         for (let items of array) {
//             document.write(`<li>${items.id} ${items.name} ${items.age}</li>`)
//         }
//     document.write(`</ul>`);
// }
// elementsA(books);

// - створити функцію яка повертає найменьше число з масиву
// let array = [1,3,7,9,15,4, -15];
// function minimal(array) {
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
// function suma(array) {
//     let a = array[0];
//     for (let items of array) {
//        a = a + items;
//     }
//         return a - array[0];
// }
// document.write(`${suma(array)}`);