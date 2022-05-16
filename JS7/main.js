// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// function User(id, name, surname , email, phone) {
//     this['id'] = id;
//     this['name'] = name;
//     this['surname'] = surname;
//     this['email'] = email;
//     this['phone'] = phone;
// }

// // створити пустий масив, наповнити його 10 об'єктами new User(....)

// let User1 = new User(1, 'Taras1', 'Shevchenko1', 'sheva1@gmail.com', 3805024001);
// let User2 = new User(2, 'Taras2', 'Shevchenko2', 'sheva2@gmail.com', 3805024002);
// let User3 = new User(3, 'Taras3', 'Shevchenko3', 'sheva3@gmail.com', 3805024003);
// let User4 = new User(4, 'Taras4', 'Shevchenko4', 'sheva4@gmail.com', 3805024004);
// let User5 = new User(5, 'Taras5', 'Shevchenko5', 'sheva5@gmail.com', 3805024005);
// let User6 = new User(6, 'Taras6', 'Shevchenko6', 'sheva6@gmail.com', 3805024006);
// let User7 = new User(7, 'Taras7', 'Shevchenko7', 'sheva7@gmail.com', 3805024007);
// let User8 = new User(8, 'Taras8', 'Shevchenko8', 'sheva8@gmail.com', 3805024008);
// let User9 = new User(9, 'Taras9', 'Shevchenko9', 'sheva9@gmail.com', 3805024009);
// let User10 = new User(10, 'Taras10', 'Shevchenko10', 'sheva10@gmail.com', 38050240010);
// let array = [User1, User2, User3, User4, User5, User6, User7, User8, User9, User10];
//
// console.log(array);

// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let arrayFilter = array.filter (value => value.id % 2 === 0);
// console.log(arrayFilter);

// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let arraySort = array.sort((a, b) => a.id - b.id);
// console.log(arraySort);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client {
//     constructor (id, name, surname , email, phone, order)
//     {
//     this['id'] = id;
//     this['name'] = name;
//     this['surname'] = surname;
//     this['email'] = email;
//     this['phone'] = phone;
//     this['order'] = order;
//     }
// }

// створити пустий масив, наповнити його 10 об'єктами Client

// let Client1 = new Client(1, 'Taras1', 'Shevchenko1', 'sheva1@gmail.com', 3805024001, ['product1']);
// let Client2 = new Client(2, 'Taras2', 'Shevchenko2', 'sheva2@gmail.com', 3805024002, ['product1', 'prodcut2']);
// let Client3 = new Client(3, 'Taras3', 'Shevchenko3', 'sheva3@gmail.com', 3805024003, ['product1', 'prodcut2', 'product3']);
// let Client4 = new Client(4, 'Taras4', 'Shevchenko4', 'sheva4@gmail.com', 3805024004, ['product1', 'prodcut2', 'product3', 'product4']);
// let Client5 = new Client(5, 'Taras5', 'Shevchenko5', 'sheva5@gmail.com', 3805024005, ['product1', 'prodcut2', 'product3', 'product4', 'product5']);
// let Client6 = new Client(6, 'Taras6', 'Shevchenko6', 'sheva6@gmail.com', 3805024006, ['product1', 'prodcut2', 'product3', 'product4', 'product5', 'product6']);
// let Client7 = new Client(7, 'Taras7', 'Shevchenko7', 'sheva7@gmail.com', 3805024007, ['product1', 'prodcut2', 'product3', 'product4', 'product5', 'product6', 'product7']);
// let Client8 = new Client(8, 'Taras8', 'Shevchenko8', 'sheva8@gmail.com', 3805024008, ['product1', 'prodcut2', 'product3', 'product4', 'product5', 'product6', 'product7', 'product8']);
// let Client9 = new Client(9, 'Taras9', 'Shevchenko9', 'sheva9@gmail.com', 3805024009, ['product1', 'prodcut2', 'product3', 'product4', 'product5', 'product6', 'product7', 'product8', 'product9']);
// let Client10 = new Client(10, 'Taras10', 'Shevchenko10', 'sheva10@gmail.com', 38050240010, ['product1', 'prodcut2', 'product3', 'product4', 'product5', 'product6', 'product7', 'product8', 'product9', 'product10']);
// let array = [Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8, Client9, Client10];
// console.log(array);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let arraySort = array.sort((a, b) => a.order.length - b.order.length);
// console.log(arraySort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function car(model, brand, year , speed, engine) {
//     this['model'] = model;
//     this['brand'] = brand;
//     this['year'] = year;
//     this['speed'] = speed;
//     this['engine'] = engine;
//     this['drive'] = function ()
//     {
//         console.log(`їдемо зі швидкістю ${this['speed']} на годину`)
//     };
//     this['info'] = function ()
//     {
//         for (const item in this)
//         {
//             console.log(`${item} - ${this[item]}`)
//         }
//     };
//     this['increaseMaxSpeed'] = function (newSpeed)
//     {
//         this['speed'] += newSpeed
//     };
//     this['newYear'] = function (newValue)
//     {
//         this['year'] = newValue
//     };
//     this['addDriver'] = function (driver)
//     {
//         this['driver'] = driver
//     }
// }
//
// let result = new car('kia', 'sportage', 2018,  200, 2.0);
// console.log(result);
// result.drive();
// result.info();
// result.increaseMaxSpeed(20);
// console.log(result.speed);
// result.newYear(2022);
// console.log(result.year);
// result.addDriver({
//     name: 'Степаненко',
//     surname: 'Степан',
//     lastname: 'Степанович'
// });

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class car {
//     constructor(model, brand, year , speed, engine) {
//         this['model'] = model;
//         this['brand'] = brand;
//         this['year'] = year;
//         this['speed'] = speed;
//         this['engine'] = engine;
//     }
//
//
//     drive ()
//     {
//         console.log(`їдемо зі швидкістю ${this['speed']} на годину`)
//     };
//     info ()
//     {
//         for (const item in this)
//         {
//             console.log(`${item} - ${this[item]}`)
//         }
//     };
//     increaseMaxSpeed (newSpeed)
//     {
//         this['speed'] += newSpeed
//     };
//     newYear (newValue)
//     {
//         this['year'] = newValue
//     };
//     addDriver (driver)
//     {
//         this['driver'] = driver
//     }
// }
//
// let result = new car('kia', 'sportage', 2018,  200, 2.0);
// console.log(result);
// result.drive();
// result.info();
// result.increaseMaxSpeed(20);
// console.log(result.speed);
// result.newYear(2022);
// console.log(result.year);
// result.addDriver({
//     name: 'Степаненко',
//     surname: 'Степан',
//     lastname: 'Степанович'
// });

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// function Cinderella(name, age, size) {
//     this['name'] = name;
//     this['age'] = age;
//     this['size'] = size;
// }
// let arrCinderella = [
//     new Cinderella('Cindy1', 20, 30),
//     new Cinderella('Cindy2', 21, 31),
//     new Cinderella('Cindy3', 22, 32),
//     new Cinderella('Cindy4', 23, 33),
//     new Cinderella('Cindy5', 24, 34),
//     new Cinderella('Cindy6', 25, 35),
//     new Cinderella('Cindy7', 26, 36),
//     new Cinderella('Cindy8', 27, 37),
//     new Cinderella('Cindy9', 28, 38),
//     new Cinderella('Cindy10', 29, 39)
//     ];
// console.log(arrCinderella);
//
// function Prince(name, age, searchsize) {
//     this['name'] = name;
//     this['age'] = age;
//     this['searchsize'] = searchsize;
// }
// let arrPrince = new Prince('Princy1', 20, 38);
// console.log(arrPrince);
//
// let couple = (arrCinderella, Prince) => {
//     for (const item of arrCinderella) {
//         if (item.size === Prince.searchsize)
//         {return `${item.name}`;}
//     }
// };
//
// console.log(couple(arrCinderella, arrPrince));
// let cindy = arrCinderella.find(value => value.size === arrPrince.searchsize);
// console.log(cindy);