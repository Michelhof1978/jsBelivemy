// Attention : impossible d'utiliser les modules si vous n'avez pas de serveur, la plupart des navigateurs bloquent les modules pour notre sécurité s'ils ne sont pas executés sur des serveurs

//On va exporter une fonction d'un fichier js pour pouvoir importer cette fonction ds un autre fichier js
// modules/direBonjour.js
export direBonjour(prenom) {
    console.log('Bonjour ' + prenom);
  }
  
  // index.js
  import { direBonjour } from './modules/direBonjour.js';
  
  direBonjour('John'); // affiche 'Bonjour John'
  
  // index.html
  <script type="module" src="index.js"></script>