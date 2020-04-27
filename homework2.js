// 1) Оголосіть змінну типу number і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let a = 7;
a = String(a)
console.log(typeof a)

// 2) Оголосіть змінну типу number і зробіть явне перетворення до типу boolean використовуючи “Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let age = 50;
age = Boolean(age)
console.log(typeof age)

// 3) Оголосіть змінну типу number і зробіть явне перетворення до типу null використовуючи “Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let price = 127;
price = Null(price)
console.log(typeof price)

//коли виводила в консоль, то мені показувало помилку Uncaught ReferenceError: Null is not defined. Тому подумала над іншим способом: якщо Null виводиться в консолі як object,
//то можна зробити перетворення на object

let price = 127;
price = Object(price)
console.log(typeof price)

// 4) Оголосіть змінну типу string і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let name = 'Stacy'
name = Number(name)
console.log(typeof name)

// 5) Оголосіть змінну типу string і зробіть явне перетворення до типу boolean використовуючи “Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let flower = 'lilly'
flower = Boolean(flower)
console.log(typeof flower)

// 6) Оголосіть змінну типу string і зробіть явне перетворення до типу null використовуючи “Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let user = 'human'
user = Null(human)
console.log(typeof user)

//коли виводила в консоль, то мені показувало помилку Uncaught ReferenceError: Null is not defined. Тому подумала над іншим способом: якщо Null виводиться в консолі як object,
//то можна зробити перетворення на object

let user = 'nothingtowrite'
user = Object(nothingtowrite)
console.log(typeof user)


// 7) Оголосіть змінну типу boolean і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let work = false;
work = String(work)
console.log(typeof work)

// 8) Оголосіть змінну типу boolean і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let fruits = true
fruits = Number(fruits)
console.log(typeof fruits)

// 9) Оголосіть змінну типу boolean і зробіть явне перетворення до типу null використовуючи Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let task = false;
task = Null(task)
console.log(typeof task)

//коли виводила в консоль, то мені показувало помилку Uncaught ReferenceError: Null is not defined. Тому подумала над іншим способом: якщо Null виводиться в консолі як object,
//то можна зробити перетворення на object

let task = false;
task = Object(task)
console.log(typeof task)

// 10) Оголосіть змінну типу null і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let x = null;
x = String (x)
console.log(typeof x)

// 11) Оголосіть змінну типу null і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let z = null;
z = Number(z)
console.log(typeof z)

// 12) Оголосіть змінну типу null і зробіть явне перетворення до типу boolean використовуючи Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let cat = null;
cat = Boolean(cat)
console.log(typeof cat)

// 13) Напишіть всі способи створення функції.

//я тут просто гралася із викликом функції, тому його залишила

let alphabet = function (k, m) {return k + m}
alphabet(18, 25)
//or
let r = 25;
let g = 45;
let b = 90;
function c (r, g, b) {return r + g + b}
c(25, 45, 90)
//or
function odd (h, m, b) {return h + m + b}
odd(88, 123, 99) 

// 14) Напишіть функцію яка нічого не повертає
// * Викличіть функцію

function days (arg1) {}
days (1)
//or
function weeks () {return}
weeks()

// 15) Напишіть функцію яка завжди буде повертати ваше імя
// * Викличіть функцію

function name () {return 'Maryna'}
name()

// 16) Створіть функцію яка приймає 1 аргумент і повертає його без змін.
// * Викличіть функцію у двох різних варіантах, з даними напряму вбо із змінними.

let cost = function (a) { return a }
cost (100)
//or
let z = 30;
function y (arg1) {return arg1}
y(30)

// 17) Створіть функцію яка приймає 2 аргументи і повертає суму цих 2 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними напряму вбо із змінними.

let ac = function (aa, cc) {return aa + cc }
ac(75, 88)
//or
let people = 48;
let animals = 7898;
function creatures (arg1, arg2) {return arg1 + arg2}
creatures (48, 7898)

// 18) Створіть функцію яка приймає 3 аргументи і повертає суму цих 3 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними напряму вбо із змінними.

let cost = function (arg1, arg2, arg3) { return arg1 + arg2 + arg3 }
cost (100, 125, 18)
//or
let apple = 18;
let berry = 50;
let pear = 5;
function fruits (arg1, arg2, arg3) {return arg1 + arg2 + arg3 }
fruits (18, 50, 5)
