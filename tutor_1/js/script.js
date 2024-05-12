'use strict';


alert('Hello world');
const res = confirm('Hy ar you');
console.log(res);

const answer = +prompt('Вам есть 18', '18')
console.log(answer + 78);

const arr = [5,6,8];
arr[0] = prompt('Как ваше имя');
arr[1] = +prompt('Сколько вам лет', 18);
arr[2] = prompt('Ты М или Ж');


for (let i = 0; i <arr.length ; i++) {
    console.log(arr[i]);
}

document.write(arr);