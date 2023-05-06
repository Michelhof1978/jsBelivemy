  import React,{ Component } from 'react';//On doit importer l objet component de  la librairie React pour pouvoir créer un composant du site
  import './App.css';//On importe le css

  // Composant
  import Eleve from '../Eleve/Eleve';

  //1ère solution pour créer un composant, le plus utilisé que la fonction fléchée
  //Ce code ci dessous permet uniquement de récupérer des informations.
  function App() {//Toujours mettre une majuscule pour nommer une fonction quand on crée un composant

  //  render() ;Voir code plus bas, on mets render pour les anciens code au tout début de React mais aujourd hui, on ne l utilise plus

  state = {//State est un object React qui permet de gérer les données
  eleves: [//On crée un tableau d'objets et ds chaque tableau, il y aura un object javascript
    { nom: 'Eva Dupont', moyenne: 15},
    { nom: 'michel hoffmann', moyenne: , citation:'bienvenu'},

  ]

  }; 

  return (

  <div className="App">//Ce code n'est pas du html mais du JSX, on transforme le html en js, on notera donc className pour le jsx

  <h1>BIENVENUE MIMICHE</h1>//On appele ce code du sucre syntaxique = JSX, pour écrire plus facilement du Js
    
    <Eleve nom = {this.state.eleves[0].nom} moyenne = {this.state.eleves[0].moyenne}>

          "Aller toujours plus loin" //propriété CHILDREN ds eleve.js

      </Eleve> //On ajoute le composant grâce à la class eleve de eleve.js  et sera ajouté au html, on dit que c'est une brique eleve qui est ajouté
    
    <Eleve nom = {this.state.eleves[1].nom} moyenne = {this.state.eleves[1].moyenne}></Eleve>
    
    </div>;//JSX doit avoir un élément parent pour pouvoir fonctionner, on doit donc incorporer le H1 ds un élément parent qui est là la DIV


  );//Il faut qu'il y a un seul élément qui va tout englober
  --------------------------------------------------------
  //Voici un autre code si dessus mais ce n'est pas du JSX mais du JS
  // return React.createElement('div', {className: 'App'},
  //        React.createElement('h1', null, 'BIENVENUE MIMICHE')//null signifie qu'il n y a pas de class pour le h1
  //       )
  ---------------------------------------------------------------


  }
  export default App;

  //2ème solution pour créer un composant avec fonction fléchée
  //ATTENTION: les fonctions fléchées sont utilisées uniquement pour des fonctions anonymes avec React
  const App = () => {//Toujours mettre const pour un composant, un composant ne sera jamais modifié, juste modifié mais dynamiquement
  //Pour les fonctions fléchées, on a pas besoin de mettre RETURN, ça return automatiquement
  };  

  export default App;

  //3 ème solution avec class, utilisé au début de React ds les vieux codes
  class App extends Component {//On va créer un composant App et on hérite (extends) du composant de l'objet React qui a été déclaré ds Import
  render() {  //Cette méthode render sera appellé à chaque fois que le composant sera appelé aussi
  //On insérera ds le code html ci dessus avant return render(){} avant de pouvoir retourner quelque chose
  }
  }
  export default App;