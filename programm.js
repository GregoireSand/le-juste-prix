// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');

// Etape 2 - Cacher l'erreur
error.style.display = 'none';

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 11);
console.log(nombreAleatoire);
let coups = 0;
let nombreChoisi ; 

// Etape 6 - Créer la fonction vérifier
function verifier(nombre) {

    let instruction = document.createElement('div');

    if (nombre < nombreAleatoire) {
        /// Ajouter un contenu "#1 (4) C'est plus !"
        instruction.textContent = "#" + coups + " (" + nombre + ")" +  " C'est plus";
        // Ajouter les classes instruction et plus
        instruction.className  = 'instruction plus';
    }
    else if (nombre > nombreAleatoire) {
        // Ajouter un contenu "#1 (2) C'est moins !"
        instruction.textContent = "#" + coups + " (" + nombre + ")" +  " C'est moins";
        // Ajouter les classes instruction et moins
        instruction.className  = 'instruction moins';
    }
    else {
        // Ajouter un contenu "#1 (3) Félicitations vous avez trouvé le juste prix"
        instruction.textContent = "#" + coups + " (" + nombre + ")" +  " Félicitations, vous avez trouvé le juste prix !";
        // Ajouter les classes instruction et fini
        instruction.className  = 'instruction fini';
    }

    document.querySelector('#instructions').appendChild(instruction);
}


// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
    if(isNaN(input.value) ) {
        // Si ce n'est pas un nombre il faut afficher le message d'erreur
        error.style.display = 'inline';
    }
    else {
        // Si c'est un nombre il faut cacher le message d'erreur
        error.style.display = 'none';
    }
});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isNaN(input.value) || input.value == "") {
        input.style.border = 'solid 1px red';
    }
    else {
        input.style.border = 'solid 1px silver';
        coups++;
        nombreChoisi = input.value;
        input.value = ""; // vide l'input de la valeur rentrée
        verifier(nombreChoisi);
    }
});

