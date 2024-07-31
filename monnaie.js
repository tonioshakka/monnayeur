function calculerMonnaie() {
    const montantDu = parseFloat(document.getElementById('montantDu').value) * 100;
    const montantRecu = parseFloat(document.getElementById('montantRecu').value) * 100;
    
    if (isNaN(montantRecu) || montantRecu < montantDu) {
        document.getElementById('monnaieArendre').innerText = `Montant reçu insuffisant. Le montant dû est ${(montantDu / 100).toFixed(2)}€. Veuillez entrer un montant suffisant.`;
        return;
    }

    let monnaie = montantRecu - montantDu;
    document.getElementById('monnaieArendre').innerText = `Monnaie à rendre : ${(monnaie / 100).toFixed(2)}€`;

    const monnaiePieces = {
        50000: 0,
        20000: 0,
        10000: 0,
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

    const denominations = {
        50000: "billet(s) de 500€",
        20000: "billet(s) de 200€",
        10000: "billet(s) de 100€",
        5000: "billet(s) de 50€",
        2000: "billet(s) de 20€",
        1000: "billet(s) de 10€",
        500: "billet(s) de 5€",
        200: "pièce(s) de 2€",
        100: "pièce(s) de 1€",
        50: "pièce(s) de 0.50€",
        20: "pièce(s) de 0.20€",
        10: "pièce(s) de 0.10€",
        5: "pièce(s) de 0.05€",
        2: "pièce(s) de 0.02€",
        1: "pièce(s) de 0.01€"
    };

   let details = '';

    Object.keys(monnaiePieces).reverse().forEach(value => {
        while (monnaie >= value) {
            monnaiePieces[value]++;
            monnaie -= value;
        }
        if (monnaiePieces[value] > 0) {
            details += `${monnaiePieces[value]} ${denominations[value]}<br>`;
        }
    });

    document.getElementById('detailsMonnaie').innerHTML = details;
}
