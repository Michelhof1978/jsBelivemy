<div class="container">
  
  <div class="row justify-content-center">
    
    <div class="col-md-8">
      <h1 class="text-center mt-5">Bitcoin Price</h1>
      
      <div id="price" class="text-center">
        <span id="price_label">xxxx.xx</span> €
      </div>
    </div>
    
  </div>
  
</div>


h1 {
    color: #272343;
  }
  
  #price {
    font-size: 4em;
  }

//MIEUX VAUX 
  const url = 'https://blockchain.info/ticker';

function recupererPrix() {
  // Créer une requête
  let requete = new XMLHttpRequest(); // Créer un objet
  requete.open('GET', url); // Premier paramètre GET / POST, deuxième paramètr : url
  requete.responseType = 'json'; // Nous attendons du JSON
  requete.send(); // Nous envoyons notre requête

  // Dèss qu'on reçoit une réponse, cette fonction est executée
  requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response; // on stock la réponse
        let prixEnEuros = reponse.EUR.last;
        document.querySelector('#price_label').textContent = prixEnEuros;
      }
      else {
        alert('Un problème est intervenu, merci de revenir plus tard.');
      }
    }
  }
  console.log('Prix actualisé');
}

setInterval(recupererPrix, 1000);