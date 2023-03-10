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
  