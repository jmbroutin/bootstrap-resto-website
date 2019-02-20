// Affichage du nom personnalisé

function getName() {
    var n, q = 'Enter votre nom';
    if (!window.sessionStorage) {  // if sessionStorage not supported
        return window.prompt(q); // perform other action
    }
    n = window.sessionStorage.getItem('name');
    
    if (!n) {
        n = window.prompt(q);
        window.sessionStorage.setItem('name', n); 
    }
    document.getElementById("bienvenue").innerHTML = "Bienvenue " + n + " chez Shack Burger";
    return n;
}
