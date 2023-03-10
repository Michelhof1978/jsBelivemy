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
          
  let maFonction = () => console.log('test');//Ds les () let maFonction = (), si un seul paramétre, on peut enlever la parenthèse, si aucun ou plusieurs paramètres, mettre la parenthèse
  
  // Dans la pratique, on l'utilise surtout pour les petites fonctions anonymes
  // Nous verrons plus tard que ces fonctions fléchées n'ont pas de this
  -------------------------------------------------------------------------------------