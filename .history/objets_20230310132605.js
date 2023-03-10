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





// L'objet Map
// Permet de stocker des paires clé-valeur et de mémoriser leur ordre d'insertion.



// L'objet WeakSet
// Offre une flexibilité supplémentaire en comparaison de l'objet Set. Il n'accepte que des objets. Une fois que l'objet stocké dans le WeakSet passe à null, il est automatiquement retiré.



// L'objet WeakMap
// Offre une flexibilité supplémentaire en comparaison de l'objet Map.  Il n'accepte que des objets en clé. On utilise souvent cet objet pour stocker des données. Une fois que l'objet en clé n'existe plus (par exemple, si sa valeur passe à null), la valeur est automatiquement supprimée également.



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
