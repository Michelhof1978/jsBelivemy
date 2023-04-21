// Les promesses (async et await)
// Objet qui représente l'état d'une opération asynchrone
// En cours / Honorée / Rompue
// Exemple : Discord(), app de discussion en ligne, permet de parler aussi par micro. Utilise l'asynchrone pour ne pas bloquer tant que vous n'acceptez pas l'utilisation du micro.

// const promesse = new Promise((resolve, reject) => {
//   // Tâches asynchrones
  
//   // Promesse honorée : appel de resolve()
  
//   // Promesse rompue : appel de reject()
// });

// Mais généralement, nous ne créerons presque jamais de promesse, car les API modernes qu'on pourrait utiliser les ont déjà créées pour nous. Elles renvoient donc souvent un objet promesse en résultat qu'on utilisera pour savoir si tout s'est bien passé.
------------------------------------------------------------------------------------------------------------
function chargerScript(script) {
    return new Promise((resolve, reject) => {
      let element = document.createElement('script');
      element.src = script;
      document.head.append(element);
      element.onload = () => resolve('Fichier ' + script + ' chargé');
      element.onerror = () => reject(new Error('Operation impossible pour le script ' + script));
    });
    
//   }//Cette fonction JavaScript "chargerScript(script)" crée un élément de script HTML et l'ajoute à la section "head" du document HTML. Ensuite, la fonction retourne une promesse qui sera résolue lorsque le script est chargé avec succès ou rejetée si une erreur se produit lors du chargement du script.

// La fonction prend un paramètre "script" qui est le chemin d'accès ou l'URL du fichier script à charger.

// Voici un aperçu du fonctionnement de cette fonction:

// - La fonction crée un nouvel élément de script en utilisant la méthode "document.createElement('script')".
// - Le chemin d'accès ou l'URL du fichier script est défini comme la valeur de la propriété "src" de l'élément de script.
// - L'élément de script est ajouté à la section "head" du document HTML en utilisant la méthode "document.head.append(element)".
// - La promesse est retournée, et deux fonctions sont définies pour gérer les événements de chargement et d'erreur du script.
// - Si le script est chargé avec succès, la promesse est résolue avec un message de réussite contenant le nom du script chargé.
// - Si une erreur se produit lors du chargement du script, la promesse est rejetée avec un objet "Error" contenant un message d'erreur indiquant que l'opération n'a pas été possible pour le script spécifié.

// En utilisant cette fonction, vous pouvez charger dynamiquement des scripts dans votre page Web de manière asynchrone, ce qui peut améliorer les performances et l'expérience utilisateur de votre site.
 
--------------------------------------------------------------------------------------------------

// const promesse = chargerScript('test.js');//Toujours mettre const pour promise car ça ne changera pas la valeur
  
  // // Renvoi une erreur car le fichier test.js n'existe pas
  // promesse.then(
  //   function(result) {
  //     console.log(result);
  //   },
  //   function(error) {
  //     console.log(error);
  //   }
  // );
  
  // promesse.then(result => console.log(result), error => console.log(error)); // Même code, avec des fonctions fléchées
  
  // On peut aussi passer directement par la fonction elle-même
  chargerScript('test.js')
  .catch(console.log);