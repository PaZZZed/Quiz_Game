/* Zedzian Pawel 53204  B132*/
src = "script\data.js"

//permet de lier les informations de la page d'accueil a la page de jeu
let nom = new URL(window.location.href).searchParams.get("firstname");
document.getElementById("nouveauNom").innerHTML = nom;

let prenom = new URL(window.location.href).searchParams.get("lastname");
document.getElementById("nouveauPrenom").innerHTML = prenom;

let login = new URL(window.location.href).searchParams.get("login");
document.getElementById("nouveauLogin").innerHTML = login;

let prof = new URL(window.location.href).searchParams.get("profs");
document.getElementById("nouveauProf").innerHTML = prof;


//test dans la console 
console.log(questions.length);
console.log("question: " + questions[0].question + "réponse: " + questions[0].reponses);
console.log("question: " + questions[2].question + "réponse: " + questions[2].reponses);
for (let i = 0; i < questions.length; i++) {
    console.log(questions[i].bonneReponse);
}
console.log(qst);


//definition de quelque variables utiles 
let score = 0;
let nextButton = document.getElementById("vrai");
let counter = 0;
var qst = questions;
qst = shuffle(qst);


/**
 * choisi 1 question,ces 4 propositions et la bonne réponse on admet que le tableau sera tjr mélanger
 *  */
function choisir(array) {
    let uneQust = array[counter];
    document.getElementById("numeroQuestion").innerHTML = "Question" + (counter + 1);
    document.getElementById("qst").innerHTML = uneQust.question;

    document.getElementById("bn1").innerHTML = uneQust.reponses[0];
    document.getElementById("bn2").innerHTML = uneQust.reponses[1];
    document.getElementById("bn3").innerHTML = uneQust.reponses[2];
    document.getElementById("bn4").innerHTML = uneQust.reponses[3];

    return uneQust;
}

//utilise la function choisir pour afficher les questions et reponses la premiere fois 
choisir(qst);

/**
 * si on click sur le button nous dit si on a vrai ou faux et block les autres bouttons 
 *  */
function repo(choix) {
    let rep = choix;


    if (rep == choisir(qst).bonneReponse) {
        document.getElementById("data").innerHTML = "bonne réponse!";

        document.getElementById("bn" + rep).style.backgroundColor = 'lawngreen';
        document.getElementById("bn" + choisir(qst).bonneReponse).style.color = 'black';

        document.getElementById('vrai').style.visibility = 'visible';


    }
    else {
        document.getElementById("bn" + rep).style.backgroundColor = 'red';
        document.getElementById("bn" + choisir(qst).bonneReponse).style.backgroundColor = 'lawngreen';
        document.getElementById("bn" + choisir(qst).bonneReponse).style.color = 'black';
        document.getElementById("data").innerHTML = "hoooo comme c'est dommage....La partie est fini pour vous.";
        document.getElementById('faux').style.visibility = 'visible';
        document.getElementById('accueil').style.visibility = 'visible';
        gainDefaite();

    }

    let i = 1;
    while (i <= 5) {
        document.getElementById("bn" + i).disabled = true;
        i++;
    }
}

/**
 *  pour ne pas depasser 10 questions 
 * */
function buttonLogic() {
    if (counter < 10) {

        choisir(qst);
    }
}

/**
 * fonction qui permet de passer a la question suivante 
 *  */
let next = function next() {
    counter++;
    buttonLogic()

    document.getElementById("data").innerHTML = " ";
    document.getElementById("bn1").style.backgroundColor = 'beige';
    document.getElementById("bn2").style.backgroundColor = 'beige';
    document.getElementById("bn3").style.backgroundColor = 'beige';
    document.getElementById("bn4").style.backgroundColor = 'beige';
    document.getElementById('vrai').style.visibility = 'hidden';
    scores();
    score++;

    let i = 1;
    while (i <= 5) {
        document.getElementById("bn" + i).disabled = false;
        i++;
    }

    gainVictoire();
    afficherJoker()
}
//lorsque on clique applique la fonction next()
nextButton.addEventListener('click', next);

/**
 * function pour afficher le joker 50/50
 *  */
function afficherJoker() {
    if (score >= 4) {
        document.getElementById('joker').style.visibility = 'visible';
        document.getElementById("joker").style.backgroundColor = 'blue';
    }

}
/**
 * va eliminer 2 mauvaise propositions
 * count initialisé en dehors de la fonction
 *  */
let count = 0;
function joker() {
    let valeurTest = 0;
    let joker = Math.floor(Math.random() * 4) + 1;

    while (count != 2) {

        if (joker != qst[score].bonneReponse && joker != valeurTest) {
            document.getElementById("bn" + joker).style.backgroundColor = 'red';
            document.getElementById("bn" + joker).disabled = true;
            valeurTest = joker;
            count++;
        }

        else {
            joker = Math.floor(Math.random() * 4) + 1;
        }
    }
}