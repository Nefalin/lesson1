// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
// -- отримує текст з блоку з id "rules"

// let contentId = document.getElementById('content');
// console.log(contentId.innerText);
// let rulesId = document.getElementById('rules');
// console.log(rulesId.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший
// -- замініть текст параграфа з id 'rules' на будь-який інший

// let contentId = document.getElementById('content');
// contentId.innerText = 'New Content Under Construction';
// let rulesId = document.getElementById('rules');
// rulesId.innerText = 'New Rules Under Construction';

// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій

// let contentBG = document.body.children;
// for (const element of contentBG) {element.style.backgroundColor = 'red'};
// let contentTXT = document.body.children;
// for (const element of contentTXT) {element.style.color = 'blue'};

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// -- поміняти колір тексту у всіх елементів fc_rules на червоний

// let classList = document.getElementById('rules').classList;
// console.log(classList);
// let rulesTXT = document.getElementsByClassName('fc_rules');
// for (const element of rulesTXT) {element.style.color = 'red'}

// ------------------------------------------------------------------

// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :

// a) додає клас з назвою групи, елементу з ід main_header

// let classADD = document.getElementById('main_header');
// classADD.classList.add('url_list');

// b) робить шириниу елементу ul 400px

// let wightUL = document.getElementsByTagName('ul');
// for (const wight of wightUL) {wight.style.width = '400px'}

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let wightLinkList = document.getElementsByClassName('linkList');
// for (const wight of wightLinkList) {wight.style.width = '50%'}

// d) отримує текст який зберігається в елементі з класом listElement2

// let listElement2TXT = document.getElementsByClassName('listElement2');
// for (const TXT of listElement2TXT) {console.log(TXT.innerText)}

// e) отримує всі елементи li та змінює ім колір фону на сірий

// let colourLI = document.getElementsByTagName('li');
// for (const colour of colourLI) {colour.style.backgroundColor = 'grey'};

// f) отримує всі елементи 'a' та додає їм клас anchor

// let aADD = document.getElementsByTagName('a');
// for (const anchor of aADD) {anchor.className = 'anchor'}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контент елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let aLink3 = document.getElementsByTagName('a');
// for (const link3 of aLink3) {
//     if (link3.innerText === 'link3') {link3.style.fontSize = '40px'}
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let aXXX = document.getElementsByTagName('a');
// for (const XXX of aXXX) {XXX.classList.add(`${XXX.innerText}`)}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let allBG = prompt('Input colour');
// let subBG = document.getElementsByClassName('sub-header');
// for (const sub of subBG) {sub.style.background = allBG}
// ---- test
// for (const sub of subBG) {sub.style.background = prompt('Input colour')}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let colorTXT = prompt('Input colour');
// let contentTXT = document.getElementsByClassName('sub-header');
// for (const elementTXT of contentTXT) {
//     if (elementTXT.innerText === 'content 2 segment') {elementTXT.style.color = colorTXT}
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let TXT = prompt('Input text');
// let contentTXT = document.getElementsByClassName('content_1');
// for (const elementTXT of contentTXT) {elementTXT.innerText = TXT}

// l) отримати елементи p та змінити їм padding на 20px

// let paddingP = document.getElementsByTagName('p');
// for (const padP of paddingP) {padP.style.padding = '20px'}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let contentTXT = document.getElementsByClassName('text2');
// for (const cTXT of contentTXT) {cTXT.innerText = 'march-2022'}
