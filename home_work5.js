// 1. Використовуючи цикл "while" виведіть в консоль цифри від 0 до 10;
// * Зробіть те саме за допомогою циклу "do while" i "for"

let y = 0;
while (y <= 10) { console.log(y);
    y++;
}

//or

let y = 0;
do {console.log(y);
   y++;
   } while(y <= 10)

//or

let y = 0;
for(let y = 0; y <= 10; y++) {
    console.log(y)
}

// 2. Яке останнє значення буде виведено в консоль?
// let i = 0;
//
// while (i > 10) {
//   console.log(i);
//   ++i;
// }

// undefined, тому що i > 10, неправильна умова

// 3. Яке останнє значення буде виведено в консоль?
// let i = 0;
//
// do {
//   console.log(i);
//   ++i;
// } while (i < 10)

// 10

// 4. Замініть цей приклад використовуючи "while"
//
// for (let i = 0; i < 10; i++) {
//   console.log('i', i);
// }

let i = 0;
while (i < 10) {console.log(i);
    i++;
}

//or

let i = 0;
while (i < 10) {console.log('i', i);
    i++;
}

// 5. Яке перше значення буде виведено в консоль?
// let i = 0;
//
// while (i > 10) {
//   ++i;
//   console.log(i);
// }

// undefined, тому що i > 10, неправильна умова

// 6. Яке перше значення буде виведено в консоль?
// let i = 1;
//
// do {
//   i++;
//   console.log(i);
// } while (i < 10)

// 2

