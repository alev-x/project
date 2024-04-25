"use strict";

//007 простое общение с пользователем

//Предупреждение 
//alert("Hello");

//Вопрос с ответом да или нет
/*const result = confirm("Are you here?");
console.log(result);*/

//Вопрос с ответом, которое пользователь вводить самостоятельно
/*const answer = prompt ("Вам есть 18+?", "18");
console.log(answer);*/

//Массив с ответами от пользователя
/*
const answers = [];

answers[0] = prompt('Как Ваше имя?', '');
answers[1] = prompt('Как Ваша фамилия?', '');
answers[2] = prompt('Сколько Вам лет?', '');

document.write(answers);
*/

//008 Интерполяция (соединение строк)
/*
const user = "Alex";
alert(`Привет, ${user}`);
*/

//009 Операторы
/*
let incr = 10,
	decr = 10;

//инкремент увеличение на 1
incr++;
//декремент уменьшение на 1
decr--;

console.log(incr);
console.log(decr);
*/

//013 Условия
/*if (4 == 9) {
	console.log("Ok");
} else {
	console.log("Not OK");
}*/

/*const num = 50;

(num === 50) ? console.log("Ok") : console.log("Not OK"); //тернарный оператор
*/

/*
const num = 50;

switch (num) {
	case 49: 
		console.log("Not OK");
		break;
	case 100:
		console.log("Not OK");
		break;
	case 50:
		console.log("Ok");
		break;
	default:
		console.log("Not at this time");
		break;
}
*/


//014 циклы
//let num = 50;

/*while (num < 55) {
	console.log(num);
	num++;
}*/

/*do {
	console.log(num);
	num++;
}
while (num < 55);*/

/*for (let i = 0; i < 8; i++) {

	if (i === 2) {
		//break; //завершение цикла
		continue; //позволяет перепрыгнуть шаг и выполнятся дальше 
	}
	console.log(i);
}
*/
//функции
/*
function showFirstMessage(text) {
	console.log(text);

};

showFirstMessage("Hello, world");

function calc (a, b) {
	return (a + b);
}
console.log (calc (2, 4));

function ret() {
	let num = 50;
	return num;
}
let anotherNum = ret();
console.log(anotherNum);


const logger = function () {
	console.log("Hello world")
};
logger();
*/

//методы и свойства
/*
const str = "teSt";

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";
//Выдает номер символа с которого начинается слово fruit
console.log(fruit.indexOf("fruit"));

const logg = "Hello, world!";
console.log(logg.slice(7, 12));
console.log(logg.substring(7, 12));
console.log(logg.substr(7, 12));
*/

//практика

let numberOfFilms;

function start () {
	numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilm () {
	for (let i = 0; i < 2; i++) {
	const a = prompt("Один из последних просмотренных фильмов", ""),
		  b = prompt("На сколько Вы его оцените", "");


	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('Done');
		} else {
			console.log('Error');
			i--;
		}
	}	
}

rememberMyFilm();

function detectPersonalLevel () {
	if (personalMovieDB.count < 10) {
	console.log("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("Вы класический зритель");
	} else if (personalMovieDB.count >= 30) {
		console.log("Вы киноман!");
	} else {
		console.log("ERROR!");
	}

}

detectPersonalLevel();

function showMyDB (hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB);

function writeYourGenres () {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
}

writeYourGenres();

/*
//альтернативный вариант цикла
let i = 0;
while (i < 2) {
	const a = prompt("Один из последних просмотренных фильмов", ""),
		  b = prompt("На сколько Вы его оцените", "");

	i++;
	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('Done');
	} else {
		console.log('Error');
		i--;
	}
}*/

/*
//альтернативный вариант цикла
let i = 0;
do {
	const a = prompt("Один из последних просмотренных фильмов", ""),
		  b = prompt("На сколько Вы его оцените", "");

	i++;
	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('Done');
	} else {
		console.log('Error');
		i--;
	}
}
while (i < 2);
*/






















