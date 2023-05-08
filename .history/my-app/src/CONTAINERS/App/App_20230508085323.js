
  //Ce composant est un  STATEFULL / CONTAINER: Composant qui gère un state

  //IMPORTANT!!!! Le state et les Props ? Nous pouvons ainsi gérer les données avec le state, et envoyer ces données à nos composants grâce aux props.
 
  import React,{ useState }/*{ Component } */from 'react';//On doit importer l objet component de  la librairie React pour pouvoir créer un composant du site
  import './App.css';//On importe le css

  // Composant
  import Eleve from '../../COMPONENTS/Eleve/Eleve';

  //1ère solution pour créer un composant, le plus utilisé que la fonction fléchée
  //Ce code ci dessous permet uniquement de récupérer des informations.
-------------
  const App = () => {//Toujours mettre une majuscule pour nommer une fonction quand on crée un composant
      constructor(props) {
        super(props);
        console.log('[App.js] Constructor');
      }
  //  render() ;Voir code plus bas, on mets render pour les anciens code au tout début de React mais aujourd hui, on ne l utilise plus
-------
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
const [maintenance, setMaintenance] = useState(false);
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
  -------------------------------------------------------------------------------------------------------
  EVITER DE FAIRE LE CODE CI DESSUS? UTILISER PLUTOT LES HOOKS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   Les hooks sont des fonctions spéciales de React qui permettent aux développeurs de gérer l'état et le cycle de vie des composants de manière plus simple et plus expressive. Les hooks ont été introduits dans React 16.8 pour résoudre certains problèmes liés à l'utilisation de classes et de méthodes du cycle de vie des composants.

// Les hooks permettent de :
// 1. Utiliser l'état et d'autres fonctionnalités de React sans avoir besoin de créer une classe.
// 2. Réutiliser la logique d'un composant sans avoir besoin de créer une hiérarchie de composants.
// 3. Utiliser le state et les effets dans des fonctions, plutôt que d'avoir à écrire des classes.

// Les hooks les plus couramment utilisés sont :
// 1. useState : permet de gérer l'état d'un composant en utilisant un tableau qui contient la valeur de l'état actuel et une fonction qui permet de mettre à jour cet état.
// 2. useEffect : permet d'exécuter du code lorsqu'un composant a été monté, mis à jour ou démonté.
// 3. useContext : permet de passer des données entre les composants sans avoir besoin de passer des propriétés manuellement.
// 4. useRef : permet de référencer un élément DOM dans un composant et d'y accéder à partir de fonctions.

// Il est important de noter que les hooks doivent être utilisés uniquement dans des composants fonctionnels, et non dans des classes. Les hooks ne sont pas rétrocompatibles et ne peuvent pas être utilisés dans des versions antérieures de React.
// En résumé, les hooks sont des fonctions spéciales de React qui permettent aux développeurs de gérer l'état et le cycle de vie des composants de manière plus simple et plus expressive. Les hooks les plus couramment utilisés sont useState, useEffect, useContext et useRef.
  
const [eleves, setEleves] = useState([
  {
    nom: 'Eva Dupont',
    moyenne: 15,
    citation: 'Bienvenue',
  },

  { nom: 'michel hoffmann',
    moyenne: 5, 
    citation: null},

  ]);

  const [maintenance, setMaintenance] = useState(false);
  // Dans const [maintenance, setMaintenance] = useState(false); , il s'agit d'une utilisation du hook "useState" de React pour déclarer une variable d'état 
  // nommée "maintenance" et une fonction "setMaintenance" pour mettre à jour cette variable.
  // La variable d'état "maintenance" est initialisée à "false" à l'aide de la fonction "useState". Cela signifie 
  // que, dans un premier temps, l'application n'est pas en mode maintenance.
  // La fonction "setMaintenance" permet de mettre à jour la valeur de la variable d'état "maintenance" et de
  //  déclencher une mise à jour du composant React qui utilise cette variable d'état. Lorsqu'elle est appelée, 
  //  la fonction "setMaintenance" prend un nouveau booléen en paramètre, qui remplace la valeur précédente de la 
  //  variable d'état "maintenance".
  // L'utilisation de la variable d'état "maintenance" et de la fonction "setMaintenance" permet aux développeurs 
  // de React de gérer dynamiquement l'état de l'application et d'effectuer des actions en fonction de cet état. 
  // Par exemple, si "maintenance" est défini sur "true", l'application peut afficher un message de maintenance ou
  //  empêcher les utilisateurs d'effectuer certaines actions.
  
  //Méthode
   const buttonClickedHandler = nouveauNom => {
      const nouveauxEleves = [...eleves];
      nouveauxEleves[0].nom = nouveauNom; //Pour modifier le nom lors du clic sur boutton
      setEleves(nouveauxEleves);
   }

// Dans cet exemple ci dessus, deux hooks "useState" sont utilisés pour définir des états dans un composant fonctionnel de 
// React.
// Le premier hook "useState" permet de définir un état "eleves" qui est un tableau d'objets représentant des élèves,
//  avec les propriétés "nom", "moyenne" et "citation". La valeur initiale de l'état est définie comme un tableau 
//  avec deux éléments. Cet état peut être mis à jour avec la fonction "setEleves", qui prend un nouveau tableau d'objets en paramètre.
// Le deuxième hook "useState" permet de définir un état "maintenance" qui est un booléen représentant l'état de
//  maintenance de l'application. La valeur initiale de l'état est définie comme "false". Cet état peut être mis à
//  jour avec la fonction "setMaintenance", qui prend un nouveau booléen en paramètre.
// L'utilisation des hooks "useState" permet de définir et de mettre à jour l'état du composant de manière simple 
// et expressive. Cela permet aux développeurs de React de créer des composants fonctionnels avec des fonctionnalités dynamiques et interactives sans avoir à utiliser des classes et des méthodes du cycle de vie des composants.
  
//Plus besoins de class et de state avec les hooks, on utilise les states de cette façon avec hook

   //1ER COMPOSANT
   <Eleve nom = {eleves[0].nom} /> // On enlève this et state par rapport au code ci dessus
   moyenne = {eleves[0].moyenne}>
   clic = {() => buttonClickedHandler('lea')}

   {eleves[0].citation}
   </Eleve> 

//2EME COMPOSANT
<Eleve nom = {eleves[1].nom}
  moyenne = {eleves[1].moyenne}>
  clic = {() => buttonClickedHandler('nicolas')}
{eleves[1].citation}
</Eleve>

// Dans cet exemple ci dessus, il s'agit d'une utilisation d'un composant personnalisé nommé "Eleve" avec des 
// propriétés spécifiques.
// Le composant "Eleve" est appelé avec des propriétés passées en paramètres, dans ce cas "nom", "moyenne" et
//  "clic". Les propriétés "nom" et "moyenne" sont définies en utilisant les données du deuxième élément du tableau 
//  "eleves" (c'est-à-dire l'objet représentant le deuxième élève). La propriété "clic" est définie en passant une 
//  fonction fléchée qui appelle une méthode "buttonClickedHandler" avec le paramètre "nicolas".
// Le texte à afficher dans le composant "Eleve" est défini à l'aide de la propriété "citation", qui est également
//  extraite du deuxième élément du tableau "eleves".
// En utilisant le composant personnalisé "Eleve", les développeurs peuvent créer des composants réutilisables et
//  maintenables, qui peuvent être utilisés avec différentes données et propriétés pour afficher des éléments dans
//   une interface utilisateur.