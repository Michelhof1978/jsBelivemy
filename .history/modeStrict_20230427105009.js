//Le mode strict permet de détécter les erreurs de code là où le navigateur ne va pas voir

// Le mode strict : doit être placer au tout début d'un fichier js si on veut utiliser toute la page du code ou alors cibler un morceau de code
// "use strict";

prenom = "John";
console.log(prenom);

direBonjour();
addition(7, 1);

function direBonjour() {
  // "use strict";=>
  nom = "Doe";
  console.log(nom);
}

function addition(nombreA, nombreA) {
  "use strict";
  console.log(nombreA + nombreA);
}