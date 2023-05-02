// -Array
// -Object
// -function

//ON ne peut pas copier un type par reference
Exemple:
let mon Objet = {//
    voiture: 'tesla',
}
console.log(monObjet.voiture);

let monAutreObjet = monObjet; //Créer un pointeur, une reference (pas une copie)
console.log(monAutreObjet.voiture);//résultat tesla

//Modifie??
monAutreObjet.voiture = "toyota";
console.log(monAutreObjet.voiture);
console.log(monObjet.voiture);