let h = document.getElementsByTagName('h1')[0];
h1.textContent = "Hello World !";
h1.innerHTML = "<div style='font-weight: normal'>Hello World !</div>";

console.log(h1);
---------------------------------------------------------------------------------------------
let header    = document.getElementsByTagName('header'); //Selection par balise
let logo      = document.getElementById('logo');//Selection par Id, ne pas mettre de S à element comme id unique
let container = document.getElementsByClassName('container'); //Selection par class
let h1        = document.querySelector('h1');//regroupe les 3 ci-dessus mais il ne faudra pas oublié en préfixe le . ou # pour la classe
let p         = document.querySelectorAll('p');

console.log(header);
console.log(logo);
console.log(container);
console.log(h1);
console.log(p);