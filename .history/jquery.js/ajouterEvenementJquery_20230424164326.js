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

  $('h1').hide();
$('h1').show();

// Ne retenez pas tout, comprenez juste comment ça fonctionne, internet est fait pour les développeurs

$('p').click(() => {
  // $('h1').toggle();
  // $('h1').fadeOut(); // ou fadeIn()
  // $('h1').fadeToggle();
  // $('h1').slideToggle();
  // $('h1').animate({
  //   opacity: .7, // seulement les propriétés qui ont une valeur numérique
  //   margin: 30
  // });
  $('h1').slideUp().slideDown().animate({ opacity: .7, margin: 30 });
  // ...
});