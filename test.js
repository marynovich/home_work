// 1) Оголосіть одну змінну якій можна міняти значення і одну змінну якій не можна міняти значення

let ab = 1;
const aa = 12;

// 2) Напишіть 1 коментар в 1 рядок і напишіть ще один коментар на 4 рядки

//Сьогодні субота

/*І все на світі треба пережити.
І кожен фініш — це, по суті, старт.
І наперед не треба ворожити,
І за минулим плакати не варт*/

// 3) Створіть "масив" який буде містити 5 довільних значень.
// * Виведіть змінну в консоль за допомогою "console.log"
// * Видаліть з масиву перше і останнє значення.
// * Виведіть змінну в консоль за допомогою "console.log"

let animals = ['dog', 'cat', 'horse', 'hamster', 'cow']
console.log(animals)
delete.animals[0];
delete.animals[4];
console.log(animals)

// 4) Створіть "об'єкт" який буде містити 5 довільних ключів із довільними значеннями.
// * Виведіть змінну в консоль за допомогою "console.log"
// * Видаліть з об'єкту перший і останній ключ
// * Виведіть змінну в консоль за допомогою "console.log"

let animals = {pet1 = 'dog', pet2 = 'cat', pet3 = 'horse', pet4 = 'hamster', pet5 = 'cow'}
console.log(animals)
delete animals.pet1;
delete animals.pet2;
console.log(animals)

// 5) Напишіть всі способи створення функції.

let alphabet = function (k, m) {return k + m}
alphabet(18, 25)
//or

let a = 25;
let b = 45;
let c = 90;
function c (a,b,c) {return a + b + c}
c(25, 45, 90)

//or

function odd (h, m, b) {return h + m + b}
odd(88, 123, 99) 

// 6) Створіть функцію яка приймає 3 аргументи і повертає суму цих 3 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними aбо із змінними.

let price = function (arg1, arg2, arg3) { return arg1 + arg2 + arg3 }
price (22, 36, 58)
//or
let cat = 18;
let dog = 19;
let cow = 16;
function animals (arg1, arg2, arg3) {return arg1 + arg2 + arg3 }
animals (cat, dog, cow)

// 7) За допомогою тернарного оператору присвойте значення у змінну "salary" використовуючи змінну "workType". Якщо workType дорівнює "fulltime", тоді значення змінної має бути "1000" інакше "500".
// * Виведіть "salary" в консоль за допомогою "console.log". Зробіть два варіанти в одному резyльтат в консолі має бути "1000" в іншому "500"

let worktype = 'fulltime';
let salary = (worktype == 'fulltime') ? '1000' : '500';
console.log(salary)

let worktype = 'parttime';
let salary = (worktype == 'fulltime') ? '1000' : '500';
console.log(salary)


// 8) Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// * Виведіть змінну в консоль за допомогою "console.log"
// * Використовуючи "switch" виведіть в консоль "a" або "b" або "c", виконайте те саме за допомогою "if else";
// * Зробіть два різні приклади

let books = prompt('Do you have favorite book?');
console.log(books)
switch (books) {
  case 'Clockwork orange':
    console.log('a');
    break;
  case 'Harry Potter':
    console.log('b');
    break;
  case '1984':
      console.log('c');
      break;
}

//or

let books = prompt ('Do you have favorite book?');
console.log(books);
if (books == 'Clockwork orange') {
  console.log('a');
} else if (books == 'Harry Potter') {
  console.log('b');
} else if (books == '1984') {
  console.log('c');
}