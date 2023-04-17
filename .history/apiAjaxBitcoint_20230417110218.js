const url = 'https://blockchain.info/ticker';

function recupererPrix() {
  // Créer une requête AJAX
  let requete = new XMLHttpRequest(); // Créer un objet
  requete.open('GET', url); // Premier paramètre GET / POST, deuxième paramètr : url
  requete.responseType = 'json'; // Nous attendons du JSON
  requete.send(); // Nous envoyons notre requête

  // Dès qu'on reçoit une réponse, cette fonction est executée
  requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {//readyState = on vérifie l état actuel de notre requête/Alétat accompli de notre requete XMLHttRequest, DONE est une propriété de l objet XMLHttRequest
        if (requete.status === 200) {
        let reponse = requete.response; // on stock la réponse de notre requete si OK(200), cela veut dire que l on stocke tout le fichier Json récupéré
        let prixEnEuros = reponse.EUR.last;//
        document.querySelector('#price_label').textContent = prixEnEuros;
      }
      else {
        alert('Un problème est intervenu, merci de revenir plus tard.');//Si pas de réponse 200, il y a donc une érreur
      }
    }
  }
  console.log('Prix actualisé');
}

setInterval(recupererPrix, 1000);