
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