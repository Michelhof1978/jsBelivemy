import React, { Component } from "react";//Importer la librairie 
import './Eleve.css'//On importe le css

class Eleve extends Component {//On hérite la class eleve
        state = {//State est un object React qui permet de gérer les données
                eleves: [//On crée un tableau d'objets et ds chaque tableau, il y aura un object javascript
                    { nom: 'eleve', moyenne/ }
                ]

        }; //

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