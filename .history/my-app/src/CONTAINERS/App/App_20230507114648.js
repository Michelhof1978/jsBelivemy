  //Un composant est monté, modifié ou démonté
  //Monté => Branche
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  //Modifié => Modification
  conpo
  
  
  //Ce composant est un  STATEFULL / CONTAINER: Composant qui gère un state

  //IMPORTANT!!!! Le state et les Props ? Nous pouvons ainsi gérer les données avec le state, et envoyer ces données à nos composants grâce aux props.
 
  import React,{ Component } from 'react';//On doit importer l objet component de  la librairie React pour pouvoir créer un composant du site
  import './App.css';//On importe le css

  // Composant
  import Eleve from '../../COMPONENTS/Eleve/Eleve';

  //1ère solution pour créer un composant, le plus utilisé que la fonction fléchée
  //Ce code ci dessous permet uniquement de récupérer des informations.

  class App extends Component{//Toujours mettre une majuscule pour nommer une fonction quand on crée un composant

  //  render() ;Voir code plus bas, on mets render pour les anciens code au tout début de React mais aujourd hui, on ne l utilise plus
-----------------------------------------------------------------------------------------------------
  state = {//State est un object React qui permet de gérer les données,c'est un type par référence, le but du state est de regrouper toutes les informations ds un seul enplacement
  eleves: [//On crée un tableau d'objets et ds chaque tableau, il y aura un object javascript
    { nom: 'Eva Dupont', 
    moyenne: 15, citation:'bienvenue'},

    { nom: 'michel hoffmann',
     moyenne: 5, 
     citation: null},

  ]
}; 
------------------------------------------------------------------------------------------------------------------
    buttonClickedHandler = nouveauNom => {//Fonction pour le bouton ci dessous, grâce à elle, l événement se déclanchera lors du clic sur bouton, s il n'y avait pas cette fonction le jsx lancera le js qui est à l intérieur de lui automatiquement, ce qui poserait problème
    //   this.setState({
    //     eleves:[
    //       { nom: 'carole bouquet', 
    // moyenne: 15, citation:'bienvenue'},
    //     ]
    //   })//On peut nommer la fonction comme on veut mais par convention, on ajoutera à la fin du nom de la fonction Handler
   --
    //Autre façon de faire le code ci dessus, en utilisant REST paraméter A FAIRE!!!!!!!!!!!!!!
    //IMPORTANT On ne doit pas modifier le state en récupérant les informations, on doit pouvoir récupérer les infos de manière IMMUTABLE
      const nouveauState = [...this.state.eleves];//Comme state est un object et un type par référence(voir  type primitif et type reference), on utilisera le Rest parameter car on ne peut pas directement faire une copie sur un object, on crée un pointeur sur l object en cours state
      nouveauState[0];nom = nouveauNom;
      ...this.state,//On demande de faire une copie de state avec le Rest parameter
      this.setState({//setState permet de modifier le state
          eleves: nouveauState
      });
      //Cela permettra de modifier le nom sans modifier le state original en ayant une copie du  state
      -------------------------------------
  
  }//En cliquant sur le bouton, le nom changera par la suite, setState permet de modifier notre state
--------------------------------------------------------------------------------------------------------------------
  return (

    <div className="App"> //Ce code n'est pas du html mais du JSX, on transforme le html en js, on notera donc className pour le jsx

   <h1>BIENVENUE MIMICHE</h1>/*//On appele ce code du sucre syntaxique = JSX, pour écrire plus facilement du Js */}
     
   <button onClick = {this.buttonClickedHandler.bind(this, 'Elina')}>Modification nom eleve</button>/*//ON NE METS PAS DE PARENTHESE ATTENTION, ON veut juste passer une reference par cette fonction, il faudra insérer bind avec this(context actuel) et son paramétre (Elina) pour pouvoir changer de nom//Comme ce n'est pas du js mais du jsx et que l on veut créer un événement, il suffir juste de mettre la majuscule à onClick, comme c'est une class, on ajoute this pour appeler la fonction buttonClickedHandler
   //JSX applique le javascript de suite et automatiquement, ce qui va poser un soucis lors d un événement comme le bouton ci dessus, on va devoir créer une fonction pour que l événement soit executé lors du click sur le bouton gâce à buttonClickedHandler
   //Pour appeler buttonClickedHandler et pour que ça fonctionne, on ne mets pas de parenthèse sinon ça va poser un problème */}
  
//VOILA 2 FACONS DIFFERENTE POUR CHANGER DE NOM 1 avec le bouton ci dessus ({this.buttonClickedHandler.bind(this, 'Elina')}) ET LE 2 EME EN CLIQUANT SUR LE NOM CI DESSOUS  clic = {() => this.buttonClickedHandler('lea')} A utiliser de preference!!!!!
   
    //1ER COMPOSANT
     <Eleve nom = {this.state.eleves[0].nom} 
            moyenne = {this.state.eleves[0].moyenne}>
            clic = {() => this.buttonClickedHandler('lea')}//On va executer une fonction anonyme avec paramétre léa et Quand on cliquera sur le nom, le nom va changer, Clic = ma méthode, 
     </Eleve> //On ajoute le composant grâce à la class eleve de eleve.js  et sera ajouté au html, on dit que c'est une brique eleve qui est ajouté
    
     //2EME COMPOSANT
    <Eleve nom = {this.state.eleves[1].nom}
           moyenne = {this.state.eleves[1].moyenne}>
           clic = {() => this.buttonClickedHandler('nicolas')}
    {this.state.eleves[1].citation}
    </Eleve>
    
    </div>//JSX doit avoir un élément parent pour pouvoir fonctionner, on doit donc incorporer le H1 ds un élément parent qui est là la DIV


  );//Il faut qu'il y a un seul élément qui va tout englober

}
export default App;
  --------------------------------------------------------------------------------------------
  //Voici un autre code si dessus mais ce n'est pas du JSX mais du JS
  // return React.createElement('div', {className: 'App'},
  //        React.createElement('h1', null, 'BIENVENUE MIMICHE')//null signifie qu'il n y a pas de class pour le h1
  //       )
  --------------------------------------------------------------------------------------
  //2ème solution pour créer un composant avec fonction fléchée
  //ATTENTION: les fonctions fléchées sont utilisées uniquement pour des fonctions anonymes avec React
  const App = () => {//Toujours mettre const pour un composant, un composant ne sera jamais modifié, juste modifié mais dynamiquement
  //Pour les fonctions fléchées, on a pas besoin de mettre RETURN, ça return automatiquement
  };  

  export default App;
---------------------------------------------------------------------------------------------
  //3 ème solution avec class, utilisé au début de React ds les vieux codes
  class App extends Component {//On va créer un composant App et on hérite (extends) du composant de l'objet React qui a été déclaré ds Import
  render() {  //Cette méthode render sera appellé à chaque fois que le composant sera appelé aussi
  //On insérera ds le code html ci dessus avant return render(){} avant de pouvoir retourner quelque chose
  }
  }
  export default App;