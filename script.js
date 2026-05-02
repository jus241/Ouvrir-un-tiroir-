function ouvrirTiroir() {
    var drawer = parseInt(document.getElementById("drawer").value);
    var result = document.getElementById("result") ;
    console.log("result");

    switch (drawer){
        case 1:
            result.textContent = "Contient des outils de dessin.";
            break;
        case 2:
            result.textContent = "Contient du matériel informatique.";
            break;
        case 3:
            result.textContent = "Ce tiroir est fermé à clé !";
            break;
        case 4:
            result.textContent = "Contient des vêtements.";
            break;
        case 5:
            result.textContent = "Regard toi bien.";
            break;
       
    default:
      result.textContent = "Erreur : choisissez un nombre entre 1 et 5.";

    }
    
}