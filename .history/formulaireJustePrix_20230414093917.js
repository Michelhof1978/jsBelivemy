<div class="container">
  
  <div class="row justify-content-center mt-5">
    <header>
      Le Juste Prix
    </header>
  </div>
  
  <!-- Formulaire -->
  <div class="row justify-content-center mt-5 mb-4">   
    <div class="col-lg-8">   
      <div class="bg-light p-5 shadow">
        
        <form id="formulaire">
          <div class="row">
            <div class="col">
              <input id="prix" class="form-control" placeholder="Devinez le prix ! (entre 0 et 1 000)" />
            </div>
            <button type="submit" class="btn btn-primary">Deviner</button>
          </div>
          <small class="text-danger">Vous devez rentrer un nombre.</small>
        </form>
        
      </div>  
    </div>
  </div>
  
  <!-- Instructions -->
  <div class="row justify-content-center">
    <div id="instructions" class="col-lg-8"></div>
  </div>
  
</div>


<style>
html, body {
  background-color: #232020;
  min-width: 500px;
}

header {
  color: #ff7315;
  text-align: center;
  font-size: 3em;
}

#instructions {
  color: white;
}

.instruction {
  padding: 15px;
  margin: 10px 0;
}

.plus {
  background-color: #f67280;
}

.moins {
  background-color: #ffa372;
}

.fini {
  background-color : #0c9463;
}
</style>

<script>
// Etape 1 - Sélectionner nos éléments
let input         = document.querySelector('#prix');
let error         = document.querySelector('small');
let formulaire    = document.querySelector('#formulaire');

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 1001);
let coups           = 0;
let nombreChoisi;

// Etape 6 - Créer la fonction vérifier
function verifier(nombre) {
  
    let instruction = document.createElement('div');
  
    if(nombre < nombreAleatoire) {
      // C'est plus
      instruction.textContent = "#" + coups + " ( " + nombre + " ) C'est plus !";
      instruction.className = "instruction plus";
    }
    else if(nombre > nombreAleatoire) {
      // C'est moins
      instruction.textContent = "#" + coups + " ( " + nombre + " ) C'est moins !";
      instruction.className = "instruction moins";
    }
    else {
      // Félicitations vous avez trouvé le juste prix !
      instruction.textContent = "#" + coups + " ( " + nombre + " ) Félicitations vous avez trouvé le juste prix !";
      instruction.className = "instruction fini";
      input.disabled = true;
    }
  
    // Ajouter l'élément devant les autres
  document.querySelector('#instructions').prepend(instruction);
</script>