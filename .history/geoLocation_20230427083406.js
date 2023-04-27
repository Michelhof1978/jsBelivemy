// Pour géolocaliser on utilise l'objet geolocation

// Vérifier que la geolocation soit disponible
if ('geolocation' in navigator) {
  
    // Obtenir la position avec getCurrentPosition() ou watchPosition(),getCurrentPosition() renvoie la position actuelle de l'utilisateur une seule fois, tandis que watchPosition() renvoie continuellement la position de l'utilisateur à mesure qu'elle change.
    
    // (success, error (optionnel), options (optionnel)) = paramétres de géocalisation
    
    navigator.geolocation.getCurrentPosition((position) => {//On récupére les coordonnées
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
    }, error, options);
    
    function error() {
      alert('Aucune position disponible.');
    }
    
    var options = {
      enableHighAccuracy: true,  // false par defaut
      maximumAge        : 30000, // derniere position en cache en millisecondes qu'on peut accepter, 0 par defaut
      timeout           : 27000  // duree max en millisecondes pour geolocaliser, infinity par defaut
    }
    
    /*
    let watch = navigator.geolocation.watchPosition() ...
    navigator.geolocation.clearWatch(watch)
    */
    
  }
  else {
    alert('Le navigateur ne supporte pas la geolocalisation');
  }