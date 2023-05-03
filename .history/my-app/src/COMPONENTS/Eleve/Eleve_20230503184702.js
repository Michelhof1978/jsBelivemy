import React, { Component } from "react";//Importer la librairie 
import './Eleve.css'//On importe le css

class Eleve extends Component {//On hérite la class eleve
   

    return (
    <div className = "eleve">//Element parent, obligatoire pour créer un composant
        <h1>{this.props.nom}</h1>on peut faire this.prop: on prends l objet en cours et on prends la propriété nom mais on peut l enlever
        <p>Moyenne scolaire : <b>{props.moyenne}/20</b></p>
    </div>;
    );
 }

export default Eleve; //On veut exporter par defaut, ce qu on a precisé maintenant