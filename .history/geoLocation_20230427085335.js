// Pour géolocaliser on utilise l'objet geolocation

// Vérifier que la geolocation soit disponible
if ('geolocation' in navigator) {
  
    // Obtenir la position avec getCurrentPosition() ou watchPosition(),getCurrentPosition() renvoie la position actuelle de l'utilisateur une seule fois, tandis que watchPosition() renvoie continuellement la position de l'utilisateur à mesure qu'elle change.
    
    // (success, error (optionnel), options (optionnel)) = paramétres de géocalisation
    
    navigator.geolocation.getCurrentPosition((position) => {//On récupére l objet geolocation ds le navigateur et en cas de succés, on récupére la position avec une fonction anonyme
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
    }, error, options);//Cette méthode permet de récupérer la position actuelle de l'utilisateur en utilisant les coordonnées de latitude et de longitude.
    //Cependant, il est important de noter que l'accès à la géolocalisation peut être bloqué par les paramètres de confidentialité du navigateur ou par l'utilisateur lui-même. De plus, l'utilisation abusive de la géolocalisation peut représenter un risque pour la vie privée des utilisateurs.
    //Assurez-vous donc d'avoir l'autorisation de l'utilisateur avant d'utiliser cette fonctionnalité et de respecter les règles de confidentialité.
    
    function error() {//Au cas où l utilisateur refuse d être géocalisé pour afficher une alert mais en général, on ne fait pas d alert, uniquement, on désactive automatiquement la position Gps.
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