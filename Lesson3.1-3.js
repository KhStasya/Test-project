/*1.
Разработать класс HashStorage (в файле HashStorage.js) для хранения в хэше произвольных пар ключ-значение.
Ключ может быть любой строкой; значение может иметь любой тип, в том числе векторный (хэш, массив и т.д.)
Класс должен иметь следующий интерфейс (т.е. иметь следующие публичные методы):
addValue(key,value) — сохраняет указанное значение под указанным ключом;
getValue(key) — возвращает значение по указанному ключу либо undefined;
deleteValue(key) — удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище;
getKeys() — возвращает массив, состоящий из одних ключей.
Класс не должен использовать никаких глобальных переменных, не должен «пачкать экран».
Класс должен быть универсальным, т.е. не зависеть ни от структуры хранимых данных, ни от способа их последующего использования
 (в т.ч. не должен содержать никаких ссылок на DOM, т.к. может использоваться и вообще без веб-страницы).*/


function HashStorage() {
    this.hashObj = {};
    this.addValue = function (key, value) {
        this.hashObj[key] = value;
    };
    this.getValue = function (key) {
        return this.hashObj[key];
    }
    this.deleteValue = function (key) {
        if (key in this.hashObj) {
            delete this.hashObj[key];
            return true;
        } else {
            return false;
        }
    }
    this.getKeys = function () {
        var arrKey = [];
        for (let i in this.hashObj) {
            arrKey.push(i);
        }
        return arrKey;
    }

}
/*Создать объект drinkStorage класса HashStorage для хранения рецептов напитков.
Ключом является название напитка; 
значением — информация о напитке (алкогольный напиток или нет, строка с рецептом приготовления и т.д. по желанию).
*/
var drinkStorage = new HashStorage();

function insertDrink() {
    let drinkName = prompt('Set drink name');
    let drinkInfo = {};

    if (drinkName == null) {
        alert('Data wasn\'t inserted');
    } else if (drinkName == '') {
        alert('Data can not be empty');
    } else {
        drinkInfo.isAlcohol = confirm('Does this drink contain alcohol?') ? true : false;
        drinkInfo.recipe = prompt('Insert recipe');
        if (drinkInfo.recipe == null) {
            alert('Data wasn\'t inserted');
        } else if (drinkInfo.recipe == '') {
            alert('Data can not be empty');
        } else {
            drinkStorage.addValue(drinkName, drinkInfo);
        }

    }
}

function getDrink() {
    let drinkName = prompt('Type name of a drink');
    if (drinkName == null) {
        alert('Data wasn\'t inserted');
    } else if (drinkName == '') {
        alert('Data can not be empty');
    } else {
        let drinkInfo = drinkStorage.getValue(drinkName);
        alert(
            `Name: "${drinkName}"
     Has alcohol: "${drinkInfo.isAlcohol}" 
     Recipe: "${drinkInfo.recipe}"`);
    }
}

function deleteDrink() {
    let drinkName = prompt('Type name of a drink to delete it');
    if (drinkName == null) {
        alert('Data wasn\'t inserted');
    } else if (drinkName == '') {
        alert('Data can not be empty');
    } else {
        drinkStorage.deleteValue(drinkName);
        alert(`Name: "${drinkName}" was deleted`);
    }
}

function getDrinkProperties() {
    let drinkName = prompt('Type name of a drink to see properties');
    if (drinkName == null) {
        alert('Data wasn\'t inserted');
    } else if (drinkName == '') {
        alert('Data can not be empty');
    } else {
        var drinkOrops= drinkStorage.getKeys(drinkName);
        alert(`Your drink has the next properties: 
        "${drinkOrops}" `);
    }
}
insertDrink();
getDrink();
deleteDrink();
getDrinkProperties();