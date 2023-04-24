//LE PLUS UTILISE POUR LES REQUETES ASYNCHROMES
//SI ON UTILISE ASYNC, On est OBLIGE D UTILISER PAR LA SUITE 

// Async et Await sont ce qu'on appelle des "sucres syntaxiques" : ils n'apportent pas de nouvelles fonctionnalités, mais permettent d'utiliser les promesses de façon plus intuitives.

// On place 'async' devant une fonction pour la forcer à retourner une promesse, et pouvoir utiliser 'await' dans celle-ci.

// Si on place le mot-clé 'await' devant une promesse, JavaScript est obligé d'attendre que celle-ci soit terminée. Si elle est rompue, alors, il génèrera une exception. Nous ne somme ainsi plus obligés d'utiliser then() et catch().

// async function direBonjour() {
  
//   const promesse = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Promesse honorée !'), 1500)
//   });
  
//   let resultat = await promesse; // On attend que la promesse soit honorée ou rejetée, un peu comme then(), mais de façon plus intuitive
//   console.log(resultat);
// }

// direBonjour();
// console.log('une autre tâche');

function chargerScript(script) {
    return new Promise((resolve, reject) => {
      let element = document.createElement('script');
      element.src = script;
      document.head.append(element);
      element.onload = () => resolve('Fichier ' + script + ' chargé');
      element.onerror = () => reject(new Error('Operation impossible pour le script ' + script));
    });
  }
  
  async function resultat(){
    try {
      const scriptA = await chargerScript('test.js');
      console.log(scriptA);
      const scriptB = await chargerScript('autre.js');
      console.log(scriptB);
    }
    catch(error) {
      console.log(error);
      // document.head.lastChild.remove();
    }
  }
  
  resultat();
//   Les blocs de code "try-catch" en JavaScript sont utilisés pour gérer les erreurs qui se produisent lors de l'exécution d'un programme. 

// Le bloc "try" contient le code qui pourrait potentiellement générer une erreur. Si une erreur survient, le code s'arrête immédiatement et passe à l'étape suivante, qui est le bloc "catch". 

// Le bloc "catch" contient le code qui sera exécuté si une erreur survient dans le bloc "try". Il capture l'erreur et fournit des informations sur ce qui s'est mal passé. 

// En utilisant les blocs "try-catch", vous pouvez éviter que votre programme ne se plante complètement en cas d'erreur et fournir des informations utiles pour dépanner le code.