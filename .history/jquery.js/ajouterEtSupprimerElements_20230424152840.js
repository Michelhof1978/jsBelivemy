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
document.querySelector('h1').prepend('Oh : ');
document.querySelector('h1').append(' !');
document.querySelectorAll('p');

// Avec jQuery
$('h1').before("<div>Hello</div>"); // Ajoute un élément avant
$('h1').after("<div>World</div>"); // Ajouter un élément après
$('h1').prepend('Oh : '); // Ajouter un élément devant
$('h1').append(' !'); // Ajouter un élément derrière
$('p').remove();