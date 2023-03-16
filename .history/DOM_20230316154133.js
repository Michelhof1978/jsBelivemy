let h = document.getElementsByTagName('h1')[0];
h1.textContent = "Hello World !";
h1.innerHTML = "<div style='font-weight: normal'>Hello World !</div>";

console.log(h1);
---------------------------------------------------------------------------------------------
let header    = document.getElementsByTagName('header'); 
let logo      = document.getElementById('logo');
let container = document.getElementsByClassName('container');
let h1        = document.querySelector('h1');
let p         = document.querySelectorAll('p');

console.log(header);
console.log(logo);
console.log(container);
console.log(h1);
console.log(p);