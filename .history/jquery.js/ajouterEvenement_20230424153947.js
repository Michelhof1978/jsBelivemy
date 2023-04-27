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
// document.querySelector('h1').addEventListener('click', () => {
//   document.querySelector('h1').style.color = 'orange';
// });
// for(let i = 0; i < 2; i++) {
//   document.querySelectorAll('p')[i].addEventListener('click', () => {
//     document.querySelector('h1').style.color = 'orange';
//   });
// }

// Avec jQuery
// $('h1').click(() => {
//   $('h1').css('color', 'orange');
// });

$('p').click(() => {
    $('h1').css('color', 'orange');
  });
  
  // Pour utiliser les mêmes évènements JavaScript (plus facile)
  $('h1').on('mouseover', () => {
    $('#monId').addClass('important');
  });