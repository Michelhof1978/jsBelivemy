//TYPES PAR REFERENCE
// -Array
// -Object
// -function

//ON ne peut pas copier un type par reference IMPORTANT A SAVOIR !!!! Il faut créer une véritable copie
Exemple:
let mon Objet = {//objet initial
    voiture: 'tesla',
}
console.log(monObjet.voiture);// Resultat tesla

let monAutreObjet = monObjet; //Créer un pointeur, une reference (pas une copie), 
console.log(monAutreObjet.voiture);//résultat tesla

//Modifie??
monAutreObjet.voiture = "toyota";//on modifie l objet
console.log(monAutreObjet.voiture);//résultat toyota
console.log(monObjet.voiture);//résultat toyota

//Pour pouvoir copier un objet, il faudra utiliser le REST parameter
// Exemple:
let mon Objet = {//objet initial
    voiture: 'tesla',
}
console.log(monObjet.voiture);// Resultat tesla

let monAutreObjet = {...monObjet}; //Créer une copie avec REST parameter), javascript va copier toutes les valeurs de mon nouvel objet
console.log(monAutreObjet.voiture);//résultat tesla

//Modifie??
monObjet.voiture = "toyota";
console.log('monAutreObjet :' + monAutreObjet.voiture);//résultat tesla
console.log('monObjet : ' + monObjet.voiture);//résultat toyota
----------------------------------------------------
//TYPES PRIMITIFS
//On peut copier sa valeur et la modifier
// null
// undefined
// Boolean
// Number
// String

let nombreA = 5;
let nombreB = nombreA;//Créer une copie (pas un pointeur)

console.log(nombreB);//resultat 5

nombreB = 10;
console.log(nombreB);//resultat 10

console.log(nombreA); //resultat 5