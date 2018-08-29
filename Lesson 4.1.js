/*Переписать ДЗ B (подсчёт гласных букв в строке) без использования циклов, двумя способами:
с использованием метода массива forEach,  - done at homework 2
с использованием метода массива filter,
*/


do {
    var userString = prompt('Type some text');
} while (userString === "" || userString === null || !isNaN(userString));

var arrayString = userString.split('');
var letters = {
    'а': true,
    'е': true,
    'ё': true,
    'и': true,
    'о': true,
    'у': true,
    'ы': true,
    'э': true,
    'ю': true,
    'я': true
};

let newArrLetters = arrayString.filter(function (element) {
    if (element in letters) {
        return true;
    }
    return false;
}).length;

console.log(newArrLetters);

//с использованием метода массива reduce.

do {
    var userString = prompt('Type some text');
} while (userString === "" || userString === null || !isNaN(userString));

var arrayString = userString.split('');
var letters = {
    'а': true,
    'е': true,
    'ё': true,
    'и': true,
    'о': true,
    'у': true,
    'ы': true,
    'э': true,
    'ю': true,
    'я': true
};

var countLetters = arrayString.reduce(function (count, element) {
    if (element in letters) {
         count++;
    }
    return count;
},0);

console.log(countLetters);