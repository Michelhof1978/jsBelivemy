import React from 'react';//On doit importer la librairie React pour pouvoir créer un composant du site
import './App.css';

//1ère solution pour créer un composant, le plus utilisé que la fonction fléchée
function App() {//Toujours mettre une majuscule pour nommer une fonction quand on crée un composant
  return (
    <div className="App">
      <h1>BIENVENUE MIMICHE</h1>
    </div>
  );
}
export default App;

//2ème solution pour créer un composant avec fonction fléchée
//ATTENTION: les fonctions fléchées sont utilisées uniquement pour des fonctions anonymes avec React
const App = () => {//Toujours mettre const pour un composant, un composant ne sera jamais modifié, juste modifié mais dynamiquement

};  

export default App;

//3 ème solution avec class
class App
