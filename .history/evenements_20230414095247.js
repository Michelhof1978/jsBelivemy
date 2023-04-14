Voici une fiche technique résumant l'ensemble des évènements principaux.

Les écouteurs "on" et les propriétés JavaScript
onfocus - Quand l'utilisateur sélectionne l'élément

onchange - Quand l'utilisateur change la valeur de l'élément

onclick - Quand l'utilisateur clique sur l'élément

ondblclick - Quand l'utilisateur double-clique sur l'élément

onkeypress - Quand l'utilisateur appuie sur une touche du clavier dans l'élément


Les évènements avec addEventListener
click - Quand l'utilisateur clique sur l'élément

mouseover - Quand l'utilisateur passe avec sa souris au-dessus d'un élément

mouseout - Quand l'utilisateur sort avec sa souris d'un élément

copy - Quand l'utilisateur copie un élément

cut - Quand l'utilisateur coupe un élément

paste - Quand l'utilisateur colle un élément
-------------------------------------------------------------------------------------------------------------------
//Evenement ON
<a onclick="return confirm('Etes-vous sûr de vouloir supprimer cet article ?')" href="https://believemy.com">Supprimer cet article</a>

<button onmouseover="document.body.style.backgroundColor='orange'"
        onmouseout="document.body.style.backgroundColor='white'">Passez au-dessus de moi</button>

        // Méthode la plus ancienne
// Déconseillé car vieillissante
// On insère un attribut HTML lié à l'évènement qu'on veut capturer
// onClick, onMouseOver, onMouseOut
---------------------------------------------------------------------------------------------------------------
//Les ecouteurs via les propriétés js
<a href="#">Supprimer cet article</a>

<button>Passez au-dessus de moi</button>

<script>
let a = document.querySelector('a');
let button = document.querySelector('button');

// a.onclick = function(){
//   if(confirm('Etes-vous sûr ?')) {
//     location.href="https://believemy.com"
//   }
// }

a.onclick = () => {
  if(confirm('Etes-vous sûr ?')) {
    location.href="https://believemy.com"
  }
}

button.onmouseover = () => {
  document.body.style.backgroundColor = 'orange';
}

button.onmouseout = () => {
  document.body.style.backgroundColor = 'white';
}
</script>
----------------------------------------------------------------------------------------------------------------
//Utiliser addEventListener avec JavaScript
<a href="#">Supprimer cet article</a>

<button>Passez au-dessus de moi</button>

<script>
let a = document.querySelector('a');
let button = document.querySelector('button');

a.addEventListener('click', (e) => {
  if(confirm('Etes-vous sûr ?')) {
    location.href = "https://believemy.com";
  }
});

button.addEventListener('mouseover', () => {
  document.body.style.backgroundColor = 'orange';
});

function backgroundWhite() {
  document.body.style.backgroundColor = 'white';
}

button.addEventListener('mouseout', backgroundWhite);
button.addEventListener('mouseout', () => {
  document.body.style.fontFamily = 'arial';
});

button.removeEventListener('mouseout', backgroundWhite);
</script>
-----------------------------------------------------------------------------------------------------------------
//Gérer la propagation des évènements avec JavaScript
<article style="background-color: silver">
  <h1 style="display: inline">Titre de l'article</h1>
</article>

<style></style>