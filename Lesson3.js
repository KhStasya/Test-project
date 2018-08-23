/*Доработать проект MOOD так, чтобы цвета не повторялись. 
Для контроля повторения цветов использовать хэш.
*/

function randomDiap(m) {
    return Math.floor(Math.random() * m ) + 1;
}

function mood(colorsCount) {
    var colors = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];
    var used = {};
    console.log('цветов: ' + colorsCount);

    for (var i = 1; i <= colorsCount;) {
        var n = randomDiap(colorsCount);
        var colorName = colors[n];
        if (colorName in used) // встречалось ли оно?
            continue;
        used[colorName] = true;
        i++;
        console.log(colorName);
    }
}

mood(5);