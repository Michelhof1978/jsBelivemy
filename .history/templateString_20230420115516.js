// Avant
// let prenom = "John";
// let bonjour = "Bonjour " + prenom;
// console.log(bonjour);

// Maintenant
// let prenom = "John";
// let bonjour = `Bonjour ${prenom}`;
// console.log(bonjour);

// Avec les dates
// let date = new Date().getFullYear();
// let copyright = `${date} © Believemy`;//
// console.log(copyright);

// Ou encore plus pratique : des calculs
let aliments = { fruits: 5, legumes: 1, biscuits: 75 }//Objets litéraux
let panier = `Dans votre panier, vous avez ${aliments.fruits + aliments.legumes + aliments.biscuits} articles.`;
console.log(panier);