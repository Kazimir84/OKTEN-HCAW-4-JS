//                                              OKTEN-HCAW-4-JS
//======================================================================================================================
//                                                Class Work
//                                              OKTEN-CW-4-JS
//======================================================================================================================
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле order є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
};

let client1 = new Client(3, 'Alex', 'Kazimir', 'kav29041984@gmail.com', 380672222, ['milk', 'bread', 'butter']);
let client2 = new Client(1, 'Alex', 'Kazimir', 'kav29041984@gmail.com', 380672222, ['milk', 'bread', 'butter', 'juce']);
let client3 = new Client(8, 'Alex', 'Kazimir', 'kav29041984@gmail.com', 380672222, ['milk']);
let client4 = new Client(4, 'Alex', 'Kazimir', 'kav29041984@gmail.com', 380672222, ['milk', 'bread']);
let client5 = new Client(6, 'Alex', 'Kazimir', 'kav29041984@gmail.com', 380672222, ['milk', 'butter']);
let client6 = new Client(7, 'Alex', 'Kazimir', 'kav29041984@gmail.com', 380672222, ['milk', 'bread', 'butter', 'sult', 'water']);
let client7 = new Client(2, 'Alex', 'Kazimir', 'kav29041984@gmail.com', 380672222, ['milk', 'bread', 'butter']);
let client8 = new Client(5, 'Alex', 'Kazimir', 'kav29041984@gmail.com', 380672222, ['milk', 'bread', 'butter']);
let client9 = new Client(9, 'Alex', 'Kazimir', 'kav29041984@gmail.com', 380672222, ['milk', 'bread', 'butter']);
let client10 =new Client(10, 'Alex', 'Kazimir', 'kav29041984@gmail.com', 380672222, ['milk', 'bread', 'butter']);

// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
    client9,
    client10,
];
console.log('Object of Clients: ', clients);

// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log('Clients', clients);
let sortedProduct = clients.sort(function (a, b) {
    return a.order.length - b.order.length;
});
console.log('Sorted by Product', sortedProduct);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//    максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
function Car(model, manufacturer, carYear, maxSpeed, enginValue) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.carYear = carYear;
    this.maxSpeed = maxSpeed;
    this.enginValue = enginValue;

    this.drive = function drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/годину`);
        document.write(`<br><hr>Їдемо зі швидкістю ${this.maxSpeed} км/годину`);
        return this.maxSpeed;
    };
    this.onfo = function info () {
        document.write(`
            <br><hr>Модель Автівки: ${this.model}<br>
                Виробник: ${this.manufacturer}<br>
                Рік випуску: ${this.carYear}<br>
                Максимальна швидкість: ${this.maxSpeed}<br>
                Об'єм двигуна: ${this.enginValue}`
        );
        console.log(`
                Модель Автівки: ${this.model}
                Виробник: ${this.manufacturer}
                Рік випуску: ${this.carYear}
                Максимальна швидкість: ${this.maxSpeed}
                Об'єм двигуна: ${this.enginValue}`
        );
    };
    this.newSpeed = function increaseMaxSpeed (newSpeed) {
        this.maxSpeed += newSpeed;
        document.write(`
            <br><hr>Нова швидкість збільшена на ${newSpeed} і становить ${this.maxSpeed} км/год
        `);
        console.log(`
            Нова швидкість збільшена на ${newSpeed}(км) і становить ${this.maxSpeed}(км/год)
        `)
        return this.maxSpeed;
    };
    this.changeYear = function newValue (newYear) {
        this.carYear = newYear;
        document.write(`
            <br><hr>Рік випуску авто було змінено на ${this.carYear};
        `);
        console.log(`
                    Рік випуску авто було змінено на ${this.carYear};
        `)
        return this.carYear;
    };
    this.addDriver = function addDriver (driver) {
        document.write(`<p><hr>Новий водій: `)
        for (let driverKey in driver) {
            console.log(`${driverKey[0].toUpperCase() + driverKey.slice(1)}:  ${driver[driverKey]}`);
            document.write(`<p><b>${driverKey[0].toUpperCase() + driverKey.slice(1)}</b>:  ${driver[driverKey]}</p>`);
        }
        document.write(`</p><hr>`);
        return carAudi.drivers = driver;
    };
};
let carAudi = new Car('Audi', 'WAG', 1997, 280, 2.6);
    carAudi.drive();
    carAudi.onfo();
    carAudi.newSpeed(20);
    carAudi.changeYear(1996);
    carAudi.addDriver({
        name: 'Alex',
        age: 38,
    });
    console.log('Car', carAudi );


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//  максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
document.write(`Class`)
class Car2 {
    constructor(model, manufacturer, carYear, maxSpeed, enginValue) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.carYear = carYear;
        this.maxSpeed = maxSpeed;
        this.enginValue = enginValue;
    };
    drive = function drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/годину`);
        document.write(`<br><hr>Їдемо зі швидкістю ${this.maxSpeed} км/годину`);
        return this.maxSpeed;
    };
    info () {
        document.write(`
            <br><hr>Модель Автівки: ${this.model}<br>
                Виробник: ${this.manufacturer}<br>
                Рік випуску: ${this.carYear}<br>
                Максимальна швидкість: ${this.maxSpeed}<br>
                Об'єм двигуна: ${this.enginValue}`
        );
        console.log(`
                Модель Автівки: ${this.model}
                Виробник: ${this.manufacturer}
                Рік випуску: ${this.carYear}
                Максимальна швидкість: ${this.maxSpeed}
                Об'єм двигуна: ${this.enginValue}`
        );
    };
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed += newSpeed;
        document.write(`
            <br><hr>Нова швидкість збільшена на ${newSpeed} і становить ${this.maxSpeed} км/год
        `);
        console.log(`
            Нова швидкість збільшена на ${newSpeed}(км) і становить ${this.maxSpeed}(км/год)
        `)
        return this.maxSpeed;
    };
    newValueYear (newYear) {
        this.carYear = newYear;
        document.write(`
            <br><hr>Рік випуску авто було змінено на ${this.carYear};
        `);
        console.log(`
                    Рік випуску авто було змінено на ${this.carYear};
        `)
        return this.carYear;
    };
    addDriver (driver) {
        document.write(`<p><hr>Новий водій: `);
        for (let driverKey in driver) {
            console.log(`${driverKey[0].toUpperCase() + driverKey.slice(1)}:  ${driver[driverKey]}`);
            document.write(`<p><b>${driverKey[0].toUpperCase() + driverKey.slice(1)}</b>:  ${driver[driverKey]}</p>`);
        }
        document.write(`</p><hr>`);
        return carAudi.drivers = driver;
    };
};
let car2 = new Car2('BMW', 'VAG', 2000, 210, 2.0);
console.log('Car2: ', car2);
car2.drive();
car2.info();
car2.increaseMaxSpeed(25);
car2.newValueYear(2001);
car2.addDriver({
    name: 'Kazymyr',
    age: 39,
});
console.log('Car2: ', car2);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок, покласти їх в масив.
class Cinderella {
    constructor (name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    };
};
let cinderella1 = new Cinderella('Katya', 36, 38);
let cinderella2 = new Cinderella('Ira', 58, 39);
let cinderella3 = new Cinderella('Kira', 25, 32);
let cinderella4 = new Cinderella('Lyuda', 46, 39);
let cinderella5 = new Cinderella('Nasty', 30, 37);
let cinderella6 = new Cinderella('Zina', 50, 41);
let cinderella7 = new Cinderella('Vika', 32, 36);
let cinderella8 = new Cinderella('Masha', 18, 30);
let cinderella9 = new Cinderella('Dasha', 33, 35);
let cinderella10 = new Cinderella('Anya', 27, 37);

let cinderellas = [
    cinderella1,
    cinderella2,
    cinderella3,
    cinderella4,
    cinderella5,
    cinderella6,
    cinderella7,
    cinderella8,
    cinderella9,
    cinderella10
];

// Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, findFoot) {
        this.name = name;
        this.age = age;
        this.findFoot = findFoot;
    };
};
let prince = new Prince('Alex', 38, 38);
console.log(prince);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let i = 0; i < cinderellas.length; i++) {
    let cinderella = cinderellas[i];
        if (cinderella.footSize === prince.findFoot) {
            console.log('Ця попелюшка повинна бути з принцом: ', cinderella);
            document.write(`
                Ця попелюшка повинна бути з принцом, бо Він шукав попелюшку з таким розміром взуття ${prince.findFoot} і ось Вона: 
                <br>Ім'я: ${cinderella.name} 
                <br>Вік: ${cinderella.age} 
                <br>Розмір взуття: ${cinderella.footSize}
            `)
        };
};
document.write(`<hr>`)

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
document.write(`<hr><div>Пошук через функцію масиву find() <hr>`);
let princess = cinderellas.find(function (cinderella) {
    if (cinderella.footSize === prince.findFoot) {
        // console.log('Ця попелюшка повинна бути з принцом: ', cinderella);
        document.write(`
                Ця попелюшка повинна бути з принцом, бо Він шукав попелюшку з таким розміром взуття ${prince.findFoot} і ось Вона: 
                <br>Ім'я: ${cinderella.name} 
                <br>Вік: ${cinderella.age} 
                <br>Розмір взуття: ${cinderella.footSize}
            `)
        return cinderella;
    }
});
document.write(`</div><hr>`);
console.log('Ця попелюшка повинна бути з принцом: ', princess)

//======================================================================================================================
//                                                Home Work
//                                              OKTEN-HW-4-JS
//======================================================================================================================
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let arndomNumArr = [];
function randomNumb() {
    for (let i = 0; i < 100; i++) {
        let num = Math.floor(Math.random()*100);
        arndomNumArr.push(num);
    };
};
randomNumb();
console.log('Arr', arndomNumArr);

// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
let arndomNumArr2 = [];
function randomNumb2(range) {
    for (let i = 0; i < range; i++) {
        let num = Math.floor(Math.random()*100);
        arndomNumArr2.push(num);
    };
};
randomNumb2(10);
console.log('Arr2', arndomNumArr2);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//   Відсортувати його за допомоги sort
let arndomNumArr3 = [];
function randomNumb3(range) {
    for (let i = 0; i < range; i++) {
        let num = Math.floor(Math.random()*100);
        arndomNumArr3.push(num);
    };
};
randomNumb3(100);
arndomNumArr3.sort((a,b) => {
    return a-b;
})
console.log('Arr3', arndomNumArr3);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//   відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
let arndomNumArr4 = [];
function randomNumb4(range) {
    for (let i = 0; i < range; i++) {
        let num = Math.floor(Math.random()*100);
        arndomNumArr4.push(num);
    };
};
randomNumb4(100);
let par = arndomNumArr4.filter(function (value) {
    if (value%2 === 0) {
        return value;
    };
});
console.log('Arr4', par);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
//   за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arndomNumArr5 = [];
function randomNumb5(range) {
    for (let i = 0; i < range; i++) {
        let num = Math.floor(Math.random()*100);
        arndomNumArr5.push(num);
    };
};
randomNumb5(100);
let mappedToString = arndomNumArr5.map((value) => {
    return value.toString();
})
console.log('Arr5', mappedToString);

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let user1 = new User(1, 'Alex', 'Kazymyr', 'kav2008@ukkr.net', '+380667844399');
let user2 = new User(2, 'Nik', 'Kazymyr', 'kav2008@ukkr.net', '+380667844399');
let user3 = new User(3, 'Katy', 'Kazymyr', 'kav2008@ukkr.net', '+380667844399');
let user4 = new User(4, 'Ira', 'Kazymyr', 'kav2008@ukkr.net', '+380667844399');
let user5 = new User(5, 'Alex', 'Kazymyr', 'kav2008@ukkr.net', '+380667844399');
let user6 = new User(6, 'Alex', 'Kazymyr', 'kav2008@ukkr.net', '+380667844399');
let user7 = new User(7, 'Alex', 'Kazymyr', 'kav2008@ukkr.net', '+380667844399');
let user8 = new User(8, 'Alex', 'Kazymyr', 'kav2008@ukkr.net', '+380667844399');
let user9 = new User(9, 'Alex', 'Kazymyr', 'kav2008@ukkr.net', '+380667844399');
let user10 = new User(10, 'Alex', 'Kazymyr', 'kav2008@ukkr.net', '+380667844399');

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [
    user1,
    user2,
    user3,
    user4,
    user5,
    user6,
    user7,
    user8,
    user9,
    user10,
]
console.log('Users Array ', users);

// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
let filterIdPar = users.filter(value => {
    if (value.id%2 === 0) {
        return value;
    };
});
console.log('Filterd ID ', filterIdPar);

//======================================================================================================================
//                                              Additional Work
//                                              OKTEN-AW-4-JS
//======================================================================================================================
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }