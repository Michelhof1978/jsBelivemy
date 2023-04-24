Dans ce projet, vous allez pouvoir vous exercer sur le stockage de données, que nous avons vu dans la section 
précédente.

Ce que vous allez faire : créer un bouton qui permettra de passer du mode sombre au mode clair et qui se souviendra 
du choix de l'utilisateur la prochaine fois qu'il ira sur le site.
Avant de commencer à coder nos premières lignes de code, il faut comprendre comment va fonctionner notre programme.

Voici comment va fonctionner notre programme :

L'utilisateur arrive sur le site : existe-t-il un localStorage qui s'appelle "theme" ?

Oui

Sa valeur est égale à "sombre" ?

Oui : on appelle la fonction modeSombre()

Non : on ne fait rien

Non : on ne fait rien

L'utilisateur clique sur le bouton pour changer de thème

Body a-t-il une classe "dark" ?

Oui

On retire les classes de Body

On change le texte du bouton en "Thème sombre"

On définit le localStorage avec le nom "theme" sur "clair"

Non

On appelle la fonction modeSombre()

La fonction modeSombre() va se charger :

De mettre la classe de Body sur "dark"

De changer le texte du bouton en "Thème clair"
De définir le localStorage avec le nom "theme" sur "sombre"

Vous vous demandez pourquoi créer une fonction modeSombre() 
et ne pas créer une fonction modeClair() ? Vous allez comprendre dans les prochaines étapes !

Dans cette première vraie étape, je vous invite à sélectionner les éléments qui vous seront nécessaires :
Le bouton pour changer le thème actuel (#mode)
Le span qui contient le texte du bouton (span)