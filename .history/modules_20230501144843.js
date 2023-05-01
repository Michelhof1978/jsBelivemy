//LES MODULES (IMPORT ET EXPORT)
// Attention : impossible d'utiliser les modules si vous n'avez pas de serveur, la plupart des navigateurs bloquent les modules pour notre sécurité s'ils ne sont pas executés sur des serveurs

//On va exporter une fonction d'un fichier js pour pouvoir importer cette fonction ds un autre fichier js, ces 2 fichiers pourront ainsi utiliser la même fonction
// modules/direBonjour.js
export direBonjour(prenom) {
    console.log('Bonjour ' + prenom);
  }
  
  // index.js
  import { direBonjour } from './modules/direBonjour.js';//on utilise uniquement les acolades { direBonjour } quand on veut exporter une fonction ou d'un objet bien précis
  
  direBonjour('John'); // affiche 'Bonjour John'
  
  // index.html
  <script type="module" src="index.js"></script>//Il faudra bien insérer ce script sur chaque page où il y a des modules
------------------------------------
  //AUTRE EXEMPLE, il y a plusieurs exemple ds le code ci dessous
  import { direBonjour } from './modules/salutation.js';
  import  MonUtilisateur  from './modules/utilisateur.js';

  console.log (direBonjour('Nicolas'));
  let elon = new MonUtilisateur('elon', 'musk');

  //module salutation
  export let direBonjour = prenom => 'Bonjour' + prenom;
  export let direAurevoir = prenom => 'Au revoir' + prenom;

  //module utilisateur
  export default Utilisateur;