<h1 class="title">Bienvenue</h1>
<p id="monId">Ceci est un div</p>
<p class="maClass">Ceci est un div également</p>


// Avec JavaScript
document.querySelector('h1').textContent = 'Bonjour avec JavaScript';
// document.querySelectorAll('p').textContent = 'Ceci est un paragraphe'; impossible
document.querySelector('.maClass').innerHTML = '<p><b>HTML modifié</b></p>';

// Avec jQuery
$('h1').text('Bonjour avec jQuery');
// $('p').text('Ceci est un paragraphe');
$('.maClass').html('<p><b>HTML modifié avec jQuery</b></p>');





<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>