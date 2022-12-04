"use strict"

/* function showName() {
    console.log("Vasa");
}
setTimeout(showName, 0);

console.log("Kolya"); */

// ========================================
// Массиви в JAVASCRIPT.

// Задача 1
/* let arr = ['Vanya', 'Istvan', 'Olya',];
let newArr = arr;
newArr.push('Petya');
console.log(newArr); */


// Задача 2
/* let users = ['Vanya', 'Istvan',];

users.push('Olya');
console.log(users.indexOf('Istvan'));
users[users.indexOf('Istvan')] = 'Petya';

console.log(users.splice(0, 1));

users.splice(0, 0, 'Masha', 'Pasha')

console.log(users);  */


// Задача 3
/* let arr = ['Vanya', 'Istvan', 'Olya',];
let deleteUser = arr.splice(1, 1); */

// Задача 4
/* let str = 'Vanya, Istvan, Olya';
let arr = str.split();
console.log(arr); */

// ========================================
// DOM.

// Задача 1
/* const element = document.querySelector('[data-say-hi]');
console.log(element.dataset.sayHi); */


// Задача 2
/* const nameUser = document.querySelectorAll('.users li')[1];
console.log(nameUser); */


// Задача 3
/* const likeElements = document.querySelectorAll('.like');
console.log(likeElements); */


// Задача 4
/*  const list = document.querySelector('.users');
list.insertAdjacentHTML(
    'beforeend',
    '<li>Text</li>'
);  */


// =================================================================================
// JavaScript размеры прокрутка и координаты элементов на странице и окна браузера..

// Задача 1
/* const mainElement = document.documentElement;
const scrollWidth = window.innerWidth - mainElement.clientWidth;
console.log(scrollWidth); ширина полоси прокрутки 17px */

// Задача 2
/*  function setScrollTo() {
    window.scrollTo({
        top: 100,
        left: 0,
        behsvior: "smooth"
    });
}
setTimeout(setScrollTo, 1000); */


// Задача 3

/*  const box = document.querySelector('.scroll');
const getBoxCoords = box.getBoundingClientRect();
console.log(getBoxCoords);

const listUsers = document.querySelector('.users');
const listUsersCoordsTop = listUsers.getBoundingClientRect().top;
console.log(listUsersCoordsTop);

const listUsersDocumentCoordsTop = listUsersCoordsTop + window.pageYOffset;
console.log(listUsersDocumentCoordsTop); */

