/* Задача 1: Написать «чистую» («молчаливую») функцию для эффективного подсчёта количества русских гласных букв в строке. 
Спросить у пользователя строку. Вывести в консоль количество русских гласных букв в ней. */

do {
    var userString = prompt('Type some text');
} while (userString === "" || userString === null || !isNaN(userString));

var arrayString = userString.split('');
var count = 0;
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

arrayString.forEach(function (element) {
    if (letters[element] == true) {
        count++;
    }
});

console.log(count);


/* Задача 2: Создать массив из нечетных чисел от 1 до 100. Найдите сумму всех получившихся элементов. 
Инвертируйте (то есть поменяйте местами первый элемент с последним, второй — с предпоследним и т.д.) и выведите получившийся массив. */

function createArray() {
    var arrOddNumbers = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 2 != 0) {
            arrOddNumbers.push(i);
        }
    }
    return arrOddNumbers;
}

var arrOddNumbersResult = createArray();
function sumArrayNumbers(value) {
    let sum = 0;
    for (let i = 0; i < value.length; i++) {

        sum += value[i];
    }
    return sum;
}
var summArrayNumbers = sumArrayNumbers(arrOddNumbersResult);

function changeArrayValues(value) {
    var arrOddNumbers2 = []
    for (let i = value[value.length - 1]; i >= 0; i--) {
        if (i % 2 != 0) {
            arrOddNumbers2.push(i);
        }
    }
    return arrOddNumbers2;
}

var changedArrayNumbers = changeArrayValues(arrOddNumbersResult);

console.log(arrOddNumbersResult);
console.log(summArrayNumbers);
console.log(changedArrayNumbers);

/* Задача 3: Напишите программу, которая определяет, является ли введенная фраза (число) палиндромом. 
Палиндром — эта фраза (число), инвертирование которой не изменяет ее. При этом все пробелы во фразе игнорируются. */

/* Задача 4: Имеется массив следующего вида:

Необходимо:
а) определить имя самого высокого ребенка,
б) определить имя самого старшего ребенка,
в) определить имя самого тяжелого ребенка
г) посчитать суммарный вес детей. */

var children = [
	{
		name: 'Ваня',
		age: 12,
		weight: 46,
		height: 167
	},
	{
		name: 'Петя',
		age: 13,
		weight: 48,
		height: 162
	},
	{
		name: 'Маша',
		age: 11,
		weight: 40,
		height: 158
	},
	{
		name: 'Марина',
		age: 14,
		weight: 43,
		height: 164
	}
];
var arrayHeight=[];
arrayHeight = children.filter(function(elem) {
    return elem.height;
})

//Что-то не фильтрует по параметру. Подскажите, что не так?