// -Array
// -Object
// -function

//ON ne peut pas copier un type par reference
Exemple:
let mon Objet = {//objet initial
    voiture: 'tesla',
}
console.log(monObjet.voiture);// Resultat tesla

let monAutreObjet = monObjet; //Créer un pointeur, une reference (pas une copie), on modifie l objet
console.log(monAutreObjet.voiture);//résultat tesla

//Modifie??
monAutreObjet.voiture = "toyota";
console.log(monAutreObjet.voiture);
console.log(monObjet.voiture);