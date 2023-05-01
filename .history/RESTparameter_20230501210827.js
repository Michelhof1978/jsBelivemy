const nombres =['un', 'deux', 'trois','quatre'];

const [nombreA, nombreB, ...nombreC] = nombres;//Les 3 petits points permettent de prendre le reste du tableau à

console.log(nombreC);