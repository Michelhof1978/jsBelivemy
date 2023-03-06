//Demander des renseignements :
const age = prompt("Entrez votre age");
alert("Bonjour, vous avez " + age + " ans.");
//Demander une confirmation :
if(confirm('Souhaitez-vous confirmer ?')) {
  // Oui
  alert('Ok');
}
else {
  // Non
  alert('Annulation');
}
