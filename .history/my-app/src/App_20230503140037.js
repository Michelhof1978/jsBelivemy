import React,{ Component} from 'react';//On doit importer l objet component de  la librairie React pour pouvoir créer un composant du site
import './App.css';

//1ère solution pour créer un composant, le plus utilisé que la fonction fléchée
function App() {//Toujours mettre une majuscule pour nommer une fonction quand on crée un composant
//  render() ;Voir code plus bas, on mets render 
  return (
    <div className="App">//Ce code n'est pas du html mais du JSX, on transforme le html en js, on notera donc className pour le jsx
      <h1>BIENVENUE MIMICHE</h1>//On appele ce code du sucre syntaxique
    </div>
  );
}
export default App;

//2ème solution pour créer un composant avec fonction fléchée
//ATTENTION: les fonctions fléchées sont utilisées uniquement pour des fonctions anonymes avec React
const App = () => {//Toujours mettre const pour un composant, un composant ne sera jamais modifié, juste modifié mais dynamiquement

};  

export default App;

//3 ème solution avec class, utilisé au début de React ds les vieux codes
class App extends Component {//On va créer un composant App et on hérite (extends) du composant de l'objet React qui a été déclaré ds Import
  render() {  //Cette méthode render sera appellé à chaque fois que le composant sera appelé aussi
//On insérera ds le code html ci dessus avant return render(){} avant de pouvoir retourner quelque chose
  }
}
export default App;