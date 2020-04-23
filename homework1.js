  
// 1) Оголосіть три різні змінні за допомогою "let", "const", "var"
let first = 'ae'
const second = 2;
var third = 'bx'

// 2) Оголосіть одну змінну якій можна міняти значення і одну змінну якій не можна міняти значення 
let a = 7;
const b = 10;

// 3) Напишіть 1 коментар в 1 рядок і напишіть ще один коментар на 4 рядки
//В сіренької горлички туркотливе горлечко.
/*Копа на копі,
Під копою копа,
А хто їх копнув?
Копоклад Хома.*/

// 4) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу String.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let d = name: 'cat'
console.log(typeof d)

// 5) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Number.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let age = 100;
console.log(typeof age)

// 6) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Boolean.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let j = false;
console.log(typeof j)

// 7) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Object яке буде містити хоча б 3 ключі.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let food = {meat: 'pork', dairy: 'cheese', fruit: 'banana', vegetable: 'onion'};
console.log(typeof food)

// 8) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Array яке буде містити хоча б 3 значення.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
const maleNames = ['Anna', 'Michael', 'Ian', 'Jack'];
maleNames.shift();
console.log(typeof maleNames)

// 9) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Function.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let greeting = 'world'
function showMessage () {
    let message = 'Hello,' + greeting;
    alert (message);
} 
showMessage ();
console.log(typeof greeting)

// 10) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Undefined.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let zm;
console.log(typeof zm)

// 11) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Null.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let height = null;
console.log(typeof height)

// 12) Оголосіть змінну user типу Object і опишіть своє: ім'я, фамілію, дату народження,
// місце проживання, стать і можете добавити ще додаткові параметри використовуючи різні типи даних.
const user = {name: 'Maryna', lastName: 'Brila', dateOfBirth: 'January 12th', location: 'Uzhhorod', sex: 'female'}
