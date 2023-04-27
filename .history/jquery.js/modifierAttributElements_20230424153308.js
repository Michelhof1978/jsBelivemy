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
document.querySelector('h1').getAttribute('class');
document.querySelector('h1').setAttribute('style', 'text-transform: lowercase');
document.querySelectorAll('p');

// Avec jQuery
$('h1').attr('class'); // sélectionne un attribut
$('h1').attr('style', 'text-transform: lowercase'); // ajoute ou modifie un attribut
$('h1').after('<a href="https://wikipedia.com">Wikipedia</a>');
$('a').attr('href', 'https://believemy.com');
$('p');