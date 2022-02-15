// let num = 5;
// alert(num);


// let a = 10;
// let b = 2;
// alert(a+b)
// alert(a-b)
// alert(a*b)
// alert(a/b)

// let c = 15
// let d = 2;
// let result = c +d;
// alert(result);

// let a = 10 
// let b =2 ;
// let c = 5;
// alert(a+b+c)

// let str = "Привет Мир!";
// alert(str)

// let str1 = "Привет";
// let str2 = "Мир";
// alert(str1+" "+str2);

// var name = prompt('How old are you?');
// alert('You are '+ name +' years old');

// var age = 20;
// alert('Мне ' + age +' лет');

// var num = prompt('Введи число и я его возведу в корень?')
// alert(num + ' в квардрате это ' + num*num)


// var str = 'abcde';
// alert(str[0]+str[2]+str[4])

// var num = 47;
// num +=  7;
// num -= 18;
// num *= 10;
// num /= 15;
// alert(num);

// var num = 10;
// num = ++num;
// num = ++num;
// num = --num;
// alert(num);


// Работа с массивами


// var arr = ['Привет, ', 'мир', '!'];
// arr[0] = 'Пока, '; //перезапишем нулевой элемент массива
// alert(arr); //посмотрим на массив и убедимся в том, что он изменился

// var arr = ['a', 'b', 'c', 'd'];
// alert(arr[0]+'+'+ arr[1]+','+arr[2]+'+'+arr[3]);

// var obj = {a: 1, b: 2, c: 3};
// alert(obj.c);

// var arr = {
// 	'ru':['голубой', 'красный', 'зеленый'],
// 	'en':['blue', 'red', 'green'],
// };
// alert(arr['ru'][0])


// let arr = {1: 'понедельник', 2: 'вторник', 3: 'среда', 4: 'четверг' }
// alert(arr[1]);

// var obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
// alert(obj[1]); //выведет 'пн'

// let obj = { 1:'mon', 2:'tue', 3:'wed'}
// let day = 3;
// alert('Now ' + obj[day])


// let obj = {js:['jQuery', 'Angular'], 
//           php: 'hello', css: 'world'}
// alert(obj.js[0])


// let a = 1;
// if (a === 1) alert('True'); else alert ('False') ;

// let a = -4;
// if (a>0 && a<5) alert('True'); else alert('False');


// let a = 0;
// if(a==0 || a==2) alert(a + 7); else alert(a/10);


// let num = 4;
// switch (num) {
//     case 1:
//         alert("winter")
//         break;
//     case 2:
//         alert("spring")
//         break;
//     case 3:
//         console.log("summer")
//         break;
//     case 4:
//         let num = prompt ("what is your name?")
//         alert(num + " is goof!!!! XAXA")
//         break;

//     default:
//         break;
// }


// let mounth = 2;
// switch (mounth) {
//     case 1:
//     case 2:
//     case 12:
//         alert("winter")
//         break;
//     case 3:
//     case 4:
//     case 5:
//         alert("spring")
//         break;
//     case 6:
//     case 7:
//     case 8:
//         alert("summer")
//         break;
//     case 9:
//     case 10:
//     case 11:
//         alert("winter")
//         break;
//     default:
//         alert("write number from 1 to 12")
//         break;
// }

// let str = "abcde"
// if (str[0]=='a') alert("yes"); else alert("no");  


// let str = "123456"
// let num1 = str[0]+str[1]+str[2];
// let num2 = str[3]+str[4]+str[5];
// if (num1 == num2) alert('yes'); else alert ('No');

// var arr = [1, 2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
// 	if (arr[i] === 3) {
// 		break; //выходим из цикла
// 	} else {
// 		alert(arr[i]);
// 	}
// }

// let i = 1;
// while (i <= 50) {
//     console.log(i)
//     i++;
// }

// for (var i=1; i<=100; i++){
//     console.log(i)
// }

// for (var i = 1; i <= 50; i++) {
// 	document.write(i + '<br>');
// }

// let arr = [1,2,3,4,5];
// for (let i = 0; i < arr.length; i++) {
//     document.write (arr[i] + "<br>");
    
// }



// let obj = {
//     'minsk':'Belarus',
//     'Moscow':'Russian',
//     'Kieu':'Ukraine'
// }

// for (let key in obj){
//     console.log(obj[key] + ' - это ' + key)
// }




//задачи while and for

//1

// let i = 1;
// while (i<=100){
//     console.log(i);
//     i++;
// }

// for (i=1; i<=50; i++){
//     console.log(i)
// }

//2 
// var i = 11;
// while (i <= 33){
//     console.log(i);
//     i++;
// }

// for (i=11; i<=33; i++) {
//     console.log(i);
// }

//4
// let i = 0;
// let result = 0;
// while (i <= 100) {
// result = result + i;
// console.log(result);
// i++;
// }

// let result = 0;
// for (i=0; i<=100; i++){
//    result = result + i;
   
// }
// console.log(result)

//5
// let arr = [1,2,3,4,5,9];
// for (i=0; i<=arr.length-1; i++) {
//    console.log(arr[i])
// }

//6 
// let arr = [1,2,3,4,5];
// let result = 0;
// for (i=0; i<=arr.length-1; i++) {
//    result = result + arr[i];
//    console.log(result)
// }

//7
// let arr = {
//    green: 'зеленый',
//    red: 'красный',
//    blue: 'голубой',
// }

// for (let key in arr){
//    console.log(key + ' ' + arr[key])
// }

//8
// let obj = {
//    Kolya : '200',
//    Vasya: '300',
//    Petya: '400'
// }

// for (let key in obj){
//    console.log(key + '-salery is ' + obj[key] + ' dollars.')
// }

//9
// let arr = [2,5,9,15,0,4];
// for (i=0; i<=arr.length; i++) {
//    if (arr[i]>3 && arr[i]<10) {
//       console.log(arr[i]);
//    } else {
      
//    }
// }

//10
// let arr = [1,2,3,4,-4,-4,7,8,9,12,3,4,6,7,8-1,-5,-5];
// let result = 0;
// for (i=0; i<=arr.length; i++) {
//    if (arr[i]>0) {
//       result = result + arr[i];
//       console.log(result);

//    } else {}
// }


//11
// let arr = [1,2,3,5,6,7,8];
// for (i=0; i<=arr.length; i++) {
//    if(arr[i]==4){
//       console.log('Есть!');
//       break;
//    } else {
      
//    }
// }

//12 
// let arr = [23,50,44,5,66,7,88,10,13,235,300,10];
// for (i=0; i<=arr.length-1; i++){
//    console.log(arr[i])

// }


//ЗАДАЧИ НА МАТЕМАТИЧЕСКИЕ ФУНКЦИИ 
//1
// let a = 10,
// b = 3;
// console.log(a%b);

//2
// let a = 10,
// b = 30;
// c = a%b;
// if (c==0) {
//     alert ('share');
// }else {
//     alert ('делится с остатком ' + c)
// }

//3
// let a = '12';
// let b = 10;
// console.log(a*b);
// let a = 6;
// let b = 6;

// ЗАДАЧИ НА ФУНКЦИИ РАБОТЫ СО СТРОКАМИ В JAVASCRIPT


// task 1
// let str = 'aaa@@@bb@ccc';
// let str2 = str.replace(/@/g, '!');
// console.log(str2)

// task 2
// let str = 'aaa bbb ccc';
// console.log(str.slice(4,7));

//task 3 
// let date = '2025-12-31';
// console.log(date.replace(/-/g, '/'));


