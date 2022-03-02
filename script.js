/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


// 1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
// перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
// Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
// 
// 2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
// переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
// 
// 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
// Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
// при помощи метода forEach вывести в консоль сообщения в таком виде:
// "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/



'use strict';

let numberOfFilms;


// start();


const personelMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personelMovieDB.count = prompt('How many films do you watching', '');

        while(personelMovieDB.count == '' || personelMovieDB.count == null || isNaN(personelMovieDB.count)) {
        personelMovieDB.count = prompt('How many films do you watching', '');
    }
    },
    writeYourGenres: function(){
        for(let i = 1; i <= 3; i++){
            personelMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
            while(personelMovieDB.genres === '' || personelMovieDB.genres === null) {
                personelMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
            }
        }


        //здесяяяяяя
    },
    showMyBD: function(){
        if(personelMovieDB.privat == false){
            console.log(personelMovieDB);
        } 
    },
    toggleVisibleMyDB: function(){
        if(personelMovieDB.privat) {
            personelMovieDB.privat = false;
        } else {
            personelMovieDB.privat = true;
        }
    }

}

personelMovieDB.toggleVisibleMyDB();
personelMovieDB.showMyBD();