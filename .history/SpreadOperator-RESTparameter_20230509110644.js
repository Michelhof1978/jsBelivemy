//SPREAD OPERATOR

const nombres =['un', 'deux', 'trois','quatre'];

const [nombreA, nombreB, ...nombreC] = nombres;//Les 3 petits points permettent de prendre le reste du tableau à partir de nombreC dont TROIS et QUATRE

console.log(nombreC);

//Autre exemple en ajoutant des nombres ds le tableau
const nombresAmeliores = [...nombres, 'quatre', 'cinq'];
console.log(nombresAmeliores);
-----------------------------------------------------------------

// En JavaScript, le "rest parameter" (ou "paramètre de reste" en français) est un 
// paramètre de fonction qui permet de récupérer un nombre variable d'arguments sous forme 
// d'un tableau. Il est noté avec trois points (`...`) suivi d'un nom de variable, comme 
// ceci :


function maFonction(param1, param2, ...rest) {
  console.log(param1); // affiche la valeur du premier argument
  console.log(param2); // affiche la valeur du deuxième argument
  console.log(rest);   // affiche un tableau contenant tous les autres arguments
}


// Dans l'exemple ci-dessus, la fonction `maFonction` a trois paramètres : 
// `param1`, `param2`, et `rest`. Les deux premiers paramètres sont des paramètres normaux 
// qui doivent être fournis lors de l'appel de la fonction, tandis que le troisième paramètre
//  (`rest`) est un paramètre de reste qui récupère tous les autres arguments.
// Ainsi, lorsque vous appelez la fonction `maFonction` avec plusieurs arguments, tous les 
// arguments supplémentaires sont automatiquement placés dans un tableau et affectés au 
// paramètre `rest`. Par exemple :


maFonction('a', 'b', 'c', 'd', 'e');
// affiche "a", "b", et un tableau ["c", "d", "e"]


// Le paramètre de reste est utile lorsque vous ne savez pas à l'avance combien d'arguments 
// seront passés à une fonction, ou si vous voulez traiter un nombre variable d'arguments de 
// la même manière.

---------------------------------------------------------------------------------------------
//Autre Exemple:
function add(a,b,...args) {
    console.log(args);
}
console.log(add(2,2,4,5));//Resulat 4 et 5 
--------------------------------------------------
const arr = [1,2,3,4,5];
console.log(arr);//Résultat: on copie le tableau grâce au spread opérator
-----------------------------------------------------
//Copier un tableau
const arr = [1,2,3];
const arr2 = [...arr,4]

console.log(arr2);//Résulat 1 2 3 4 
----------------------------------------------------------------------
//Avec des objets
const myObj = {
  a: 1,
  b: 2,
  c: 3,
}

const myObj2 = {
  ...myObj?
  d: 4
};

console.log(myObj2);
---------------------------------------------------------------------------
//REST operator
function add(...args){
console.log(args);

let result = 0;
for(const arg of args){// POUR PARCOURIR UNE BOUCLE SUR DES OBJETS, C 'EST FOR IN!!!!!!!ET FOR OF POUR un tableau
  result += arg;//+= = Affectation après addition: L'opérateur d'addition et d'affectation (+=) calcule la somme ou la concaténation de ses deux opérandes puis affecte le résultat à la variable représentée par l'opérande gauche. C'est le type des opérandes qui détermine s'il y a somme ou concaténation.
  }
  return result;
}

console.log(add(2,2));

Ce code est une fonction nommée "add" qui prend un nombre variable d'arguments et renvoie la somme de ces arguments.
Le premier console.log(args) affichera tous les arguments passés à la fonction en tant que tableau.
La boucle for const of calcule la somme de tous les éléments du tableau args et les stocke dans la variable result.
Enfin, la fonction renvoie la valeur de result.
Le deuxième console.log(add(2,2)) appelle la fonction add avec les arguments 2 et 2, ce qui devrait renvoyer 4.
