let chien = {
    race: 'Shiba',
    poil: 'Court',
    // aboyer: function(){
    //     console.log('Ouaf ouaf');
    // }
    aboyer: () => console.log('Ouaf ouaf')
}

chien.aboyer();

// let magicien = {
//     attaquer: function(){
//         console.log('Le magicien lance un sort');
//     }
// }
// let guerrier = {
//     attaquer: function(){
//         console.log('Le guerrier prend son épée');
//     }
// }

// magicien.attaquer();
// guerrier.attaquer();
--------------------------------------------------------------------------------
let informations = ['superSayen', '25', 'homme'];

// Sans décomposition
// let pseudo = informations[0];
// let age    = informations[1];
// let sexe   = informations[2];

// Avec décomposition
let [pseudo, age, sexe] = informations;

console.log(pseudo);
console.log(age);
console.log(sexe);
------------------------------------------------------------
// Dans les prochaines sessions, je vous présente 4 objets : Set, Map, WeakSet et WeakMap.

// Pour que vous puissiez profiter pleinement de ces sessions, je pense qu'il est nécessaire de comprendre l'utilité de ces objets. Voici donc quelques pistes :




// En conclusion :
// Vous n'utiliserez pas souvent ces nouveaux objets que JavaScript a ajouté récemment, néanmoins, si vous devez un jour en utiliser un, vous aurez tout ce qu'il vous faut dans cette formation pour le faire. Si vous ne devez retenir qu'une chose, c'est que ces objets servent surtout à stocker des données liées à un objet. Par exemple, si vous avez une application de messagerie, et un objet "utilisateur", vous pouvez utiliser un WeakMap pour stocker ses messages.

// Vous voici prêt à mieux aborder ces nouveaux concepts !
-----------------------------------------------------------------------------------------------------------

// L'objet Set
// Permet de stocker des valeurs uniques de tout type. Il s'agit d'une sécurité comparé à un simple tableau. Je vous recommande d'utiliser cet objet lorsque vous voulez stocker des informations sensibles qui ne doivent pas être dupliquées. L'exécution d'un objet Set est également plus rapide qu'un objet Array (donc qu'un tableau), même si sur de petits tableaux, cela ne se remarque pas.
let nombres = [10, 45, 75, 10, 24, 45];
// let monSet  = new Set(nombres);
let monSet = new Set();

monSet.add('70');
monSet.add(87);
// monSet.delete(87);

console.log(monSet.size);//size = length

// En JavaScript, la propriété "size" est généralement utilisée pour déterminer la longueur ou la taille d'un objet spécifique. Cette propriété peut être utilisée sur plusieurs types d'objets, tels que des tableaux, des chaînes de caractères, des ensembles, des cartes, etc.
// Lorsque "size" est utilisé sur un tableau, il renvoie le nombre d'éléments dans le tableau. Par exemple, si un tableau contient 5 éléments, alors la propriété "size" renverra la valeur 5.
// Lorsque "size" est utilisé sur une chaîne de caractères, il renvoie la longueur de la chaîne de caractères. Par exemple, si une chaîne de caractères contient 10 caractères, alors la propriété "size" renverra la valeur 10.
// Lorsque "size" est utilisé sur un ensemble, il renvoie le nombre d'éléments dans l'ensemble. Par exemple, si un ensemble contient 3 éléments, alors la propriété "size" renverra la valeur 3.
// Lorsque "size" est utilisé sur une carte, il renvoie le nombre d'entrées dans la carte. Par exemple, si une carte contient 4 entrées, alors la propriété "size" renverra la valeur 4.
// En résumé, la propriété "size" en JavaScript est utilisée pour déterminer la longueur ou la taille d'un objet spécifique et son utilisation varie en fonction du type d'objet sur lequel elle est appliquée.
---------------------------------------------------------------------------------------------------
// L'objet Map
// Permet de stocker des paires clé-valeur et de mémoriser leur ordre d'insertion.
let utilisateurs = new Map();

utilisateurs.set('Mark Zuckerberg', {
    email: 'mark@facebook.com',
    poste: 'PDG',
});

utilisateurs.set('Bill Gates', {
    email: 'bill@gatesnotes.com',
    poste: 'Sauver le monde',
});

// utilisateurs.delete('Bill Gates');

console.log(utilisateurs);
// En JavaScript, la fonction "map()" est une méthode de tableau qui permet de créer un nouveau tableau en appliquant une fonction de transformation sur chaque élément du tableau d'origine.
// La syntaxe de la méthode "map()" est la suivante :

// ```javascript
// const nouveauTableau = tableauOriginal.map(fonctionDeTransformation);
// ```
// - "tableauOriginal" est le tableau d'origine que vous voulez transformer.
// - "fonctionDeTransformation" est une fonction qui prend un argument (l'élément du tableau d'origine) et retourne une valeur qui sera ajoutée au nouveau tableau.

// La méthode "map()" retourne un nouveau tableau qui contient les valeurs transformées.

// Voici un exemple simple pour mieux comprendre :

// ```javascript
// const nombres = [1, 2, 3, 4];

// const doubles = nombres.map(function(nombre) {
//   return nombre * 2;
// });

// console.log(doubles); // [2, 4, 6, 8]
// ```
// Dans cet exemple, la fonction de transformation prend chaque élément du tableau "nombres" et le multiplie par 2 pour créer un nouveau tableau "doubles".
----------------------------------------------------------------------------------------------
// L'objet WeakSet
// Offre une flexibilité supplémentaire en comparaison de l'objet Set. Il n'accepte que des objets. Une fois que l'objet stocké dans le WeakSet passe à null, il est automatiquement retiré.
let voitureA = {
    constructeur: 'Tesla',
    modele: 'Cybertruck'
  }
  let voitureB = {
    constructeur: 'Renault',
    modele: 'Espace'
  }
  
  let voitures = new WeakSet([voitureA, voitureB]);
  console.log(voitures);
//   Un WeakSet en JavaScript est un type de collection qui permet de stocker des objets JavaScript uniques. Contrairement à un Set, un WeakSet ne peut stocker que des objets, et pas des valeurs primitives comme des nombres ou des chaînes de caractères.

// La particularité d'un WeakSet est qu'il ne maintient pas de référence forte vers les objets qu'il contient. Cela signifie que si l'objet n'est plus référencé dans le reste du code, il pourra être supprimé de la mémoire par le ramasse-miettes (garbage collector) de JavaScript, même s'il est toujours présent dans le WeakSet. En d'autres termes, un WeakSet ne préserve pas les objets qui n'ont pas d'autre référence dans le code.

// Cette fonctionnalité peut être utile dans certaines situations, par exemple lorsque l'on souhaite stocker des objets de manière temporaire et que l'on ne veut pas les conserver en mémoire une fois qu'ils ne sont plus utilisés. Cependant, il est important de noter que l'utilisation d'un WeakSet nécessite une certaine attention, car les objets qui y sont stockés peuvent être supprimés à tout moment par le ramasse-miettes.
  ---------------------------------------------------------------------------------------------------
  // L'objet WeakMap
// Offre une flexibilité supplémentaire en comparaison de l'objet Map.  Il n'accepte que des objets en clé. On utilise souvent cet objet pour stocker des données. Une fois que l'objet en clé n'existe plus (par exemple, si sa valeur passe à null), la valeur est automatiquement supprimée également.
  let voitures = new WeakMap();

let index = {
    id: 1
}

let voitureA = {
    constructeur: 'Tesla',
    modele: 'Cybertruck'
}

voitures.set(index, voitureA);

// voitures.delete(index);
console.log(voitures);
// Un WeakMap en JavaScript est une structure de données qui permet de stocker des paires clé-valeur de manière similaire à un objet JavaScript ordinaire, mais avec quelques différences importantes.
// La première différence est que les clés d'un WeakMap doivent être des objets, tandis que les valeurs peuvent être de n'importe quel type de données. La deuxième différence est que les entrées d'un WeakMap ne sont pas référencées de manière forte, ce qui signifie qu'elles peuvent être supprimées automatiquement par le moteur JavaScript si elles ne sont plus utilisées dans le reste du code. Cela peut être utile pour éviter les fuites de mémoire.
// Un autre point important est que les clés dans un WeakMap ne sont pas énumérables, ce qui signifie qu'il n'y a pas de méthode pour parcourir toutes les entrées du WeakMap. De plus, il n'y a pas de méthode pour obtenir la taille d'un WeakMap.
// Les principales méthodes d'un WeakMap sont set(), get(), has() et delete(). La méthode set() permet d'ajouter une nouvelle entrée dans le WeakMap avec une clé et une valeur données. La méthode get() permet de récupérer la valeur associée à une clé donnée. La méthode has() permet de vérifier si une clé donnée existe dans le WeakMap, et la méthode delete() permet de supprimer une entrée donnée.
// En résumé, un WeakMap est une structure de données en JavaScript qui permet de stocker des paires clé-valeur de manière flexible, avec la particularité que les clés ne sont pas référencées de manière forte et peuvent être supprimées automatiquement.
// ----------------------------------------------------------------------------------------------------------
// Voici une fiche technique résumant l'ensemble des fonctions liées aux objets Set, Map, WeakSet et WeakMap.

// L'objet Set
// Créer un objet Set

let monObjet = new Set();
// ou
let monObjet = new Set(['un', 'deux', 'trois']);

// Ajouter un élément
monObjet.add('quatre');

// Supprimer un élément
monObjet.delete('quatre');

// Supprimer tous les éléments
monObjet.clear();

// Avoir la taille de l'objet (le nombre d'éléments)
monObjet.size;

// Vérifier si un élément existe (renvoie donc true ou false)
monObjet.has('un');

// Retourner tous les éléments
monObjet.values();
// ou
monObjet.keys();


// L'objet Map
// Créer un objet Map
let monObjet = new Map();

// Ajouter un élément
monObjet.set('John Doe', {
    email: 'john@doe.com',
});

// Supprimer un élément
monObjet.delete('John Doe');

// Supprimer tous les éléments
monObjet.clear();

// Vérifier si un élément existe (renvoie donc true ou false)
monObjet.has('John Doe');

// Retourner un élément
monObjet.get('John Doe');

// Retourner tous les éléments
monObjet.values();
// ou
monObjet.keys();


// L'objet WeakSet
// Créer un objet WeakSet
let monObjet = new WeakSet();
// ou
let monObjet = new WeakSet([objet1, objet2, objet3]);

// Ajouter un élément
monObjet.add(objet4);

// Supprimer un élément
monObjet.delete(objet4);

// Avoir la taille de l'objet (le nombre d'éléments)
monObjet.length();

// Vérifier si un élément existe (renvoie donc true ou false)
monObjet.has(objet4);


// L'objet WeakMap
// Créer un objet WeakMap
let monObjet = new WeakMap();

// Ajouter un élément
const objet1 = {
    nom: 'John Doe',
}
 
monObjet.set(objet1, {
    email: 'john@doe.com',
});

// Supprimer un élément
monObjet.delete(objet1);

// Avoir la taille de l'objet (le nombre d'éléments)
monObjet.length();

// Vérifier si un élément existe (renvoie donc true ou false)
monObjet.has(objet1);

// Retourner un élément
monObjet.get(objet1);
------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------
// L'objet Window a pour fonction d'englober l'ensemble des fonctions, et autres objets de JavaScript. C'est de lui que tout part.
// Voici une petite démonstration de quelques fonctions bien utiles que propose cet objet. Essayez ces options dans l'ordre ;)
// Ouvrir une fenêtre

// Essayer (window.open)
window.open('https://believemy.com');
Redimensionner une fenêtre

(window.resizeTo)
let fenetre = window.open('https://believemy.com', '', 'width=900, height=700');

function resize() {
fenetre.resizeTo(700, 470);
}

// Fermer une fenêtre
(window.close)

let fenetre = window.open('https://believemy.com', '', 'width=900, height=700');

function resize() {
fenetre.close();
}
-----------------------------------------------------------------------------------------------------------
L'objet Navigator a pour fonction de fournir tout un tas d'informations sur le navigateur de nos utilisateurs. Pour certaines de ces informations, vous devrez demander une permission grâce à une boîte de dialogue.

Voici une petite démonstration de quelques fonctions bien utiles que propose cet objet.

Les informations principales

Les cookies sont-ils autorisés ? true
Système d'exploitation ? Win32
Langue du navigateur ? fr-FR


navigator.cookieEnabled
navigator.platform
navigator.language
-----------------------------------------------------------------------------------------------------------
L'objet History a pour fonction de manipuler l'historique de nos utilisateurs.

Voici une petite démonstration de quelques fonctions bien utiles que propose cet objet.

Page précédente
Essayer (History.back)

history.back()
Page suivante (si existante)

Essayer (History.forward)
history.forward();
--------------------------------------------------------------
L'objet Location a pour fonction de nous donner des informations relatives aux adresses, pour, par exemple, rediriger l'utilisateur.

Voici une petite démonstration de quelques fonctions bien utiles que propose cet objet.

Recharger une page (bloqué par CodePen)

Essayer (Location.reload)
location .reload();

Rediriger
Essayer (Location.href)

location.href();
--------------------------------------------------------------------------------------------------------
L'objet Screen a pour fonction de nous donner des informations relatives aux écrans.

Voici une petite démonstration de quelques fonctions bien utiles que propose cet objet.

Les informations principales

Largeur de l'écran : 1536px
Hauteur de l'écran : 816px
Résolution : 24

screen.availWidth;
screen.availHeight;
screen.pixelDepth;
--------------------------------------------------------------------------------------------------------
//Objets literaux
let mark = {
    prenom: "Mark", // propriété
    nom: "Zuckerberg",
    email: "mark@facebook.com",
    
    // À l'ancienne
    sePresenter: function(){
      console.log("Bonjour, je m'appelle " + this.prenom);
    }
  }
  
  mark.sePresenter();
  
  function recevoirLesCoordonnees() {
    return { latitude: 35, longitude: 139 }
  }
  
  let coordonnees = recevoirLesCoordonnees();
  console.log(coordonnees.latitude);
  console.log(coordonnees.longitude);
----------------------------------------------------------------------------------------------------
//Objets par constructeur personnalisé
// let mark = {
//   prenom: "Mark", // propriété
//   nom: "Zuckerberg",
//   email: "mark@facebook.com",
  
//   // À l'ancienne
//   sePresenter: function(){
//     console.log("Bonjour, je m'appelle " + mark.prenom);
//   }
// }

// On crée une fonction constructeur pour nos utilisateurs
function Utilisateur(prenom, nom, email) {
    this.prenom = prenom;
    this.nom    = nom;
    this.email  = email;
    
    this.sePresenter = () => {
      console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse email " + this.email);
    }
  }
  
  // On crée un objet
  var mark = new Utilisateur("Mark", "Zuckerberg", "mark@facebook.com");
  var bill = new Utilisateur("Bill", "Gates", "bill@gatesnotes.com");
  
  // mark.sePresenter();
  // console.log(mark);
  
  mark.poste = "PDG de Facebook";
  
  // console.log(mark);
  // console.log(bill);
  
  function Logement(type, annee, placeDeParking, proprietaire) {
    this.type             = type;
    this.annee            = annee;
    this.placeDeParking   = placeDeParking;
    this.proprietaire     = proprietaire;
  }
  
  var appartementA = new Logement('Appartement', 2014, true, mark); // Mark est un objet
  
  // console.log(appartementA.proprietaire.prenom);
  console.log(appartementA);
  -----------------------------------------------------------------------------------------------
  //Les prototypes
  function Utilisateur(prenom, nom, email) {
    this.prenom = prenom;
    this.nom    = nom;
    this.email  = email;
    
    this.sePresenter = () => {
      console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse email " + this.email);
    }
  }
  
  // On crée un objet
  var mark = new Utilisateur('Mark', 'Zuckerberg', 'mark@facebook.com');
  var bill = new Utilisateur('Bill', 'Gates', 'bill@gatesnotes.com');
  
  console.log(mark);
  --------------------------------------------------------------------------------------------------------------
  //Créeer un objet avec le constr