//DECLARATION DE FONCTION, C'est une fonction qui pourra être utilisé n'importe où où on l appelle
//L ordinateur va d'abords chercher toutes les fonctions déclaréés et le garder en mémoire avant d'executer tout le code js les uns après les autres
function direBonjour(prenom){
  console.log('Bonjour'+ prenom);
}

//EXPRESSION DE FONCTION, C'est une fonction qui pourra être appellé en local, on est obligé de l appeller après avoir déclarer la fonction
let direAurevoir = function(){
  console.log('Au revoir');
}

direAurevoir();

//FONCTION FLECHE, A PRIVILEGIER
//Par contre, on ne peut pas utiliser les fonctions flechées pour créer un objet avec le mot this, il faut faire autrement
let direAurevoir = () =>{
  console.log('Au revoir');
}

direAurevoir();

//OU 

let direAurevoir = () =>{
  return 'Au revoir';
}

console.log (direAurevoir());

//OU EN UNE SEULE LIGNE
let direAurevoir = () => 'aurevoir';//Comme return et renvois aurevoir, si un seul paramétre, ne pas le mettre entre parenthèse
console.log (direAurevoir());

//Exemple:
let addition = (nombreA, nombreB) => nombreA + nombreB;
console.log(addition(5,6));

let direAurevoir = (prenom) => 'aurevoir' + prenom;
console.log(direAurevoir(Nicolas));

-------------------------------------------------------------------------------------------------------
const price = [4, 7, 12, 45, 1]
let PlusGrandQue10 = prices.filter(function(p){//On stocke notre fonction anonyme la variable p et on utilise pour tous les prix(prices) la fonction filter pour filtrer, trier les prix
    //p est le paramétre donné par la fonction filter
  return p > 10//Si c'est true, on stocke le prix ds la variable letPlusGrandQue10, si c'est faux, on stocke rien
});

  console.log (letPlusGrandQue10);

  //AMELIORATION DU CODE CI DESSUS PAR UNE FONCTION FLECHEE
  const price = [4, 7, 12, 45, 1]
  let PlusGrandQue10 = prices.filter (p => p > 10);//Si c'est true, on stocke)
  console.log (letPlusGrandQue10);
  
//   Ce code crée un tableau price contenant des prix, puis utilise la méthode filter() pour créer un nouveau tableau
//    PlusGrandQue10 qui ne contient que les prix supérieurs à 10. Enfin, il affiche le nouveau tableau PlusGrandQue10 
//    dans la console.

// La méthode filter() garde uniquement les éléments qui réussissent le test (dans ce cas, le test est de savoir si
//    l'élément est supérieur à 10), et les renvoie dans un nouveau tableau.
------------------------------------------------------------------------------------
function direBonjour() {
    alert("Bonjour");
  }
  direBonjour();
  direBonjour();
  function direBonjour(prenom) {
    alert("Bonjour " + prenom);
    }
  direBonjour("Nicolas");
  ---------------------------------------------------------------------------------
  //Fonction avec variables locales et globales :
  let crie = "Toujours plus bas !"; // globale
  function crieDeGuerre() {
    let crie = "Toujours plus fort !"; // locale
    console.log(crie);
    }
  crieDeGuerre();
  console.log(crie);
--------------------------------------------------------------------------------
 // Fonction qui retourne quelque chose :
  let nombreUn = 4; nombreDeux = 7;
  function addition(nombreA, nombreB) {
      let result = nombreA + nombreB;
    // console.log(result);
    return result;
    }
  function division(nombreA, nombreB) {
      let result = nombreA / nombreB;
    // console.log(result);
    return result;
    }

  let resultatAddition = addition(nombreUn, nombreDeux);
  let resultatDivision = division(nombreUn, nombreDeux);
  console.log(resultatAddition * resultatDivision);
----------------------------------------------------------------------------------------
 // Fonction avec paramètres par défaut :
  function cuisiner(nombreDeGateaux, minutesDePreparation = 10, minutesDeCuisson = 15) {
       let resultat = nombreDeGateaux * (minutesDeCuisson + minutesDePreparation);
      return resultat;
        }
     let tempsDePreparationChocolat = cuisiner(4);
    let tempsDePreparationFraisier = cuisiner(1, 20);
    console.log(tempsDePreparationFraisier + tempsDePreparationChocolat);
    -----------------------------------------------------------------------------
  //Fonction, convertir les données :
  function prevoirAge() {
      let age = prompt("Quel est le premier nombre ?") // "30" + 1 = 301
    // age = parseInt(age);
    age = parseFloat(age);
    // age = Number(age);
    
    // nombre = 45;
    // nombreEnString = nombre + "";
    // nombreEnString = nombre.toString();
    alert("Bientôt vous aurez " + (age + 1) + " ans.");
    }
  prevoirAge();
  //Fonction anonyme :
  // Une fonction anonyme est une fonction qui ne va pas posséder de nom.
  // On utilise généralement ces fonctions lorsque nous n'avons pas besoin de les appeler par leur nom.
  // C'est-à-dire, lorsque nous utilisons notre fonction immédiatement, sans la réutiliser plus tard.
 
  function(){
    console.log('Je suis une fonction anonyme');
  }
  // Comment executer cette fonction ?
  // - en l'utilisant dans une variable (souvent dans un objet)
  // - en l'auto-invoquant
  // - en utilisant un évènement (que nous verrons plus tard)
  let fonctionAnonyme = function(){
    console.log('Je suis une fonction anonyme');
  }
  (function(){ console.log('Je suis une fonction anonyme')})(); 
  // ici nous avons juste englobé notre fonction dans des paranthèses, et ajouté "()" à la fin
  -----------------------------------------------------------------------------------------
  //Fonctions fléchées
  let maFonction = function(){
    console.log('test');
  }
         //OU
  let maFonction = () => {
    console.log('test');
  }
          //OU
  //Celle qui est le plus utilisé aujourd hui
  let maFonction = () => console.log('test');//Ds les () let maFonction = (), si un seul paramétre, on peut enlever la parenthèse, si aucun ou plusieurs paramètres, mettre la parenthèse
  
  // Dans la pratique, on l'utilise surtout pour les petites fonctions anonymes
  // Nous verrons plus tard que ces fonctions fléchées n'ont pas de this
  -------------------------------------------------------------------------------------
  //Les closures

  // Les closures (ou fermetures) en JavaScript sont un concept important et puissant de la programmation. Elles permettent de créer des fonctions avec des variables qui persistent dans le temps même après que la fonction ait été appelée.
  // En d'autres termes, une closure est une fonction qui "capture" les variables de son environnement parent, même si cette fonction est appelée en dehors de son contexte initial. Cela signifie que les variables définies dans la portée parente de la closure sont accessibles à la fonction interne de la closure, même après que la fonction parente ait été exécutée.
  // Voici un exemple simple de closure en JavaScript:
    function multiplier(x) {
    return function(y) {
      return x * y;
    };
  }
  
  var multiplierParDeux = multiplier(2); // la fonction multiplierParDeux est une closure qui capture la variable x=2
  var multiplierParTrois = multiplier(3); // la fonction multiplierParTrois est une closure qui capture la variable x=3
  
  console.log(multiplierParDeux(5)); // affiche 10 (2*5)
  console.log(multiplierParTrois(5)); // affiche 15 (3*5)
  
  
  // Dans cet exemple, la fonction `multiplier` prend un argument `x` et retourne une fonction qui prend un autre argument `y` et renvoie le produit de `x` et `y`. En appelant la fonction `multiplier` avec l'argument `2`, nous créons une closure `multiplierParDeux` qui capture la variable `x=2`. En appelant la fonction `multiplier` avec l'argument `3`, nous créons une closure `multiplierParTrois` qui capture la variable `x=3`.
  
  // En appelant ces deux closures avec l'argument `5`, nous obtenons les résultats attendus de `10` et `15` respectivement.
  
  // Les closures sont souvent utilisées en JavaScript pour créer des fonctions qui encapsulent un état, comme les compteurs, les gestionnaires d'événements et les fonctions de rappel (callbacks).

   //function bonjour(prenom) {
  
    //   let resultat = "Bonjour " + prenom; // Variable locale
    //   let maClosure = () => console.log(resultat);
    //   return maClosure;
      
    // }
    
    // function bonjour_bis(prenom) {
      
    //   let resultat = "Bonjour " + prenom; // Variable locale
    //   console.log(resultat);
      
    // }
    
    // let maFonction = bonjour('Evan');
    // maFonction();
    // bonjour_bis('Nicolas');
    
    function timer() {
      let secondes = 0;
      
      let maClosure = () => {
        return ++secondes;
      }
      return maClosure;
    }
    
    let monTimer = timer();
    console.log(monTimer());
    console.log(monTimer());
    console.log(monTimer());
    
    let monDeuxiemeTimer = timer();
    console.log(monDeuxiemeTimer());
    
    console.log(monTimer());
    -------------------------------------------------------------------------------------------
    //REST parameters (...nombres) --------------------------------
      function addition(...nombres) {

      let resultat = 0;
  
      nombres.forEach(nombre => {
          resultat += nombre;
      });
  
      console.log(resultat);
  
  }
  
  addition(4, 9, 5, 415, 78, 54, 5);//Additionne toutes les valeurs
 
//   Le paramètre rest en JavaScript est une fonctionnalité qui permet à une fonction d'accepter un nombre variable d'arguments en tant qu'array.

// Le paramètre rest est défini en utilisant trois points (...) suivis du nom du paramètre. Par exemple :

function maFonction(...args) {
  console.log(args);
}

// Dans cet exemple, la fonction `maFonction` accepte un nombre variable d'arguments, qui sont tous stockés dans l'array `args`. La fonction peut ensuite accéder à ces arguments en utilisant l'array `args`.

// Voici un autre exemple :
function somme(...nombres) {
  let resultat = 0;
  for (let nombre of nombres) {
    resultat += nombre;
  }
  return resultat;
}

console.log(somme(1, 2, 3, 4)); // affiche 10
console.log(somme(1, 2)); // affiche 3
console.log(somme(1)); // affiche 1
console.log(somme()); // affiche 0

// Dans cet exemple, la fonction `somme` accepte un nombre variable d'arguments et utilise une boucle for pour ajouter chaque argument à une variable `resultat`, qui est ensuite renvoyée.

// Le paramètre rest est une fonctionnalité utile qui permet aux développeurs de créer des fonctions plus flexibles et génériques qui peuvent accepter un nombre variable d'arguments.
 ---------------------------------------------------------------------------------------------------------------------------------------------------------
 //FONCTION IMPURE, NE PAS FAIRE CAR CHAQUE FOIS QUE L ON VA L APPELER, CA RAJOUTERA 4 A LA SOMME 
 let x = 2;
 const add1 = y => x += y; // => = veut dire ds une fonction qu il retourne quelque chose

 console.log(add1(2)); // affiche 4, on mets en paramètre 2 à y
 ----------------------------------------------------------------------------------------------------------------
 //FONCTION PURE, LE CODE VA TOUJOURS RETOURNER 4, Cela sert à réduire le nombre de bugs
 let x = 2;
 const add2 = (a,b) => a + b;

 console.log(add2(2,2))
 ---------------------------------------------------------------------------------------------
//FONCTION D ORDRE SUPERIEURE, ce sont des fonctions qui prennent d autres fonctions en paramètre ou en retourne une autre ou alors les 2
const rawArr = [5,9,200, 345, 77]
const newArr = [];

  for(let i = 0; i < rawArr.length; i++){
    if(rawArr[i] > 100){
      newArr.push(rawArr[i]);//On trie les nombre au dessus de 100 et on ajoute le resultat grâce à push ds le nouveau tableau selectionné
    }   
  }
console.log(newArr);
-------------------------------------------------------------------------------------------------------
const rawArr = [5,9,200, 345, 77]

function supArr(arr, fn){
  const newArr = [];

  for [let i = 0; i < arr.length; i++]
{
  if(fn(arr[i])) {
    newArr.push(arr[i]);
  }
}
  return newArr;
}

const arrSup100 = supArr