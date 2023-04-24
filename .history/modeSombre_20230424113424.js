// Dans ce projet, vous allez pouvoir vous exercer sur le stockage de données, que nous avons vu dans la section 
// précédente.

// Ce que vous allez faire : créer un bouton qui permettra de passer du mode sombre au mode clair et qui se souviendra 
// du choix de l'utilisateur la prochaine fois qu'il ira sur le site.
// Avant de commencer à coder nos premières lignes de code, il faut comprendre comment va fonctionner notre programme.

// Voici comment va fonctionner notre programme :
// L'utilisateur arrive sur le site : existe-t-il un localStorage qui s'appelle "theme" ?
// Oui

// Sa valeur est égale à "sombre" ?
// Oui : on appelle la fonction modeSombre()
// Non : on ne fait rien
// Non : on ne fait rien

// L'utilisateur clique sur le bouton pour changer de thème
// Body a-t-il une classe "dark" ?
// Oui
// On retire les classes de Body
// On change le texte du bouton en "Thème sombre"
// On définit le localStorage avec le nom "theme" sur "clair"
// Non

// On appelle la fonction modeSombre()
// La fonction modeSombre() va se charger :
// De mettre la classe de Body sur "dark"
// De changer le texte du bouton en "Thème clair"
// De définir le localStorage avec le nom "theme" sur "sombre"

// Vous vous demandez pourquoi créer une fonction modeSombre() 
// et ne pas créer une fonction modeClair() ? Vous allez comprendre dans les prochaines étapes !

// Dans cette première vraie étape, je vous invite à sélectionner les éléments qui vous seront nécessaires :
// Le bouton pour changer le thème actuel (#mode)
// Le span qui contient le texte du bouton (span)

// Pour cette nouvelle étape, vous devrez rendre votre bouton fonctionnel.
// Pour cela, faites en sorte de détecter dès que l'utilisateur clique sur le bouton "Thème sombre".
// Une fois que vous avez réussi à détecter le clic de votre utilisateur, faites une condition pour 
// préparer la prochaine étape :

// L'élément Body a-t-il une classe 'dark' ?
// Allez, je vais vous aider un peu pour cette partie car nous ne l'avons pas encore vu ensemble. 
// Il va falloir récupérer toutes les classes de l'élément body grâce à la fonction .classList. 
// Cette fonction retourne un tableau de toutes les classes sur un élément.
// Vous devrez utiliser la fonction .contains('dark') pour vérifier si la classe 'dark' est déjà présente.

// Vous savez maintenant si votre élément Body possède déjà la classe 'dark'. Dans ce cas, rien de plus simple !
// Si la classe 'dark' est déjà présente, ceci veut dire que le thème actuel est le thème sombre. Donc :
// Retirez toutes les classes de l'élément Body
// Changez le texte du bouton grâce à votre élément span en "Thème sombre"
// Définissez un élément localStorage, qui s'appellera 'theme' et qui aura pour valeur 'clair'
// Si la classe 'dark' n'est pas déjà présente, alors nous sommes sur le thème clair. Donc :
// Appelez la fonction modeSombre(), nous la créerons dans la prochaine étape.

// Nous avons presque terminé. Nous devons maintenant créer la fonction modeSombre().

// Cette fonction devra :
// Ajouter la classe 'dark' sur l'élément Body
// Changer le texte du bouton grâce à l'élément span en "Thème clair"
// Définir avec localStorage un item qui s'appellera 'theme' et qui vaudra 'sombre'
// À partir d'ici, votre programme fonctionnera déjà ! Mais notre préférence n'est pas encore prise en compte... 
// Nous allons régler ce problème dans la prochaine étape !

// Dans cette dernière étape, vous devrez vérifier si l'utilisateur dispose déjà d'un item stocké sur son navigateur 
// qui s'appelle 'theme'. Si c'est le cas, c'est que notre utilisateur a déjà choisi son mode préféré.

// Vérifiez si l'élément 'theme' existe
// Il existe ? Sa valeur est-elle égale à 'sombre' ?
// Oui ? On appelle la fonction modeSombre()
// Non ? On ne fait rien
// Et voici pourquoi nous créons une fonction modeSombre() et pas modeClair() ! Nous utilisons deux fois les 
// instructions qui nous permettent de passer au mode sombre : quand l'utilisateur ouvre la page, et lorsqu'il 
// clique sur le bouton pour changer de thème.
// Or, nous n'aimons pas nous répéter. Donc, pour garder un code simple à maintenir, il faut créer une fonction 
// qui nous permettra de ne pas le faire.

--------------------------------------------------------------------------------
<body>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 mt-5 text-center">
        <h1>Bienvenue</h1>
        <p class="mt-3">Ce site est en construction. Il ne gère que le choix du thème pour le moment.</p>
      </div>
    </div>
    
    <div class="row justify-content-center">
      <div class="col-md-8 mt-5 text-center">
        <button id="mode">
          <i class="fas fa-moon"></i>
          <span>Thème sombre</span>
        </button>
      </div>
    </div>
  </div>
</body>

-----------------------------------------------------------------------------
html, body {
    font-family: arial;
    min-width: 300px;
  }
  
  button {
    border: 1px;
    border-radius: 15px;
    padding: 15px;
    cursor: pointer;
  }
  
  * {
    outline: 0;
  }
  
  .dark {
    background-color: #112F41;
    color: #ffffff;
  }
  
  .dark button {
    background: #144098;
    color: #fff;
  }
------------------------------------------------------------
  let button = document.querySelector('#mode');
let span   = document.querySelector('span');

if(localStorage.getItem('theme')){
  if(localStorage.getItem('theme') == 'sombre') {
    modeSombre();
  }
}

button.addEventListener('click', () => {
  if(document.body.classList.contains('dark')) {//
    document.body.className = '';
    // span.textContent = 'Thème sombre';
    localStorage.setItem('theme', 'clair');
  }
  else {
    modeSombre();
  }
});

function modeSombre() {
  document.body.className = 'dark';
//   span.textContent = 'Thème clair';
  localStorage.setItem('theme', 'sombre');
}

// Ce code sert à implémenter une fonctionnalité de mode sombre sur un site web. 
// Le code vérifie si l'utilisateur a précédemment sélectionné le mode sombre et l'applique s'il en est ainsi.
//  Sinon, il attend que l'utilisateur clique sur le bouton pour passer du mode clair au mode sombre et vice versa. 
//  Lorsque l'utilisateur clique sur le bouton, la classe 'dark' est ajoutée ou retirée à la balise body pour basculer
//   entre le mode sombre et le mode clair. Le texte du bouton est également mis à jour en conséquence.
//  Les préférences de l'utilisateur sont stockées localement dans le navigateur.