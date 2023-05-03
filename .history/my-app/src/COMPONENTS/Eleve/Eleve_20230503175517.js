import React, { Component } from "react";//Importer la librairie 
import './Eleve.css'//On importe le css

class Eleve extends Component {
    render(){

    return (
    <div className = "eleve">
        <h1>Elon Musk</h1>
        <p>Moyenne scolaire : <b>{props.moyenne}/20</b></p>
    </div>;
    )
    }

export default Eleve; //On veut exporter par defaut, ce qu on a precisé maintenant