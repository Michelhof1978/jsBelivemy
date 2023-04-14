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

