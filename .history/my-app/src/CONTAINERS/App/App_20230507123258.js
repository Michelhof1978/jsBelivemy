  //Un composant est monté, modifié ou démonté VOIR CI DESSOUS

  //Monté => Branche
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }
//   La méthode "componentDidMount" est une méthode du cycle de vie des composants React qui est appelée 
//   immédiatement après que le composant a été monté dans le DOM (Document Object Model) ou dans l'interface 
//   utilisateur. Cette méthode n'a pas de paramètres et ne renvoie rien.
// Dans l'exemple donné, la méthode "componentDidMount" affiche simplement un message de journalisation dans la 
// console, signalant que le composant a été monté.
// Cette méthode est souvent utilisée pour effectuer des tâches qui doivent être effectuées une fois que le 
// composant a été monté, telles que la récupération de données à partir d'une API, la configuration d'événements, 
// la mise en place de timers, ou la modification de l'état du composant.
// Il est important de noter que la méthode "componentDidMount" est appelée une seule fois, juste après que le 
// composant a été monté, et n'est donc pas appelée à chaque mise à jour du composant. Si vous souhaitez effectuer
//  des tâches qui doivent être effectuées à chaque mise à jour du composant, vous pouvez utiliser la méthode 
//  "componentDidUpdate".
// En résumé, la méthode "componentDidMount" est utilisée pour effectuer des tâches une fois que le composant a 
// été monté, telles que la récupération de données à partir d'une API, la configuration d'événements, ou la 
// modification de l'état du composant.
-------------------------------------------------
  //Modifié => Modification
  conponentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }
//   La méthode "componentDidUpdate" est une méthode du cycle de vie des composants React qui est appelée après qu'un
//    composant a été mis à jour, c'est-à-dire après que les nouvelles props ou le nouvel état ont été appliqués et
//     que le composant a été rendu à nouveau dans le DOM (Document Object Model) ou dans l'interface utilisateur. 
//     Cette méthode prend en deux paramètres : prevProps et prevState qui représentent respectivement les anciennes
//      props et l'ancien état du composant.
// Dans l'exemple donné, la méthode "componentDidUpdate" affiche simplement un message de journalisation dans la 
//   console, signalant que le composant a été mis à jour.
//   Cette méthode est souvent utilisée pour effectuer des tâches qui doivent être effectuées après que le composant
//    a été mis à jour, telles que la mise à jour des données d'un composant enfant, la modification de l'état du 
//    composant en fonction des nouvelles props ou de l'ancien état, ou la mise à jour de l'interface utilisateur en
//     fonction des nouvelles données.
//   Il est important de noter que la méthode "componentDidUpdate" doit être utilisée avec précaution, car les mises
//    à jour fréquentes peuvent affecter les performances de l'application. Par conséquent, il est recommandé
//     d'utiliser cette méthode uniquement lorsque cela est nécessaire.
//   En résumé, la méthode "componentDidUpdate" est utilisée pour effectuer des tâches après que le composant a été 
//   mis à jour, telles que la mise à jour des données d'un composant enfant, la modification de l'état du composant
//    ou la mise à jour de l'interface utilisateur en fonction des nouvelles données.

------------------------------------------------
  //Démonté => Débranché
  componentWillUnmount() {
    console.log('[App.js] componentWillMount');
  }
//   //La méthode "componentWillUnmount" est une méthode du cycle de vie des composants React qui est appelée juste 
//   avant qu'un composant ne soit retiré du DOM (Document Object Model) ou de l'interface utilisateur. 
//   Cette méthode n'a pas de paramètres et ne renvoie rien.
// Dans l'exemple donné, la méthode "componentWillUnmount" affiche simplement un message de journalisation dans la 
// console, signalant que le composant est sur le point d'être démonté.
// Cette méthode est souvent utilisée pour effectuer des tâches de nettoyage ou des opérations nécessaires avant que
//  le composant ne soit retiré de l'interface utilisateur. Par exemple, elle peut être utilisée pour annuler des 
//  abonnements à des événements, fermer des connexions réseau, libérer des ressources ou arrêter des animations.
// Il est important de noter que la méthode "componentWillUnmount" ne doit pas être utilisée pour effectuer des mises 
// à jour de l'état ou des props du composant, car ces mises à jour n'auront aucun effet après que le composant ait été démonté.
// En résumé, la méthode "componentWillUnmount" est utilisée pour effectuer des tâches de nettoyage ou des opérations
//  nécessaires avant que le composant ne soit retiré de l'interface utilisateur, et ne doit pas être utilisée pour 
//  effectuer des mises à jour de l'état ou des props du composant.
----------------------
shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    if (nextProps.no
    return false;

}
  //La méthode "shouldComponentUpdate" est une méthode du cycle de vie des composants React qui permet de contrôler
  //  si un composant doit être mis à jour ou non. Cette méthode est appelée avant que le composant ne soit mis à 
  //  jour et prend en deux paramètres : nextProps et nextState qui représentent respectivement les prochaines props
  //  et l'état suivant du composant.Dans l'exemple donné, la méthode "shouldComponentUpdate" retourne toujours
  //  "false", ce qui signifie que le composant ne sera jamais mis à jour, même si de nouvelles props ou un nouvel 
  //  état sont reçus. En outre, un message est imprimé dans la console pour signaler que la méthode 
  //  "shouldComponentUpdate" a été appelée.
  //  Cette approche est utile dans les cas où le développeur sait que les mises à jour du composant ne sont pas 
  //  nécessaires ou qu'elles sont trop coûteuses en termes de performance, car elle permet d'éviter des mises à 
  //  jour inutiles qui pourraient ralentir l'application. Cependant, il convient de noter que l'utilisation 
  //  systématique de cette méthode peut empêcher certaines mises à jour nécessaires de se produire, ce qui peut 
  //  entraîner des erreurs ou des problèmes dans l'application. Par conséquent, il est important de bien comprendre
  //   l'utilisation de cette méthode et de l'utiliser avec précaution.
    ------------------------------------------------------------------------------------------------------------
  
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
  maintenance: false //"maintenance: false" dans le contexte de React est une propriété utilisée pour définir si une application est en cours de maintenance ou non. Lorsque cette propriété est définie sur "false", cela signifie que l'application n'est pas en maintenance et est donc en cours d'exécution normale.
                    //En d'autres termes, cette propriété indique que l'application est prête à être utilisée et que les utilisateurs peuvent interagir avec elle sans aucune interruption planifiée pour la maintenance ou la mise à jour.
                    //Il convient de noter que cette propriété est souvent utilisée en conjonction avec d'autres options de configuration dans les fichiers de configuration de l'application React, telles que les variables d'environnement, pour permettre aux développeurs de contrôler l'état de l'application en fonction des besoins de l'utilisateur.
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