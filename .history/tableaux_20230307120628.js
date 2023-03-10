
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
//Boucle FOR---IN 
// La boucle "for...in" en JavaScript permet de parcourir les propriétés d'un objet. La syntaxe de la boucle "for...in" est la suivante :


for (variable in objet) {
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
