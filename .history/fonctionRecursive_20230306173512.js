//Fonctions qui s'appellent elles même et éviter de se répéter à chaque fois

function timer(secondes) { // 10
    
    if(secondes > 0) {
        console.log(secondes);
        timer(secondes - 1); // 9

            // afficher 9
            // timer(8)

                // afficher 8
                // timer(7)

                    // ...
    }
    else {
        console.log(0);
    }

}

timer(10);
-----------------------------------------------------------------------------------------------

function somme(nombre) { // 3
    
    if(nombre == 1) {
        return 1;
    }

    return nombre + somme(nombre - 1); // 2 la fonctios auto appelle 

        // retourner 2 + somme(1)

            // retourner 1

    // 3 + 2 + 1
}

console.log(somme(3));