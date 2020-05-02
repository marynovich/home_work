// 1. Виведіть користувачу попап використовуючи функцію "alert" який містить довільне повідомлення.

alert('Peek-a-boo')

// 2. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"

let question = prompt('Got some weed?')
console.log(question)

// 3. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і має дефолтнe значення "13". Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"

let number = prompt('What is an unlucky number', [13])
console.log(number)

// 4. Виведіть користувачу попап використовуючи функцію "confirm" який містить довільне питання. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"

let statement = confirm('You`re young, arent you?')
console.log(statement)

// 5. Виведіть користувачу попап використовуючи функцію "confirm" який містить довільне питання. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "if" виведіть в консоль "1" якщо відповідь на питання була позитивна

let statement = confirm('Can you popup 1?');
console.log(statement)
if (statement) {console.log(1)};

// 6. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "if else" виведіть в консоль "1" або "2"

let country = prompt ('Where do you live?');
console.log(country)
if (country == 'Ukraine') {
    console.log(1);
} else {console.log(2);
}

//or

let country = prompt ('Where do you live?');
console.log(country)
if (country == 'Ukraine') {
    console.log(1);
} else if (country == 'Sweden') {
  console.log(2);
}

// 7. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "if else" виведіть в консоль "1" або "2" або "3"

let bands = prompt ('Could you name your favorite band?')
console.log(bands)
if (bands == 'Queen') {
    console.log (1)
} else if (bands == 'Muse') {
    console.log (2)
} else {
    console.log (3)
}

//or

let bands = prompt ('Could you name your favorite band?')
console.log(bands)
if (bands == 'Queen') {
  console.log (1)
} else if 
 (bands == 'Muse') {
  console.log (2)
} else (bands == 'Led Zeppelin'){
  console.log (3)
}

// 8. Виведіть користувачу попап використовуючи функцію "confirm" який містить довільне питання. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" якщо відповідь на питання була позитивна

let vv = confirm('Do you have a car?')
console.log(vv)
switch (vv) {
    case true : 1
    break;
}
// 9. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" або "2"

let arg = prompt('Who are you?');
console.log(arg)
switch (arg) {
  case 'Female':
    console.log(1);
    break;
  case 'Male':
    console.log(2);
    break;
}
// 10. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" або "2" або "3"

let arg = prompt('Who are you?');
console.log(arg)
switch (arg) {
  case 'Human':
    console.log(1);
    break;
  case 'Animal':
    console.log(2);
    break;
  case 'Machine':
      console.log(3);
      break;
}

// 11. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" або "2" або "3", виконайте те саме за допомогою "if else";
// *Зробіть два різні приклади

let travel = prompt('What countries have you been to?')
console.log (travel)
switch (travel) {
  case 'Netherlands':
    console.log(1);
    break;
  case 'Italy':
    console.log(2);
    break;
  case 'Germany':
      console.log(3);
      break;
}

//or

let pets = prompt('Do you have pets?');
console.log(pets)
switch (pets) {
  case 'Bingo':
    console.log(1);
    break;
  case 'Ever':
    console.log(2);
    break;
  case 'Masha':
      console.log(3);
      break;
}

//or

let education = prompt ('What did you study?');
console.log(education);
if (education == 'History') {
  console.log(1);
} else if (education == 'Math') {
  console.log(2);
} else (education == 'Biology') {
  console.log(3);
}

//or

let education = prompt ('What did you study?');
console.log(education);
if (education == 'History') {
  console.log(1);
} else if (education == 'Math') {
  console.log(2);
} else {
  console.log(3);
}