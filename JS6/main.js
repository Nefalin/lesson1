//----------------------------------------------------------

// let s1 = 'Hello World';
// let s2 = 'Lorem Ipsum';
// let s3 = 'Javascript Is Cool';

// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// console.log(s1.length, s2.length, s3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// console.log(s1.toUpperCase(), s2.toUpperCase(), s3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// console.log(s1.toLowerCase(), s2.toLowerCase(), s3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.trim());
// console.log(str.replaceAll(' ', '')); //якщо всі пробіли треба забрати

//----------------------------------------------------------

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray = (str) => str.split(' ');
// console.log(arr(str));

//----------------------------------------------------------

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let nums = [10,8,-7,55,987,-1011,0,1050,0];
// console.log(nums.map(value => value.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11, 21, 3];
// let sortNums = (arr, direction) => {
//     if (direction === 'ascending') {
//         arr.sort((a, b) => a - b)
//     }
//     else if (direction === 'descending') {
//         arr.sort((a, b) => b - a)
//     }
//     return arr;
// }
// console.log(sortNums(nums,'ascending'));
// console.log(sortNums(nums,'descending'));

//----------------------------------------------------------

// - є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// -- відсортувати його за спаданням за monthDuration

// let sortCourse = (array) => array.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(sortCourse(coursesAndDurationArray));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filterCourse = (array) => array.filter(value => value.monthDuration > 5);
// console.log(filterCourse(coursesAndDurationArray));

//----------------------------------------------------------

// описати колоду карт
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// let dec = [
//     {
//         cardSuite: 'diamond',
//         value: '6',
//         color: 'red'
//     },
//     {
//         cardSuite: 'heart',
//         value: '6',
//         color: 'red'
//     },
//     {
//         cardSuite: 'spade',
//         value: '6',
//         color: 'black'
//     },
//     {
//         cardSuite: 'clubs',
//         value: '6',
//         color: 'black'
//     },
//     {
//         cardSuite: 'diamond',
//         value: '7',
//         color: 'red'
//     },
//     {
//         cardSuite: 'heart',
//         value: '7',
//         color: 'red'
//     },
//     {
//         cardSuite: 'spade',
//         value: '7',
//         color: 'black'
//     },
//     {
//         cardSuite: 'clubs',
//         value: '7',
//         color: 'black'
//     },
//     {
//         cardSuite: 'diamond',
//         value: '8',
//         color: 'red'
//     },
//     {
//         cardSuite: 'heart',
//         value: '8',
//         color: 'red'
//     },
//     {
//         cardSuite: 'spade',
//         value: '8',
//         color: 'black'
//     },
//     {
//         cardSuite: 'clubs',
//         value: '8',
//         color: 'black'
//     },
//     {
//         cardSuite: 'diamond',
//         value: '9',
//         color: 'red'
//     },
//     {
//         cardSuite: 'heart',
//         value: '9',
//         color: 'red'
//     },
//     {
//         cardSuite: 'spade',
//         value: '9',
//         color: 'black'
//     },
//     {
//         cardSuite: 'clubs',
//         value: '9',
//         color: 'black'
//     },
//     {
//         cardSuite: 'diamond',
//         value: '10',
//         color: 'red'
//     },
//     {
//         cardSuite: 'heart',
//         value: '10',
//         color: 'red'
//     },
//     {
//         cardSuite: 'spade',
//         value: '10',
//         color: 'black'
//     },
//     {
//         cardSuite: 'clubs',
//         value: '10',
//         color: 'black'
//     },
//     {
//         cardSuite: 'diamond',
//         value: 'jack',
//         color: 'red'
//     },
//     {
//         cardSuite: 'heart',
//         value: 'jack',
//         color: 'red'
//     },
//     {
//         cardSuite: 'spade',
//         value: 'jack',
//         color: 'black'
//     },
//     {
//         cardSuite: 'clubs',
//         value: 'jack',
//         color: 'black'
//     },
//     {
//         cardSuite: 'diamond',
//         value: 'queen',
//         color: 'red'
//     },
//     {
//         cardSuite: 'heart',
//         value: 'queen',
//         color: 'red'
//     },
//     {
//         cardSuite: 'spade',
//         value: 'queen',
//         color: 'black'
//     },
//     {
//         cardSuite: 'clubs',
//         value: 'queen',
//         color: 'black'
//     },
//     {
//         cardSuite: 'diamond',
//         value: 'king',
//         color: 'red'
//     },
//     {
//         cardSuite: 'heart',
//         value: 'king',
//         color: 'red'
//     },
//     {
//         cardSuite: 'spade',
//         value: 'king',
//         color: 'black'
//     },
//     {
//         cardSuite: 'clubs',
//         value: 'king',
//         color: 'black'
//     },
//     {
//         cardSuite: 'diamond',
//         value: 'ace',
//         color: 'red'
//     },
//     {
//         cardSuite: 'heart',
//         value: 'ace',
//         color: 'red'
//     },
//     {
//         cardSuite: 'spade',
//         value: 'ace',
//         color: 'black'
//     },
//     {
//         cardSuite: 'clubs',
//         value: 'ace',
//         color: 'black'
//     },
//     {
//         cardSuite: '',
//         value: 'joker',
//         color: 'red'
//     },
//     {
//         cardSuite: '',
//         value: 'joker',
//         color: 'black'
//     }
// ];

// - знайти піковий туз

// let filterDec = (array) => array.filter(value => value.cardSuite === 'clubs' && value.value === 'ace');
// console.log(filterDec(dec));

// - всі шістки

// let filterDec = (array) => array.filter(value => value.value === '6');
// console.log(filterDec(dec));

// - всі червоні карти

// let filterDec = (array) => array.filter(value => value.color === 'red');
// console.log(filterDec(dec));

// - всі буби

// let filterDec = (array) => array.filter(value => value.cardSuite === 'diamond');
// console.log(filterDec(dec));

// - всі трефи від 9 та більше

// let filterDec = (array) => array.filter(value => value.cardSuite === 'clubs' && value.value > '8' || value.cardSuite === 'clubs' && value.value === '10');
// console.log(filterDec(dec));

