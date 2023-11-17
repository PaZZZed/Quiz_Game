let gains = [50, 100, 200, 500, 1000, 5000, 10000, 20000, 50000, 1000000]
console.log(gains);
let k = 0;

/**
 * affiche les differents paliers franchis
 *  */
function scores() {
    if (k == 3 || k == 6) {
        document.getElementById("gain" + (k + 1)).style.backgroundColor = 'gold ';
        document.getElementById("gain" + (k + 1)).style.color = 'black';
        document.getElementById("gain" + (k + 1)).style.visibility = 'visible';
        k++;
    }
    if (score == k && k != 3 && k != 6) {
        document.getElementById("gain" + (k + 1)).style.backgroundColor = 'SeaGreen ';
        document.getElementById("gain" + (k + 1)).style.color = 'black';
        document.getElementById("gain" + (k + 1)).style.visibility = 'visible';
        k++;
    }
}
/**
 * lorsque on pass les paliers un message nous dit qu'on a gagner une certaine somme
 *  */
function gainDefaite() {
    if (score >= 4 && score < 7) {
        alert("congratulations, vous avez gagné: " + gains[3] + "€€");
        document.getElementById("data").innerHTML = "congratulations, vous empochez: " + gains[3] + "€€ Merci d'avoir jouer";

    }
    if (score >= 7) {
        alert("congratulations, vous avez gagné: " + gains[6] + "€€");
        document.getElementById("data").innerHTML = "congratulations, vous empochez: " + gains[6] + "€€ Merci d'avoir jouer";

    }

}
/**
 *lorsque on arrete on repars avec la somme actuel et stop le jeu
 *  */
function arreter() {
    document.getElementById("data").innerHTML = "Bien joué vous empochez: " + gains[score - 1] + "€ Merci d'avoir jouer";

    let i = 1;
    while (i <= 5) {
        document.getElementById("bn" + i).disabled = true;
        i++;
    }
}
/**
 * lorsque l'on gagne la partie s'arrete, on est felicitée d'avoir gagner 
 *  */
function gainVictoire() {
    if (score == 10) {

        document.getElementById("data").innerHTML = "félicitations vous étes un millionaire, vous empochez: " + gains[9] + "€€€ ";
        document.getElementById('faux').style.visibility = 'visible';
        document.getElementById('accueil').style.visibility = 'visible';
        let i = 1;
        while (i <= 5) {
            document.getElementById("bn" + i).disabled = true;
            i++;
        }
    }

}