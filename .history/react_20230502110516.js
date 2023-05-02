//on utilise Reac pour éviter de nous répéter = DRY => Don't repeat yourself.

//Exemple:Affichage des informations de façon dynamique: Calcul de moyenne par éléve

//Sur le code ci-dessous, le code se répéte et ce n est pas bon, REACT va aider
{/* <div class= "eleve">
    <h1>Eva Dupont</h1>
    <p>Moyenne scolaire : <b>15/20</b></p>
</div>

<div class= "eleve">
    <h1>Thimothée Galo</h1>
    <p>Moyenne scolaire : <b>5/20</b></p>
</div> */}

<div id="app"></div>

.eleve {
    background-color: #f5f5f5;
    border: 1px solid silver;
    font-family: arial;
    padding: 30px;
    margin: 15px;
    display: inline-block;
    width: 300px;
  }

  function Eleve(props) {//Mettre une majuscule par convention
    return (//Retourne du code html JSX
      <div className="eleve">
        <h1>{props.name}</h1>//On récupére la propriété name cidessous
        <p>Moyenne scolaire : <b>{props.moyenne}/20</b></p>
      </div>
    );
  }
  
  let eleves = (
    <div>
      <Eleve name="Eva Dupont" moyenne="15" />
      <Eleve name="Timothée Galo" moyenne="5" />
    </div>
  );
  
  ReactDOM.render(eleves, document.querySelector('#app'));//eleve = composant, document.querySelector('#app') = notre endroit à cibler
  -------------------------------------------------------------------------------------
//   `ReactDOM.render` est une méthode fournie par la bibliothèque React qui permet de
//    rendre (ou afficher) un composant React dans le DOM (Document Object Model) d'une 
//    page web. Le DOM est l'arbre de structure HTML qui représente la page web dans le 
//    navigateur.

// La méthode `ReactDOM.render` prend deux arguments :

// 1. Le premier argument est le composant React que vous souhaitez rendre dans le DOM. 
// Ce composant peut être un composant React de base (comme un `div` ou un `span`), 
// ou un composant personnalisé que vous avez défini vous-même.

// 2. Le deuxième argument est l'élément HTML du DOM dans lequel vous souhaitez que le 
// composant soit rendu. Il peut s'agir d'un élément HTML existant dans le DOM, ou d'un élément HTML que vous avez créé dynamiquement à
//  l'aide de JavaScript.

// Voici un exemple d'utilisation de la méthode `ReactDOM.render` :

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <h1>Bonjour, monde !</h1>;
};

ReactDOM.render(<App />, document.getElementById('root'));
```
// Dans cet exemple, nous avons un composant `App` qui renvoie simplement un titre `<h1>`. 
// Nous utilisons ensuite `ReactDOM.render` pour afficher ce composant dans l'élément HTML 
// avec l'ID `root` dans le DOM de la page web.

// Lorsque vous exécutez ce code, React compile le composant `App` en HTML et le place dans 
// l'élément HTML avec l'ID `root`. Dans ce cas, le navigateur affiche le titre "Bonjour, 
// monde !" dans la page web.