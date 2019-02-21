// Affichage du nom personnalisé

function getName() {
    var n, q = 'Enter votre nom';
    if (!window.sessionStorage) {  // if sessionStorage not supported
        return window.prompt(q); // perform other action
    }
    n = window.sessionStorage.getItem('name');
    
    if (!n) {
        n = window.prompt(q);
        if (n==="" || n===null){
            n="chez Shack Burger";}
        window.sessionStorage.setItem('name', n); 
    }
    document.getElementById("bienvenue").innerHTML = "Bienvenue " + n + " !!!";
    return n;
}
// Affichage de la date et de l'heure
(function dateTime() {
    nomsDesJours = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
    nomsDesMois = new Array("janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre");
    var d = new Date();
    var jour = d.getDay();
    var mois = d.getMonth();
    var annee = d.getFullYear();
    var date = d.getDate();
    var heure = pad2(d.getHours());
    var minutes = pad2(d.getMinutes());

    document.getElementById("dateTime").innerHTML = "Nous sommes le " + nomsDesJours[jour] + " " + date + " " + nomsDesMois[mois] + " " + annee + ". Il est " + heure + "h" + minutes +".";
    setTimeout(dateTime,60000);
})();

function pad2(number) {
    return (number < 10 ? '0' : '') + number;
};

// fonction vérifiant si les restaurants sont ouverts ou fermés
(function openClose(){
    var d = new Date();
    var jour = d.getDay();
    var heure = d.getHours();
    var open="";

    if (jour==0){
        open="Nos restaurants sont actuellement fermés.";
    }
    else if (4 < jour && jour <= 6){
        if (10 < heure && heure < 23){
            open="Nos restaurants sont actuellement ouverts.";
        }
        else{
            open="Désolé, nos restaurants sont actuellement fermés.";
        }
    }
    else if (1 <= jour && jour < 5){
        if (10 < heure && heure < 22){
            open="Nos restaurants sont actuellement ouverts.";
        }
        else{
            open="Désolé, nos restaurants sont actuellement fermés.";
        }
    }
document.getElementById("openClose").innerHTML= open;
console.log(open);
setTimeout(openClose,60000);
})();


