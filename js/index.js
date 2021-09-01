// Your code goes here
const buttons = document.querySelector('.btn');
const nav = document.querySelector('.nav');
const navs = nav.querySelector('.nav-link');

navs.addEventListener('onclick', e => {
    console.log(e);
    }
);

console.log('apples');