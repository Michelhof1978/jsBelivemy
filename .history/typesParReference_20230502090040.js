// -Array
// -Object
// -function

Exemple:
let mon Objet = {
    voiture: 'tesla',
}
console.log(monObjet.voiture);

let monAutreObjet = monObjet; //Créer un pointeur (pas une copie)
console.log(monAutreObjet.voiture);//résultat tesla

//Modifie??
monAutreObjet.voiture = "toyota";
console.log