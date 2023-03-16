
---------------------------------------------------------------------------------------------
SELECTIONNER UN ELEMENT DU DOM

let header    = document.getElementsByTagName('header'); //Selection par balise
let logo      = document.getElementById('logo');//Selection par Id, ne pas mettre de S à element comme id unique
let container = document.getElementsByClassName('container'); //Selection par class
let h1        = document.querySelector('h1');//regroupe les 3 ci-dessus mais il ne faudra pas oublié en préfixe le . ou # pour la class
let p         = document.querySelectorAll('p');//Si on veut selectionner plusieurs élément en même temps

console.log(header);
console.log(logo);
console.log(container);
console.log(h1);
console.log(p);
--------------------------------------------------------------------------------------------------------let h = document.getElementsByTagName('h1')[0];


MODIFIER UN ELEMENT DU DOM
let h1 = document.getElementsByTagName('h1')[0];//[0] Comme nous selectiontous les élément h1 et si nous devons cibler un seul 
h1.textContent = "Hello World !";
h1.innerHTML = "<div style='font-weight: normal'>Hello World !</div>";


console.log(h1);
-----------------------------------------------------------------------------------------------------------
AJOUTER UN ELEMENT BRUT (uniquement en chaîne de caractères)
// 1ère méthode : Ecrit juste un texte
document.write('test');

// 2ème méthode : Ajouter un élément brut
let h1 = document.querySelector('h1');
h1.append('test');

// 3ème méthode (celle pour les objets)
// Créer un élément
let helloWorld = document.createElement('div');

// Le personnaliser
helloWorld.textContent = "Hello World !";

// L'ajouter à notre page
// document.body.append(helloWorld); (après)
// document.body.appendChild(helloWorld); (après)

// document.body.insertBefore(helloWorld, document.querySelector('.container')); //Pour passer notre élément hello word avant notr 

document.querySelector('.container').prepend(helloWorld);
---------------------------------------------------------------------------------------
