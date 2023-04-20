<?php
//On doit donc créer 
header('Access-Control-Allow-Origin')//Pour autoriser tout le monde à utiliser l API créee

$prenom = (isset($_POST['prenom'])) ? $_POST['prenom'] : 'anonyme';
$resultat = 'Bonjour' . $prenom . ' Voici la requête Ajax';
$tableau = ['prenom' => $prenom, 'resultat' => $resultat];//création du tableau pour pouvoir le tranformer en Json
echo json_encode($tableau);//Créer du Json à partir de mon tableau