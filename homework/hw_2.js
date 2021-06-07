//
//                    H O M E W O R K
//

// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// let array1 = [3, 5, 12, -23, 8];
// let array2 = ['hello', 'Vika', '123', 'Ok10', 'Mazda'];
// let array3 = ['Vova', -106, false, 'true', '26'];
//
// console.log(array1);
// console.log(array2);
// console.log(array3);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного
// індексу. Вивести в консоль
//
// let arr = [];
// arr[0] = 'Hello World!';
// arr[1] = 567;
// arr[2] = '567';
// arr[3] = false;
// arr[4] = null;
// arr[5] = 'age';
// arr[6] = -185;
// arr[7] = undefined;
// arr[8] = 'Vova';
// arr[9] = 'true';
//
// console.log(arr);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і
// індексом всередині
//
// for (let i = 0; i <= 10; i++) {
//     document.write(`<div> Hello Ok10 </div>`);
//
// }
//
// document.write(`<hr>`);
//
// for (let i = 0; i <= 10; i++) {
//     document.write(`<div> Hello Ok10: ${i} </div>`);
//     document.write('<div>  Hello Ok10:  ' + i + '  </div>')
//
// }
//
// document.write(`<hr>`);

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
//
// let i = 0;
// while (i < 20) {
//     document.write(`<h1> Hello OKTEN School </h1>`);
//     document.write('<h1>  Hello OKTEN School  </h1>');
//     i++;
// }
//
// let j = 0;
// while (j < 20) {
//     document.write(`<h1> Hello OKTEN School: ${j} </h1>`);
//     document.write('<h1>  Hello OKTEN School '+ j + ' </h1>');
//     j++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// let array1 = [3, 5, 12, -23, 8, 100, 357, -1000, 0, 19];
//
// for (let i = 0; i < array1.length; i++) {
//    console.log(array1[i]);
// }
// console.log(`---------------------------------------------------------------`);
// console.log(`---------------------------------------------------------------`);
//
// for (const number of array1) {
//     console.log(number);
// }
// console.log(`---------------------------------------------------------------`);
// console.log(`---------------------------------------------------------------`);
//
// let i = 0;
// while (i < array1.length) {
//     console.log(array1[i])
//     i++;
// }
// console.log(`---------------------------------------------------------------`);
// console.log(`---------------------------------------------------------------`);
//
// for (const key in array1) {
//     console.log(array1[key]);
// }
// console.log(`---------------------------------------------------------------`);
// console.log(`---------------------------------------------------------------`);
//
// array1.forEach(i => console.log(i));
//

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// let array2 = ['hello', 'Vika', '123', 'Ok10', 'Mazda', 'Vova', 'good bye', 'freedom',
// '123', 'Java'];
//
// for (let i = 0; i < array2.length; i++) {
//  console.log(array2[i]);
// }
// console.log('--------------------------------------------------------------');
//
// for (const str of array2) {
//     console.log(str);
// }
// console.log('--------------------------------------------------------------');
//
// for (const key in array2) {
//     console.log(array2[key]);
// }
// console.log('--------------------------------------------------------------');
//
// i = 0;
// while (i < array2.length) {
//     console.log(array2[i]);
//     i++;
// }
//

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
// let array3 = ['Vova', -106, false, 'true', '26', 0, true, 26, 'Hello', 1000];
//
// for (let i = 0; i < array3.length; i++) {
//   console.log(array3[i]);
// }
// console.log('--------------------------------------------------------------');
//
// for (const element of array3){
//     console.log(element);
// }
//
// console.log('--------------------------------------------------------------');
//
// for (const key in array3) {
//     console.log(array3[key]);
// }
//
// console.log('--------------------------------------------------------------');
//
// let i = 0;
// while (i < array3.length) {
//     console.log(array3[i]);
//     i++;
// }
//

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
//
// let array = ['Vova', -106, false, 'true', '26', 0, true, 26, 'Hello', 1000];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'boolean') {
//         console.log(array[i]);
//     } else {
//         console.log('not a boolean')
//     }
// }
//          OR
// let array = ['Vova', -106, false, 'true', '26', 0, true, 26, 'Hello', 1000];
// for (let i = 0; i < array.length; i++) {
//     (typeof array[i] === 'boolean')
//         ? console.log(array[i])
//         : console.log('not a boolean')
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
// let array = ['Vova', -106, false, 'true', '26', 0, true, 26, 'Hello', 1000];
//
// for (let i = 0; i < array.length; i++) {
//     (typeof array[i] === 'number')
//         ? console.log(array[i])
//         : console.log('not a number')
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи
// let array = ['Vova', -106, false, 'true', '26', 0, true, 26, 'Hello', 1000];
//
// for (let i = 0; i < array.length; i++) {
//     (typeof array[i] === 'string')
//         ? console.log(array[i])
//         : console.log('not a string')
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами)
// через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//
// let newArray = [];
//
// newArray[0] = false;
// newArray[1] = 'false';
// newArray[2] = 10;
// newArray[3] = 'Okten';
// newArray[4] = null;
// newArray[5] = '123';
// newArray[6] = 123;
// newArray[7] = 'Hello world';
// newArray[8] = undefined;
// newArray[9] = 'Vika';
//
// for (let i = 0; i < newArray.length; i++) {
//   console.log(newArray[i]);
// }
//
// console.log('--------------------------------------------------------------');
//
// for (const element of newArray) {
//   console.log(element);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через
// console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log('step : ', i);
//     document.write('<div> step: '+ i +' </div>');
//     document.write(`<br>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через
// console.log та document.write
//
// for (let i = 0; i < 100; i++) {
//     console.log('step: ', i);
//     document.write(`step: ${i}`);
//     document.write(`<br>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через
// console.log та document.write
//
// for (let i = 0; i < 200; i+=2) {
//     console.log('step:', i);
//     document.write(`step: ${i} <br>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через
// console.log + document.write
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log('step:', i);
//         document.write(`step: ${i} <br>`);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через
// console.log + document.write
//
// for (let i = 0; i < 100; i++) {
//     if(i % 2 === 1) {
//         console.log('step:', i);
//         document.write(`step: ${i} <br>`);
//     }
// }

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// let usersWithCities = [];
//
// for (let i = 0; i < usersWithId.length; i++) {
//     for (let j = 0; j < citiesWithId.length; j++) {
//        if(usersWithId[i].id === citiesWithId[j].user_id) {
//            usersWithId[i].address = citiesWithId[j]
//        }
//     }
// }
//
// usersWithCities.push(usersWithId);
// console.log(usersWithCities);
//
//
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]
//


// ------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//                         C L A S S W O R K
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
//
// let arr = ['a', 'b', 'c'];
// for (let i = 1; i <= 3; i++) {
//     arr[arr.length] = i;
// }
// console.log(arr);
//
// console.log(`--------------------------------------------------`);
//
// for (let j= 1; j <=3; j++) {
//     arr.push[j];
// }
// console.log(arr);


// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
//
// let arr = [1, 2, 3];
// let newArray = arr.reverse();
//
// console.log(newArray);
//
// console.log(`----------------------------------------------------`)
//
// let arr1 = [1, 2, 3];
// let newArray1 = [];
//
// for (let i = 0; i < arr1.length; i++) {
//    newArray1 = arr1.reverse(i);
// }
// console.log(newArray1);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
//
// let arr = [1, 2, 3];
// for (let i = 4; i <= 6; i++) {
//     arr.push(i);
//
// }
// console.log(arr);
//
// console.log(`-----------------------------------------------`);
//
// let arr1 = [1, 2, 3];
// for (let j = 4; j <= 6; j++) {
//     arr1[arr1.length] = j;
//
// }
// console.log(arr1);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
//
//
// let arr = [1, 2, 3];
// for (let i = 6; i > 3; i--) {
//     arr.unshift(i);
// }
// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// let arr = [1, 2, 3, 4, 5];
// let newArray = [];
//
// for (let i = 3; i < arr.length; i++) {
//    newArray.push(arr[i])
// }
// console.log(newArray);


// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
//
// let arr = [1, 2, 3, 4, 5];
//
// for (let i = 0; i <=2; i++) {
//     arr.pop(arr[i]);
// }
// console.log(arr);


// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
//
//
// let arr = [1, 2, 3, 4, 5];
//
// for (let i = 3; i < 4; i++) {
//     arr.splice(3, 2, 'a', 'b', 'c');
//
// }
// console.log(arr);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи,
// значення яких є парними.
//
// let array1 = [3, 5, 12, -23, 8, 100, 357, -1000, 0, 19];
// for (let i = 0; i < array1.length; i++) {
//     if(array1[i] % 2 ===0 ) {
//         console.log(array1[i]);
//     }
// }

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи,
// значення яких є не парними.
//
// let array1 = [-3, 5, 12, 23, 8, 100, 357, -1000, 0, 19];
// for (let i = 0; i < array1.length; i++) {
//     if (array1[i] % 2 !== 0) {
//         console.log(array1[i]);
//     }
// }


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
// let array = [-3, 5, 12, 23, 8, 100, 357, -1000, 0, 19];
// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//     newArray[i] = array[i];
//
// }
// console.log(newArray);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//
// let arr = [ 'a', 'b', 'c'];
// let str = '';
//
// for (const string of arr) {
//     str = str + string; //str += string;
// }
// console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//
// let arr = ['a', 'b', 'c'];
// i = 0;
// let str = '';
// while (i < arr.length) {
//     str = str + arr[i];
//     i++;
// }
// console.log(str);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arr = ['a', 'b', 'c'];
// let str = '';
// for (const element of arr) {
//    str += element;
// }
// console.log(str);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.
// let arr = ['a', 'b', 'c'];
// let str = '';
// for (const string in arr) {
//     str = str + arr[string];
// }
// console.log(str);




//
// =====ДОДАТКОВО 1=======
//

//     зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
//
// let array = [2,17,13,6,22,31,45,66,100,-18];
//
// let i = 0;
// while (i < array.length) {
//     console.log(array[i]);
//     i++;
// }
//
// console.log(`-------------------------------------------`);
//
// for (let j = 0; j < array.length; j++) {
//     console.log(array[j]);
//
// }
//
// console.log(`-------------------------------------------`);
//
// let k = 0;
// while (k < array.length) {
//     if (k % 2 !== 0) {
//         console.log(array[k]);
//     }
//     k++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let array = [2,17,13,6,22,31,45,66,100,-18];
//
// for (let i = 0; i < array.length; i++) {
//     if(i % 2 !== 0) {
//         console.log(array[i]);
//     }
//
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let array = [2,17,13,6,22,31,45,66,100,-18];
//
// let i = 0;
// while(i < array.length) {
//     if(array[i] % 2 !== 1) {
//         console.log(array[i]);
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let array = [2,17,13,6,22,31,45,66,100,-18];
//
// for (let i = 0; i < array.length; i++) {
//    if(array[i] % 2 !== 1) {
//        console.log(array[i]);
//    }
//
// }


// 7. замінити кожне число кратне 3 на слово "okten"
//
// let array = [2,17,13,6,22,31,45,66,100,-18];
//
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 3 === 0) {
//         array[i] = 'okten';
//     }
//
// }
// console.log(array);

// 8. вивести масив в зворотньому порядку.
//
// let array = [2,17,13,6,22,31,45,66,100,-18];
//
// for (let i = array.length - 1; i > 0; i--) {
//     console.log(array[i]);
// }


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// let array = [2,17,13,6,22,31,45,66,100,-18];
//
// let i = array.length - 1;;
// while (i >= 0) {
//     console.log(array[i]);
//     i--;
// }
//
// console.log(`-------------------------------------------`);
//
// for (let j = array.length-1; j>= 0; j--) {
//     console.log(array[j]);
//
// }
//
// console.log(`-------------------------------------------`);
//
//
// let array = [2,17,13,6,22,31,45,66,100,-18];  //вивести з не парним індексом (с заду на перед);
//
// let k = array.length - 1;;
// while (k >= 0) {
//     if (k % 2 !== 0) {
//         console.log(array[k]);
//     }
//     k--;
// }
// console.log(`-------------------------------------------`);
//
//
// перебрати циклом for та вивести  числа тільки з непарним індексом (с заду на перед);
// let array = [2,17,13,6,22,31,45,66,100,-18];
//
// for (let i = array.length - 1; i >= 0; i--) {
//     if(i % 2 !== 0) {
//         console.log(array[i]);
//     }
// }
// console.log(`-------------------------------------------`);
//
// перебрати циклом while та вивести  числа тільки парні  значення (с заду на перед)
// let array = [2,17,13,6,22,31,45,66,100,-18];
//
// let i = array.length - 1;
// while(i >= 0) {
//     if(array[i] % 2 !== 1) {
//         console.log(array[i]);
//     }
//     i--;
// }
// console.log(`-------------------------------------------`);
//
// перебрати циклом for та вивести  числа тільки парні  значення
// let array = [2,17,13,6,22,31,45,66,100,-18];
//
// for (let i = array.length - 1; i >= 0; i--) {
//    if(array[i] % 2 !== 1) {
//        console.log(array[i]);
//    }
//
// }
// console.log(`-------------------------------------------`);
//
// замінити кожне число кратне 3 на слово "okten" (с заду на перед);
//
// let array = [2,17,13,6,22,31,45,66,100,-18];
// console.log(array);
//
// for (let i = array.length - 1; i >= 0; i--) {
//     if (array[i] % 3 === 0) {
//         array[i] = 'okten';
//         console.log(array);
//     }
// }
// console.log(`-------------------------------------------`);


// 10
// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.
//
//
// let newArray = [];
// let newArray1 = [];
//
// for (let i = 0; i < 100; i++) {
//     [i] % 2 === 0 ? newArray[i] = i : newArray1[i] = i;
//
// }
// console.log(newArray);
// console.log(newArray1);
//
//
// console.log(`-------------------------------------------`);
//
// let newArr1 = [];
// let newArr2 = [];
//
// for (let i = 0; i < 50 ; i++) {
//    newArr1[i] = i * 2;
//    newArr2[i] = i * 2 + 1;
// }
//
// console.log(newArr1);
// console.log(newArr2);

// - Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//
// let arr1 = [];
// for (let i = 0; i < 20; i++) {
//     arr1[i] = Math.floor(Math.random() * (500 - 1) + 1);
//
// }
//
// console.log('array1');
// console.log(arr1);
// console.log('-----------------------------------------------');


// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate
//random number JS)
// let arr1 = [];
// for (let i = 0; i < 20; i++) {
//     arr1[i] = Math.floor(Math.random() * (732 - 8) + 8);
//
// }
//
// console.log('array1');
// console.log(arr1);
// console.log('-----------------------------------------------');


// 2. Вивести за допомогою console.log кожен третій елемен
//
// let array2 = [];
//
// for (let i = 0; i <= 10; i++) {
//    array2[i]=Math.floor(Math.random() * (732 - 8)) + 8;
// }
//
// console.log('array2');
// console.log(array2);
//
// for (let i = 2; i < array2.length; i+=3) {
//     console.log(array2[i]);
//
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
//
// let array = []
// for (let i = 0; i <= 10; i++) {
//     array[i] = Math.floor(Math.random()* (732 - 8)) + 8;
// }
//
// console.log('--------------------------------');
// console.log(array);
// console.log('--------------------------------');
//
//
// for (let i = 2; i < array.length; i += 3) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
// }


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та
// записати їх в новий масив
//
// let array = [];
// let newArray = [];
// for (let i = 0; i <= 10; i++) {
//     array[i] = Math.floor(Math.random()* (1000 - 10)) + 10;
// }
//
// console.log('--------------------------------');
// console.log(array);
// console.log('--------------------------------');
//
//
// for (let i = 2; i < array.length; i += 3) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//         newArray[i] = array[i];
//     }
// }
// console.log(newArray);
//
// console.log('--------------------------------------');
// console.log('--------------------------------------');
// console.log('--------------------------------------');
//
// let array2 = [];
// let newArray2 = [];
//
// for (let i = 0; i <= 10; i++) {
//     array2[i] = Math.floor(Math.random() * (1000 - 10)) + 10;
// }
// console.log('-----------------------------------------');
// console.log(array2);
// console.log('-----------------------------------------');
//
// for (let i = 2; i < array2.length; i += 3) {
//     if (array2[i] % 2 === 0) {
//         console.log(array2[i]);
//         newArray2.push(array2[i]);
//     }
// }
// console.log(newArray2);
//
// console.log('---------------------------------------');
// console.log('---------------------------------------');
// console.log('---------------------------------------');


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//
// let array1 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0; i < array1.length; i++) {
//   if (array1[i + 1] % 2 === 0) {
//       console.log(array1[i]);
//   }
// }


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки.
//     Обрахувати середній чек.
//
// let array = [100,250,50,168,120,345,188];
// let sum = 0;
//
// for (let i = 0; i < array.length; i++) {
//     sum += array[i] / array.length;
// }
// console.log(sum);


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх
// в інший масив.
//
// let arr = [];
// let newArr = [];
//
// for (let i = 0; i < 10; i++) {
//     arr[i] = Math.floor(Math.random() * (10 - 1) + 1)
// }
//
// console.log('------------------------------------');
// console.log(arr);
//
// for (let i = 0; i < arr.length; i++) {
//     const number = arr[i] * 5;
//     console.log(number);
//     newArr[i] = number;
// }
//
// console.log(newArr);
//
//        OR
//
// let arr = [];
// let newArr = [];
//
// for (let i = 0; i < 10; i++) {
//     arr[i] = Math.floor(Math.random() * (10 - 1) + 1)
// }
//
// console.log('------------------------------------');
// console.log(arr);
//
// for (let i = 0; i < arr.length; i++) {
//     const number = arr[i] * 5;
//     console.log(number);
//     newArr.push(number);
// }
//
// console.log(newArr);


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо
// елемент є числом - додати його в інший масив.


// let arr = ['HELLO', 15, '15', 27, false, 'false', 465, 'Viktoriia', 1001, 36];
// let newArr = [];
//
// for (let i = 0; i < arr.length; i++) {
//    if (typeof arr[i] === 'number') {
//        console.log(arr[i]);
//        newArr[i] = arr[i];
//    }
//
// }
// console.log(newArr);
//
//
//     OR
//
// let arr = ['HELLO', 15, '15', 27, false, 'false', 465, 'Viktoriia', 1001, 36];
// let newArr = [];
//
// for (let i = 0; i < arr.length; i++) {
//    if (typeof arr[i] === 'number') {
//        console.log(arr[i]);
//        newArr.push(arr[i]);
//    }
//
// }
// console.log(newArr);















