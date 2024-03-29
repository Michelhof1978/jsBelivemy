
//Créer un tableau simple, 3 façons de déclarer un tableau
let monTableau = new Array('un', 'deux', 'trois');
let monTableau = Array('un', 'deux', 'trois');
let monTableau = ['un', 'deux', 'trois'];//Faire de prèférence celui-ci
-------------------------------------------------------------
//Tableaux plusieurs dimensions
let monTableau = new Array('un', 'deux', 'trois');
let monTableau = Array('un', 'deux', 'trois');
let monTableau = ['un', 'deux', 'trois'];

// Ancienne version
let monTableau2D = new Array(
    Array('Mark', 'Jeff', 'Bill'),
    Array('Zuckerberg', 'Bezos', 'Gates')  
);

// Nouvelle version
let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
----------------------------------------------------------------
//tableaux associatifs
let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom'    : 'Zuckerberg',
    'poste'  : 'PDG de Facebook'
};
-------------------------------------------------------------
//Accéder aux éléments du tableaux
// let monTableau = new Array('un', 'deux', 'trois');
// let monTableau = Array('un', 'deux', 'trois');
let monTableau = ['un', 'deux', 'trois', 'quatre'];

// console.log(monTableau[0])
console.log(monTableau[monTableau.length - 1]);

// let monTableau2D = new Array(
//     Array('Mark', 'Jeff', 'Bill'),
//     Array('Zuckerberg', 'Bezos', 'Gates')  
// );

let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];

console.log(monTableau2D[1][2]);

let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom'    : 'Zuckerberg',
    'poste'  : 'PDG de Facebook'
};

console.log(monTableauAssociatif['poste']);
-----------------------------------------------------------
//Ajouter un élément
let monTableau = ['un', 'deux', 'trois', 'quatre'];
monTableau.push('cinq');
monTableau.unshift('zero');
// console.log(monTableau);

let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
monTableau2D[1].unshift('test');
// console.log(monTableau2D);

let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom'    : 'Zuckerberg',
    'poste'  : 'PDG de Facebook'
};
monTableauAssociatif['nationalite'] = 'Américaine';
console.log(monTableauAssociatif);
-------------------------------------------------------
//Retirer un élément
let monTableau = ['un', 'deux', 'trois', 'quatre'];
monTableau.pop(); // supprime le dernier élément
monTableau.shift(); // supprime le premier élément
// console.log(monTableau);

let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
monTableau2D[0].shift(); // supprime le premier élément, de mon premier élément (donc, Mark)
// console.log(monTableau2D);

let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom'    : 'Zuckerberg',
    'poste'  : 'PDG de Facebook'
};
delete(monTableauAssociatif.poste);
// console.log(monTableauAssociatif);
------------------------------------------------------------------
//Retrouver un index depuis une valeur dans un tableau simple
let monTableau = ['un', 'deux', 'trois', 'quatre'];
console.log(monTableau.indexOf('deux')); // retourne 1
----------------------------------------------------------------------
//Concatener un tableau
let monTableau = ['un', 'deux', 'trois', 'quatre'];
// console.log(monTableau.join(' / '));

let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
console.log(monTableau2D.join(' / '));
-------------------------------------------------------------------
//Fonction Splice (pour ajouter un élément suivant l'index choisi)

let monTableau = ['un', 'deux', 'trois', 'quatre'];
monTableau.splice(1, 0, 'random', 'pie');
// console.log(monTableau);

let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
monTableau2D.splice(2, 0, ['30', '45', '70']);
console.log(monTableau2D);

let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom'    : 'Zuckerberg',
    'poste'  : 'PDG de Facebook'
};
// console.log(monTableauAssociatif);
--------------------------------------------------
//Boucle FOR---IN = Renvoi ds sa variable l index de lélément du mon tableau
// La boucle "for...in" en JavaScript permet de parcourir les propriétés d'un objet. La syntaxe de la boucle "for...in" est la suivante :


for (variable in objet) {// POUR PARCOURIR UNE BOUCLE SUR DES OBJETS, C 'EST FOR
  // instructions à exécuter
}


// Dans cette syntaxe, la variable est une variable qui va contenir les clés (ou propriétés) de l'objet, une par une, à chaque itération de la boucle. L'objet est l'objet que l'on souhaite parcourir.

// À chaque itération de la boucle, la variable prendra la valeur de la prochaine clé de l'objet. On peut ensuite utiliser cette clé pour accéder à la valeur correspondante dans l'objet.

// Voici un exemple d'utilisation de la boucle "for...in" pour parcourir les propriétés d'un objet :

const voiture = {marque: "Renault", modele: "Clio", annee: 2020};

for (const prop in voiture) {
  console.log(`${prop}: ${voiture[prop]}`);
}

// Dans cet exemple, la boucle "for...in" va parcourir les propriétés de l'objet "voiture" (marque, modele, annee), une par une, à chaque itération. À chaque itération, la variable "prop" va prendre la valeur de la prochaine propriété de l'objet.

// À l'intérieur de la boucle, on utilise la variable "prop" pour accéder à la valeur correspondante dans l'objet "voiture". On utilise la syntaxe des crochets pour accéder à la valeur correspondante : "voiture[prop]".

// Le code ci-dessus affichera le résultat suivant dans la console :

marque: Renault
modele: Clio
annee: 2020


let panier = ['fraise', 'banane', 'poire'];

for (const fruit in panier) {
    console.log(panier[fruit]);
}
--------------------------------------------------------------------------------------------
//BOUCLE FOR---OF = Renvoi ds la varible la valeur de l élément LE PLUS UTILISE QUE FOR IN
// La boucle "for of" est une fonctionnalité de JavaScript introduite dans la version ES6 (ECMAScript 2015) qui permet d'itérer sur les éléments d'une collection de données, tels qu'un tableau ou une chaîne de caractères.

// Elle utilise une syntaxe simplifiée par rapport à la boucle "for" traditionnelle et permet d'accéder à chaque élément de la collection en utilisant une variable déclarée à l'intérieur de la boucle.

// Voici un exemple de boucle "for of" utilisée pour itérer sur les éléments d'un tableau :


let fruits = ["pomme", "banane", "orange"];

for (let fruit of fruits) {
  console.log(fruit);
}
// Dans cet exemple, la variable "fruit" est déclarée pour représenter chaque élément du tableau "fruits". À chaque itération de la boucle, la variable "fruit" prend la valeur de l'élément en cours d'itération, qui est ensuite affiché dans la console.

// La boucle "for of" peut également être utilisée pour itérer sur les caractères d'une chaîne de caractères, par exemple :


let chaine = "Bonjour le monde";

for (let caractere of chaine) {
  console.log(caractere);
}
// Dans cet exemple, la boucle "for of" itère sur chaque caractère de la chaîne de caractères "chaine" et l'affiche dans la console.

// En résumé, la boucle "for of" est une manière simple et efficace d'itérer sur les éléments d'une collection de données en JavaScript.
let panier = ['fraise', 'banane', 'poire'];

for (const fruit of panier) {
  // console.log(fruit);
  console.log(panier.indexOf(fruit));
}
--------------------------------------------------------------------------------------------------------
//Boucle Foreach = est une fonction anononyme et  va permettre d utiliser les fonctions anonymes
let listeDePays = ['France', 'Belgique', 'Japon', 'Maroc'];

// for (const pays of listeDePays) {
//     console.log(pays);
// }

// listeDePays.forEach(function(pays){
//     console.log(pays);
// });

listeDePays.forEach(pays => console.log(pays));//Fonction fléclée
--------------------------------------------------------------------------------------------------------
//Concaténer un tableau associatif = il faut utiliser une boucle FOR OF ou FOR IN
let monTableauAssociatif = {
    'prenom'    : 'Mark',
    'nom'       : 'Zuckerberg',
    'poste'     : 'PDG de Facebook'
};

function concatener(tableau) {
    let chaine = '';

    for (const valeur in tableau) {//Toutes les valeurs (prénom, nom, poste) sont passées ds mon tableau
        
        chaine += (valeur + ' : ' + tableau[valeur] + '\n');

    }

    console.log(chaine);
}

concatener(monTableauAssociatif);
--------------------------------------------------------------------------------------------------------

// Voici un résumé des principales fonctionnalités liées aux tableaux, que nous avons vu jusqu'à présent.

// Pour ces exemples, nous prendrons en compte le fait que nous avons ce tableau :

let fruits = ['pomme', 'banane', 'poire', 'fraise']

//Ainsi, voici les principales fonctionnalités :

fruits.length : retourne le nombre d'éléments dans le tableau (ici retourne 4)

fruits[0] : sélectionne le premier élément

fruits[length - 1] : sélectionne le dernier élément

fruits.push('pamplemousse') : ajoute un élément à la fin du tableau

fruits.unshift('pamplemousse') : ajoute un élément au début du tableau

fruits.pop() : supprime le dernier élément

fruits.shift() : supprime le premier élément

fruits.indexOf('banane') : retourne l'index d'un élément

fruits.join() : concatène les éléments dans une chaîne de caractères avec virgules, mais il est possible de spécifier un autre séparateur dans les paranthèses

fruits.slice() : crée une copie du tableau (à associer à une autre variable donc)

fruits.splice([début], [nbASupprimer], [élément(s)]) : retire, remplace ou ajoute des éléments.

// Début : l'index à partir duquel commencer le changement, si négatif, part de la fin du tableau

// nbASupprimer : un entier indiquant le nombre d'éléments à retirer ou remplacer

// Element(s) : les éléments à ajouter à partir du début précisé. Si aucun élément n'est spécifié, alors n'en ajoutera pas.
------------------------------------------------------------------------------------------------------------
// Fusionner des tableaux
// Exemple 1 : fusionner plusieurs tableaux
let fruits = ['fraise', 'banane', 'poire'];
let aliments = ['chocolat', 'sucre', 'lait', ...fruits];

// console.log(aliments);

// Exemple 2 : découper une chaîne de caractères en plusieurs éléments
let phrase = "Bonjour !";
let phraseTableau = [...phrase];

// console.log(phraseTableau);

// Exemple 3 : sélectionner un élément, et stocker les autres dans une variable
let devises = ['dollars', 'euro', 'yen'];

// Sans décomposition
// let premiereDevise = devises[0];
// let autres = [devises[1], devises[2]];

// Avec décomposition
let [premiereDevise, ...autres] = devises;

console.log(premiereDevise);
console.log(autres);
--------------------------------------------------------------------------------------------------------
//SPREAD OPERATORS --------------------------------
// L'opérateur de propagation (ou spread operator en anglais) est un opérateur en JavaScript qui permet de déployer ou d'étaler les éléments d'un tableau ou d'un objet dans un autre tableau ou objet.
// En utilisant l'opérateur de propagation, on peut ajouter rapidement et facilement les éléments d'un tableau à un autre tableau, ou fusionner les propriétés d'un objet dans un autre objet. Voici un exemple d'utilisation de l'opérateur de propagation pour ajouter les éléments d'un tableau à un autre :
const tableau1 = [1, 2, 3];
const tableau2 = [4, 5, 6];

const tableau3 = [...tableau1, ...tableau2];

console.log(tableau3); // [1, 2, 3, 4, 5, 6]

// Dans cet exemple, l'opérateur de propagation est utilisé pour étaler les éléments de `tableau1` et `tableau2` dans un nouveau tableau `tableau3`.
// On peut également utiliser l'opérateur de propagation pour fusionner les propriétés d'un objet dans un autre objet :
const objet1 = { x: 1, y: 2 };
const objet2 = { z: 3 };

const objet3 = { ...objet1, ...objet2 };

console.log(objet3); // { x: 1, y: 2, z: 3 }

// Dans cet exemple, l'opérateur de propagation est utilisé pour fusionner les propriétés de `objet1` et `objet2` dans un nouvel objet `objet3`.
// En résumé, l'opérateur de propagation est un outil pratique en JavaScript pour étaler les éléments d'un tableau ou les propriétés d'un objet dans un autre tableau ou objet.
--------------------------------------------------------------------------------------------------------------------