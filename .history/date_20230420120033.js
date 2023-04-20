// 1er janvier 1970 à minuit UTC (londres)

let dateActuelle = Date();
console.log(dateActuelle); // norme anglo-saxonne

let dateEnSecondes = Date.now();
console.log(dateEnSecondes);
------------------------------------------------
let dateActuelle = new Date();
let dateEnSecondes = new Date(Date.now());
let datePrecise = new Date(2019, 11, 09, 22, 25);
// Au-dessus :
//   - annee (obligatoire)
//   - mois (obligatoire) qui commence par 0

//   - jour (facultatif) qui commence par 1
//   - heure (facultatif) qui commence par 0
//   - minute (facultatif) qui commence par 0
//   - secondes (facultatif) qui commence par 0
//   - millisecondes (facultatif) qui commence par 0

console.log(dateActuelle);
console.log(dateEnSecondes);
console.log(datePrecise);
--------------------------------------------------------
let dateActuelle = new Date();

console.log(dateActuelle.getDay()); // jour de la semaine (0 pour dimanche, 6 pour samedi)
console.log(dateActuelle.getFullYear()); // année
console.log(dateActuelle.getDate()); // jour du mois

console.log(dateActuelle.getUTCDay());
// Renvoi la date pour l'heure UTC (donc de Londres)
// Les fonctions sont identiques, on ajoute simplement UTC

dateActuelle.setFullYear(2750);
console.log(dateActuelle.getFullYear());
----------------------------------------------------------

