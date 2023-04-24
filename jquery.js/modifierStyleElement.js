<h1 class="title">Bienvenue</h1>
<p id="monId">Ceci est un div</p>
<p class="maClass">Ceci est un div également</p>


html, body {
    font-family: arial;
    padding: 15px;
  }
  
  .important {
    font-size: 1.4em;
    text-decoration: underline;
    font-weight: bold;
  }

  // Avec JavaScript
document.querySelector('h1').style.color = 'orange';
document.querySelector('h1').style.color; // renvoie la valeur de color
document.querySelector('#monId').className = 'important';
// Supprimer une seule classe sans supprimer les autres ? Impossible
// document.querySelectorAll('p').style.color = 'green'; // ne fonctionne pas

// Avec jQuery
$('h1').css('color', 'orange');
$('h1').css('color'); // renvoie la valeur de color
$('#monId').addClass('important'); // ajoute une classe
$('#monId').removeClass('important'); // supprime une classe
$('p').css('color', 'green');




<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>