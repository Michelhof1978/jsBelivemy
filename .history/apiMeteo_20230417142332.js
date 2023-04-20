

<div class="container">
  
  <div class="row justify-content-center">
    
    <div class="col-md-8">
      <!-- Titre -->
      <h1 class="text-center mt-5">Météo</h1>
      
      <!-- Ville / Temperature -->
      <div class="text-center">
        <span id="ville">paris</span>
        
        <div id="temperature">
          <span id="temperature_label">
            xx.x
          </span> °C
        </div>
      </div>
    </div>
    
  </div>
  
  <div class="row justify-content-center">  
    <div class="col-md-8 text-center">
      <!-- Changer de ville -->
      <div id="changer" class="mt-2 text-center p-3 text-white font-weight-bold text-uppercase d-inline-block">
        Changer de ville
      </div>
    </div>
    
  </div>
  
</div>

<style>
html, body {
  background: #2980B9;
  background: -webkit-linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9);
  background: linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9);
  min-width: 400px;
}

#ville {
  text-transform: capitalize; // Permets de mettre automatiquement une majuscule au debut de la ville
}

#temperature {
  font-size: 4em;
}

#changer {
  background: rgba(178, 223, 251, .3);
  cursor: pointer;
}
</style>

let villeChoisie = "saint-saulve";
recevoirTemperature(villeChoisie);

let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {
  villeChoisie = prompt('Quelle ville souhaitez-vous voir ?');
  recevoirTemperature(villeChoisie);
});

function recevoirTemperature(ville) {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=a2c110c02e86989d65348566c3ad09ff&units=metric';// q - pour spécifier la ville (ici la merveilleuse ville de Saint-Saulve)

  // appid - pour spécifier votre clé secrète (la mienne ne l'est plus désormais !)
  
  // units - pour spécifier que nous voulons la température en Celsius

  let requete = new XMLHttpRequest(); // Nous créons un objet qui nous permettra de faire des requêtes
  requete.open('GET', url); // Nous récupérons juste des données
  requete.responseType = 'json'; // Nous attendons du JSON
  requete.send(); // Nous envoyons notre requête

  // Dès qu'on reçoit une réponse, cette fonction est executée
  requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        // console.log(reponse);
        let temperature = reponse.main.temp;
        let ville       = reponse.name;
        // console.log(temperature);
        document.querySelector('#temperature_label').textContent = temperature;
        document.querySelector('#ville').textContent = ville;
      }
      else {
        alert('Un problème est intervenu, merci de revenir plus tard.');
      }
    }
  }
}