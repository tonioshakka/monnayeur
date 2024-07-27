const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Entrez le montant dû en euros :');

function askForAmountDue() {
    rl.question('Montant dû : ', (amountDue) => {
        let montantDu = parseFloat(amountDue) * 100; // Pour convertir en centimes        
        console.log('Entrez le montant reçu en euros :');
        askForAmountReceived(montantDu);       
    });
}

function askForAmountReceived(montantDu) {
    rl.question('Montant reçu : ', (amountReceived) => {
        let montantRecu = parseFloat(amountReceived) * 100; 

        if (isNaN(montantRecu) || montantRecu < montantDu) {
            console.log(`Montant reçu insuffisant. Le montant dû est ${(montantDu / 100).toFixed(2)}€. Veuillez entrer un montant suffisant.`); //Utilisation de toFixed(2) pour afficher toujours 2 chiffres après la virgule
            askForAmountReceived(montantDu);
        } else {
            let monnaie = montantRecu - montantDu; //calcul de la monnaie à rendre
            console.log(`Monnaie à rendre : ${(monnaie / 100).toFixed(2)}€`);
            rendreMonnaie(monnaie);
            rl.close();
        }
    });
}

function rendreMonnaie(monnaie) {
    const monnaiePieces = {
        5000: 0,
        2000: 0,
        1000: 0,
        500: 0,
        200: 0,
        100: 0,
        50: 0,
        20: 0,
        10: 0,
        5: 0,
        2: 0,
        1: 0
    };

    Object.keys(monnaiePieces).reverse().forEach(value => { //utilisation de reverse pour démarrer par la valeur la plus grande (50€)
        while (monnaie >= value) {
            monnaiePieces[value]++; //tant que la valeur d'un billet (ou pièce) est supérieur au montant on en ajoute un exemplaire
            monnaie -= value; //à chaque ajout d'un billet (ou pièce) on soustrait sa valeur du montant
        }
    });

    console.log(`${monnaiePieces[5000]} billet(s) de 50€`);
    console.log(`${monnaiePieces[2000]} billet(s) de 20€`);
    console.log(`${monnaiePieces[1000]} billet(s) de 10€`);
    console.log(`${monnaiePieces[500]} billet(s) de 5€`);
    console.log(`${monnaiePieces[200]} pièce(s) de 2€`);
    console.log(`${monnaiePieces[100]} pièce(s) de 1€`);
    console.log(`${monnaiePieces[50]} pièce(s) de 0.50€`);
    console.log(`${monnaiePieces[20]} pièce(s) de 0.20€`);
    console.log(`${monnaiePieces[10]} pièce(s) de 0.10€`);
    console.log(`${monnaiePieces[5]} pièce(s) de 0.05€`);
    console.log(`${monnaiePieces[2]} pièce(s) de 0.02€`);
    console.log(`${monnaiePieces[1]} pièce(s) de 0.01€`);
}

askForAmountDue(); 
