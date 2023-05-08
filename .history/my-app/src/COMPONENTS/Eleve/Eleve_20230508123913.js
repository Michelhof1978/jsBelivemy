
                      //Ce composant est un  STATELESS / Component : Composant qui gère pas de state

import React,{useEffect} /*{ Component }*/ from "react";//Importer la librairie 
import './Eleve.css'//On importe le css

function Eleve(props) {
        //componentDidmount
            useEffect(() => {
                console.log('[Eleve.js] componentDidMount');
            },
        //componentDidUpdate
        useEffect(() => {
            console.log('[Eleve.js] componentDidUpdate');
        }
        //componentWillUnmount
        useEffect(() => {
            console.log('[Eleve.js] componentDidMount');
        }
------------------------------------------------------------------------------------------------
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
-------------------
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

---------------------
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
    if (nextProps.nom != this.props.nom) {
        return true;
    }
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
    ---------------------------------------------------------------------------------------------
    
    return (
    <div className = "eleve">//Element parent, obligatoire pour créer un composant
        <h1 onClick = {props.clic} > {this.props.nom} </h1>//this: on prends l objet en cours et on prends la propriété nom
       //On passe la référence de ma méthode (onClick = {this.props.clic} )
        <p>Moyenne scolaire : <b>{props.moyenne}/20</b></p>

        <p> Age :{Math.floor (Math.random()) * 100}</p>//On insére ici du js ds le jsx //On calcul l âge aleatoire et on arrondit
        <i>{props.children}</i>// Va détecter automatiquement l enplacement children par rapport à lélément parent
    </div>
    );
 }

export default Eleve; //On veut exporter par defaut, ce qu on a precisé maintenant
---------------------------------------------------------------------------------------------------
//AUTRE FACON DE FAIRE LE CODE CI DESSUS A PRIVILEGIER
const Eleve = props => <div className = "eleve">//On peut aussi ajouter des paranthèses si l on le souhaite
         <h1>{props.nom}</h1>//Identique à this
         <p>Moyenne scolaire : <b>{props.moyenne}/20</b></p>
     </div>;
}
    export default Eleve;

/*STATEFULL / CONTAINER: Composant qui gère un state
  STATELESS / Component : Composant qui gère pas de state
  
  La bonne méthode: pratiquer le moins de containers possible
  */