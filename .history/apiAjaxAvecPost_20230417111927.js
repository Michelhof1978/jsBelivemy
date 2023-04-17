const url = 'https://lesoublisdelinfo.com/api.php';

let requete = new XMLHttpRequest();

// Get
// requete.open('GET', url);
// requete.responseType = 'json';
// requete.send();

// Post
requete.open('POST', url);//Envoyer des données à l'Api
requete.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
requete.responseType = 'json';
requete.send('prenom=John');

requete.onload = function() {
  if (requete.readyState === XMLHttpRequest.DONE) {
    if (requete.status === 200) {
      let reponse = requete.response;
      console.log(reponse);
    }
    else {
      alert('Un problème est intervenu, merci de revenir plus tard.');
    }
  }
}