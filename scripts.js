// Вивести на сторінку в один рядок через кому числа від 10 до 20.

let step = 10;

while (step <= 20) {
    console.log(step);
    step++;
}

// Вивести квадрати чисел від 10 до 20.

// let square = 10;

// while (square <= 20) {
//     console.log(square * square);
//     square++;
// }

// Вивести таблицю множення на 7.

// let i = 1;
// let result;

// do {
//     result = i * 7;
//     console.log(''+i+'*7='+result+'');
//     i++
// } while (i <= 9 );

// Знайти суму всіх цілих чисел від 1 до 15.

// let sum = 0;
// for (let i = 1; i <= 15; i++) {
//     sum += i;
// }
// console.log(sum);

// Знайти добуток усіх цілих чисел від 15 до 35.

// let plural = 1;
// for (let i = 15; i <= 35; i++) {
//     plural *= i;
// }

// console.log(plural);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

// let midSum = 0;
// for (let i = 1; i <= 500; i++) {
//     midSum += i;
// }
// console.log(midSum/500);

// Вивести суму лише парних чисел в діапазоні від 30 до 80.

// let sum = 0;
// for (let i = 30; i <= 80; i++) {
//     if (i % 2 == 0) {
//         sum += i;
//     }
// }
// console.log(sum);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.

// for (let i = 100; i <= 200; i++) {
//     if (i % 3 == 0) {
//     console.log(i);
//     }
// }

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

// let i = 100;

// for (let d = 1; i > d; d++) {
//     if (i % d == 0) {
//     console.log(d);
//     }
// }

// Визначити кількість його парних дільників.

// let i = 100;
// const result = [];
// const ArrOdd = [];

// for (let d = 1; i > d; d++) {
    
//     if (i % d == 0) {
//     result.push(d);
//     }
// }

// for (let i = 0; i < result.length; i++) {
//     if(result[i]%2 === 0){
//         ArrOdd.push(result[i]);
//     } 
// }

// console.log(ArrOdd.length)


// Знайти суму його парних дільників.

// let i = 100;
// const result = [];
// const ArrOdd = [];
// let sumOdd = 0;

// for (let d = 1; i > d; d++) {
    
//     if (i % d == 0) {
//     result.push(d);
//     }
// }

// for (let i = 0; i < result.length; i++) {
//     if(result[i]%2 === 0){
//         ArrOdd.push(result[i]);
//     } 
// }

// for (let n = 0; n < ArrOdd.length; n++){
//     sumOdd += ArrOdd[n];
// }

// console.log(sumOdd);


// Надрукувати повну таблицю множення від 1 до 10.

// let resultOne;
// let resultTwo;
// let resultThree;
// let resultFour;
// let resultFive;
// let resultSix;
// let resultSeven;
// let resultEight;
// let resultNine;
// let resultTen;

// for (let i = 1; i <= 9; i++) {
//     resultOne = i * 1;
//     console.log('' + i + '*1=' + resultOne + '');
//     resultTwo = i * 2;
//     console.log('' + i + '*2=' + resultTwo + '');
//     resultThree = i * 3;
//     console.log('' + i + '*3=' + resultThree + '');
//     resultFour = i * 4;
//     console.log('' + i + '*4=' + resultFour + '');
//     resultFive = i * 5;
//     console.log('' + i + '*5=' + resultFive + '');
//     resultSix = i * 6;
//     console.log('' + i + '*6=' + resultSix + '');
//     resultSeven = i * 7;
//     console.log('' + i + '*7=' + resultSeven + '');
//     resultEight = i * 8;
//     console.log('' + i + '*8=' + resultEight + '');
//     resultNine = i * 9;
//     console.log('' + i + '*9=' + resultNine + '');
//     resultTen = i * 10;
//     console.log('' + i + '*10=' + resultTen + '');
// }



