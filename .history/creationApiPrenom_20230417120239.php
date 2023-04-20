<?php
header('Access-Control-Allow-Origin')//Pour autoriser tout le monde à utiliser l API créee

$prenom = (isset($_POST['prenom')) ? $_POST['prenom'] : 'an';