// let userInfo = {
//     name: 'Вася',
//     age: 30,
//     "58": 'Значение свойства',
// }

// console.log(userInfo[58]);


let userInfo = {
    name: 'Вася',
    age: 30,
}

let user = userInfo;
user.age = 45;
console.log(userInfo.age)