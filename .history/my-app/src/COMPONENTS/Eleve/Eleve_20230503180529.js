import React, { Component } from "react";//Importer la librairie 
import './Eleve.css'//On importe le css

class Eleve extends Component {//On hérite la class eleve
    render(){

    return (
    <div className = "eleve">//Element parent, obligatoire pour créer un composant
        <h1>{this.props.nom}</h1>this: on prends l objet
        <p>Moyenne scolaire : <b>/20</b></p>
    </div>;
    )
    }

export default Eleve; //On veut exporter par defaut, ce qu on a precisé maintenant