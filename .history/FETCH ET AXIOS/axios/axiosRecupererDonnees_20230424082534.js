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

  const url = 'https://blockchain.info/ticker';

async function recupererPrix() {
  // Créer une requête
//   let requete = new XMLHttpRequest(); // Créer un objet
//   requete.open('GET', url); // Premier paramètre GET / POST, deuxième paramètr : url
//   requete.responseType = 'json'; // Nous attendons du JSON
//   requete.send(); // Nous envoyons notre requête

//   // Dèss qu'on reçoit une réponse, cette fonction est executée
//   requete.onload = function() {
//     if (requete.readyState === XMLHttpRequest.DONE) {
//       if (requete.status === 200) {
//         let reponse = requete.response; // on stock la réponse
//         let prixEnEuros = reponse.EUR.last;
//         document.querySelector('span').textContent = prixEnEuros;
//       }
//       else {
//         alert('Un problème est intervenu, merci de revenir plus tard.');
//       }
//     }
//   }
//   console.log('Prix actualisé');
//   const requete = await fetch(url, {
//     method: 'GET'
//   });
  
//   if(!requete.ok) {
//     alert('Un problème est survenu.');
//   } else {
//     let donnees = await requete.json();
//     // console.log(donnees);
//     document.querySelector('span').textContent = donnees.EUR.last;
//   }


  axios.get(url)
    .then(function(donnees) {
      // console.log(donnees);
    document.querySelector('span').textContent = donnees.data.EUR.last;
    })
    .catch(function(erreur) {
      alert('Un problème est survenu');
    })
  .then(function () {
    console.log('mise à jour effectuée');
  });
}

setInterval(recupererPrix, 1000);

