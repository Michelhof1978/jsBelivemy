
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

// document.body.insertBefore(helloWorld, document.querySelector('.container')); //Pour passer notre élément hello word avant notre élément Container

document.querySelector('.container').prepend(helloWorld);//Ajouter avant (prepend) container hello word
---------------------------------------------------------------------------------------
SUPPRIMER UN ELEMENT DU DOM
// let h1 = document.querySelector('h1');
// h1.remove();

document.querySelector('h1').remove();
---------------------------------------------------------------------------------------------------------
                                     STYLE
// 1ère méthode : décomposée
let header = document.querySelector('header');
header.style.backgroundColor = '#ffbd69';

// 2ème méthode : directe
document.querySelector('h1').style.color = '#111d5e';
document.querySelector('h1').style.textAlign = 'center';

// 3ème méthode : avec une classe
document.querySelector('header').className = "ma_class";//Changement de la class
----------------------------------------------------------------------------------------------------
STYLE
Voici une fiche technique résumant l'ensemble des fonctions et propriétés principales liées au DOM.

Accéder aux éléments
getElementsByTagName() - Sélectionne tous les éléments avec la balise entre parenthèses

getElementById() - Sélectionne un seul élément : le premier ayant l'ID entre parenthèses

getElementsByClassName() - Sélectionne tous les éléments avec la classe entre parenthèses

querySelector() - Sélectionne un seul élément : celui avec le sélecteur entre parenthèses

querySelectorAll() - Sélectionne tous les éléments avec le sélecteur entre parenthèses



Modifier les éléments
textContent - Modifie le texte d'un élément

innerHTML - Modifie l'HTML d'un élément



Ajouter et supprimer des éléments
createElement() - Crée un élément

prepend() - Ajoute l'élément entre parenthèses devant l'élément cible

append() - Ajouter l'élément entre parenthèses derrière l'élément cible (peut contenir du texte)

appendChild() - Ajouter l'élément entre parenthèses derrière l'élément cible (ne peut pas contenir du texte)

insertBefore() - Insère un élément avant l'élément cible



Modifier le style d'un élément
style.propriété - Modifie la propriété CSS spécifiée, par exemple : style.color = "orange"

className - Modifie les classes d'un élément 
-----------------------------------------------------------------------------------------------------------------
EXERCICE

<div id="a-supprimer" class="alert alert-danger m-4">Ceci est un élément à supprimer grâce à JavaScript.</div>
document.querySelector('#a-supprimer').remove();

// Créer les éléments
let header = document.createElement('header');
let menu   = document.createElement('div');
let p      = document.createElement('p');

// Les personnaliser
header.textContent = "Bienvenue";
header.style.backgroundColor = "#e3b04b";
header.style.color = "white";
header.style.padding = "30px";
header.style.fontSize = "3em";
header.style.textAlign = "center";

menu.innerHTML = "<a href='#'>Accueil</a> / <a href='#'>Une autre page</a>";
menu.style.backgroundColor = "#f1d6ab";
menu.style.padding = "15px";

p.textContent = "Ceci est un paragraphe créé avec JavaScript !";
p.style.margin = "15px";

// Les ajouter
document.body.append(header, menu, p);
---------------------------------------------------------------------------------------------------------------------
                                       EVENEMENTS
     LES ECOUTEURS                                   
// Méthode la plus ancienne
// Déconseillé car vieillissante
// On insère un attribut HTML lié à l'évènement qu'on veut capturer
// onClick, onMouseOver, onMouseOut
<a onclick="return confirm('Etes-vous sûr de vouloir supprimer cet article ?')" href="https://believemy.com">Supprimer cet article</a>

<button onmouseover="document.body.style.backgroundColor='orange'"
        onmouseout="document.body.style.backgroundColor='white'">Passez au-dessus de moi</button>
                                     ------------------
// Méthode la plus récente
 let a = document.querySelector('a');
 let button = document.querySelector('button');
                                                
 let a = document.querySelector('a');
let button = document.querySelector('button');

// a.onclick = function(){
//   if(confirm('Etes-vous sûr ?')) {
//     location.href="https://believemy.com"
//   }
// }

a.onclick = () => {
  if(confirm('Etes-vous sûr ?')) {
    location.href="https://believemy.com"
  }
}

button.onmouseover = () => {
  document.body.style.backgroundColor = 'orange';
}

button.onmouseout = () => {
  document.body.style.backgroundColor = 'white';
}  
-----------------------------------------------------------------------------------------------------
LES ECOUTEURS VIA PROPRIETE JS

<a href="#">Supprimer cet article</a>
<button>Passez au-dessus de moi</button> 

let a = document.querySelector('a');
let button = document.querySelector('button');

a.addEventListener('click', (e) => {
  if(confirm('Etes-vous sûr ?')) {
    location.href = "https://believemy.com";
  }
});

button.addEventListener('mouseover', () => {
  document.body.style.backgroundColor = 'orange';
});

function backgroundWhite() {
  document.body.style.backgroundColor = 'white';
}

button.addEventListener('mouseout', backgroundWhite);
button.addEventListener('mouseout', () => {
  document.body.style.fontFamily = 'arial';
});

button.removeEventListener('mouseout', backgroundWhite);
------------------------------------------------------------------------------------------------