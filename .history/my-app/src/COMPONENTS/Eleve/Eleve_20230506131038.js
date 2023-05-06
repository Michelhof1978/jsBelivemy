import React, { Component } from "react";//Importer la librairie 
import './Eleve.css'//On importe le css

class Eleve extends Component {//On hérite la class eleve
    
    return (
    <div className = "eleve">//Element parent, obligatoire pour créer un composant
        <h1>{this.props.nom}</h1>this: on prends l objet en cours et on prends la propriété nom
        <p>Moyenne scolaire : <b>{this.props.moyenne}/20</b></p>

        <p> Age :{Math.floor (Math.random()) * 100}</p>//On insére ici du js ds le jsx //On calcul l âge aleatoire et on arrondit
        <i>{this.props.children}</i>
    </div>
    )
 }
}
export default Eleve; //On veut exporter par defaut, ce qu on a precisé maintenant

//AUTRE FACON DE FAIRE LE CODE CI DESSUS A PRIVILEGIER
const Eleve = props => <div className = "eleve">//On peut aussi ajouter des paranthèses si l on le souhaite
         <h1>{props.nom}</h1>//Identique à this
         <p>Moyenne scolaire : <b>{props.moyenne}/20</b></p>
     </div>;
}
    export default Eleve;

/*STATEFULL / CONTAINER: Composant qui gère un stae
  STATELESS / Component : Composant qui gère pas de state
  
  La bonne méthode
  */