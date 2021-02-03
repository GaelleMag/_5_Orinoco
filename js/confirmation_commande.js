// Définition des variables nécessaires

prixFinal = localStorage.prixFinal;
firstName = localStorage.Prenom;
orderId = sessionStorage.orderId;


// Elements du DOM

let main = document.createElement('main');
    main.className = 'container';
let divRecap = document.createElement('div');
    divRecap.id = 'recapitulatif';
    divRecap.className = 'alert alert-success';
let h1 = document.createElement('h1');
    h1.className = 'alert-heading';
    h1.textContent = 'Commande confirmée !';
let pMerci = document.createElement('p');
    pMerci.textContent = 'Merci ' + firstName + ' pour votre commande!';
let pOrder = document.createElement('p');
    pOrder.textContent = 'Celle-ci porte le numéro ' + orderId + ' pour un montant de ' + prixFinal + '€';
let divBackHome = document.createElement('div');
    divBackHome.id = 'backHome';
let retour = document.createElement("a");
let divBye = document.createElement('div');
let h2 = document.createElement('h2');
    h2.textContent = 'A bientôt chez OrinoCamera!';

document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);
main.appendChild(header);
main.appendChild(divRecap);
main.appendChild(divBackHome);
main.appendChild(divBye);
divRecap.appendChild(h1);
divRecap.appendChild(pMerci);
divRecap.appendChild(pOrder);
divBye.appendChild(h2);



// Affichage du numéro de commande avec message de remerciement

orderConfirmation();

// Création du bouton retour 

backToIndex();

// Suppression des données du storage au clic sur retour

let goBack = document.getElementById("btnRetour");
goBack.addEventListener('click', clearStorage);

// LES FONCTIONS 

function orderConfirmation(){
    let data = JSON.parse(sessionStorage.getItem('order'));
    let productContainer = document.getElementById('recap');
    // Création du message de confirmation de commande
    if( data != null ) {
        productContainer.innerHTML = '';
        // Récupération des données du LocalStorage
        Object.values(data).map( () => {
            // Affichage de la confirmation de commande
            let div = document.createElement('div');
            let pMerci = document.createElement ('p');
                pMerci.textContent = 'Merci' + lastName;
            let pNumeroCommande = document.createElement ('p');
                pNumeroCommande.textContent = 'Votre numéro de commande est le ' + '${data.orderId}' + ' . Conservez-le bien!';
            let pAuRevoir = document.createElement('p');
                pAuRevoir.textContent = 'A bientôt sur OrinoCamera!';
            div.appendChild(pMerci);
            div.appendChild(pNumeroCommande);
            div.appendChild(pAuRevoir);
        });    
    } 
}
function backToIndex() {
    let retour = document.createElement("a");
    retour.href = "index.html";
    retour.className = "btn btn-primary";
    retour.id = "btnRetour";
    retour.textContent = "<< Retour";
    divBackHome.appendChild(retour);
};
function clearStorage(){
    localStorage.clear();
    sessionStorage.clear();
};






// function contactUs() {
//     Swal.fire({
//         //let btnContact = document.getElementById()
//         imageUrl: 'images/contact2.jpg',
//         imageHeight: 700,
//         imageWidth : 1500,
//         imageAlt: 'contact'
//     })  
   // };