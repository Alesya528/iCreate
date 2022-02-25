/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания
let numberOfFilms;

function start(){
    numberOfFilms = prompt('How many films do you watching', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('How many films do you watching', '');
    }

}

// start();


const personelMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

function showMyBD (hidden){
    if(personelMovieDB.privat == false){
        console.log(personelMovieDB);
    } 
}

showMyBD(personelMovieDB.privat);




function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        personelMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`) ;;
    }
}

writeYourGenres();
