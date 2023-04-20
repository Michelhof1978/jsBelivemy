// q - pour spécifier la ville (ici la merveilleuse ville de Saint-Saulve)

// appid - pour spécifier votre clé secrète (la mienne ne l'est plus désormais !)

// units - pour spécifier que nous voulons la température en Celsius

<div class="container">
  
  <div class="row justify-content-center">
    
    <div class="col-md-8">
      <!-- Titre -->
      <h1 class="text-center mt-5">Météo</h1>
      
      <!-- Ville / Temperature -->
      <div class="text-center">
        <span id="ville">paris</span>
        
        <div id="temperature">
          <span id="temperature_label">
            xx.x
          </span> °C
        </div>
      </div>
    </div>
    
  </div>
  
  <div class="row justify-content-center">  
    <div class="col-md-8 text-center">
      <!-- Changer de ville -->
      <div id="changer" class="mt-2 text-center p-3 text-white font-weight-bold text-uppercase d-inline-block">
        Changer de ville
      </div>
    </div>
    
  </div>
  
</div>

<style