// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let text = document.getElementById('text');
let btn = document.getElementsByClassName('btn')[0];
btn.onclick = function () {
    if (text.style.display !== 'none') {
        text.style.display = 'none';
    } else {
        text.style.display = '';
    }
};


//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let form1inp1 = document.getElementsByClassName('form1inp1')[0];
let task1BTN = document.getElementsByClassName('task1BTN')[0];
task1BTN.onclick = function () {
    if (form1inp1.value < 18) {
        console.log('Go away!!!');
    } else {
        console.log('Wellcome man :)');
    }
};

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let task2BTN = document.getElementsByClassName('task2BTN')[0];
task2BTN.onclick = function () {
    let in1 = document.form2.form2inp1.value;
    let in2 = document.form2.form2inp2.value;
    let in3 = document.form3.form2inp3.value;
    let in4 = document.form3.form2inp4.value;
    console.log(in1, in2, in3, in4);
};

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let task3BTN = document.getElementsByClassName('task3BTN')[0];
task3BTN.onclick = function () {
    let tr = document.form4.form4inp1.value;
    let td = document.form4.form4inp2.value;
    let txt = document.form4.form4inp3.value;
    // console.log(tr, td, txt);
    let table = document.getElementsByClassName('table')[0];
    function tbl (tr, td, txt) {
        for (i = 0; i < tr; i++) {
            // let table = document.getElementsByClassName('table')[0];
            let tr = document.createElement('tr');
            table.appendChild(tr);
            for (j = 0; j < td; j++) {

                let td = document.createElement('td');
                table.appendChild(td);
                td.style.border = 'solid 2px black';
                td.innerText = `${txt}`;
            }
        }
    }
    tbl (tr, td, txt);
};