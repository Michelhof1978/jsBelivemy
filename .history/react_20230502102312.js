//on utilise Reac pour éviter de nous répéter = DRY => Don't repeat yourself.

//Exemple:Affichage des informations de façon dynamique: Calcul de moyenne par éléve

//Sur le code ci-dessous
{/* <div class= "eleve">
    <h1>Eva Dupont</h1>
    <p>Moyenne scolaire : <b>15/20</b></p>
</div>

<div class= "eleve">
    <h1>Thimothée Galo</h1>
    <p>Moyenne scolaire : <b>5/20</b></p>
</div> */}

<div id="app"></div>

.eleve {
    background-color: #f5f5f5;
    border: 1px solid silver;
    font-family: arial;
    padding: 30px;
    margin: 15px;
    display: inline-block;
    width: 300px;
  }

  function Eleve(props) {
    return (
      <div className="eleve">
        <h1>{props.name}</h1>
        <p>Moyenne scolaire : <b>{props.moyenne}/20</b></p>
      </div>
    );
  }
  
  let eleves = (
    <div>
      <Eleve name="Eva Dupont" moyenne="15" />
      <Eleve name="Timothée Galo" moyenne="5" />
    </div>
  );
  
  ReactDOM.render(eleves, document.querySelector('#app'));
  -------------------------------------------------------------------------------------