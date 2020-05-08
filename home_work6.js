// 1. Створіть одновимірний масив і присвойте його в змінну.
// *Виведіть значення масиву в консоль.
// *Виведіть кожне значення масиву використовуючи довільний цикл.

let stuff = ['book', 'pen', 'keyboard']
console.log(stuff)
for (let thing of stuff) {
    console.log (thing)
}

// 2. Створіть одновимірний обєкт і присвойте його в змінну.
// *Виведіть значення обєкту в консоль.
// *Виведіть кожний ключ і його значення в консоль.

let stuff = {school: 'book', house: 'bed', music: 'keyboard'}
console.log(stuff)
for (let key in stuff) {
    console.log (key, stuff[key])
}

// 3. Створіть масив і видаліть останнє значення з масиву, викoристовуючи "pop"
// *Виведіть в консоль нову довжину масиву

let stuff = ['book', 'pen', 'keyboard']
stuff.pop()
console.log(stuff. length)

// 4. Створіть масив і додайте нове значення до масиву з кінця, викoристовуючи "push"
// *Виведіть в консоль нову довжину масиву

let nmbrs = [4, 8, 10, 115];
nmbrs.push(18)
console.log(nmbrs. length)


// 5. Створіть масив і видаліть перше значення з масиву, викoристовуючи "shift"
// *Виведіть в консоль нову довжину масиву

let animals = ['child', 'monkey', 'horse', 'unicorn']
animals.shift()
console.log(animals. length)

// 6. Створіть масив і додайте нове значення до масиву з початку, викoристовуючи "unshift"
// *Виведіть в консоль нову довжину масиву

let languages = ['Ukrainian', 'Slovak', 'Belorusian']
languages.unshift('Polish')
console.log(languages.length)

// 7. Створіть рекурсивну функцію для того, щоб вивести в консоль всі значення багатовимірного масиву


// 8. Створіть рекурсивну функцію для того, щоб вивести в консоль всі ключі багатовимірного обєкту

let country = {name: 'Great Britain', 
type: 'Monarchy', 
location:{
    part: 'Europe'
}
};
for (let key in country) {
    console.log(key)
}
function showObjectKeysRecur (arg1, arg2) {
    for (let key in arg1) {
        console.log (arg2, key);
        if (typeof arg1[key] === 'object'){
            showObjectKeysRecur(arg1[key], key);
        }
    }
}
// 9. Створіть багатовимірний масив і присвойте його в змінну.
// *Виведіть значення масиву в консоль.
// *Виведіть кожне значення масиву використовуючи функцію з завдання 7.


// 10. Створіть багатовимірний обєкт і присвойте його в змінну.
// *Виведіть значення обєкт в консоль.
// *Виведіть кожний ключ і його значення в консоль використовуючи функцію з завдання 8.

let transport = {city: 'bus', rural: 'tractor', personal: {type1: 'car', type2: 'bicycle'}}
for (let key in transport) {
    console.log (key);
    if (typeof transport [key] === 'object' ) {
        for(let keyInner in transport[key]) {
            console.log(key,keyInner, transport[key])
        }
    }
}

