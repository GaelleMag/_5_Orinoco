
let panier = JSON.parse(localStorage.getItem('monPanier'));
let params = new URLSearchParams(document.location.search);
let id = params.get('id');

// Affichage des éléments du DOM
let main = document.createElement('main');
    main.className = 'container';
let section1 = document.createElement('section');
  section1.id = 'sectionPanier';
let h1 = document.createElement('h1');
  h1.textContent = 'OrinoCamera';
let h2 = document.createElement('h2');
  h2.id = 'recap';
  h2.textContent = 'Panier';
let div = document.createElement('div');
  div.id = 'panierGlobal';
let p = document.createElement('p');
let divCart = document.createElement('div');
  divCart.id = 'contenuPanier';
let ulProduit = document.createElement('ul');
let divPrixTotal = document.createElement('div');
  divPrixTotal.id = 'prixTotal';
let pPrixTotal = document.createElement('p');
  pPrixTotal.id = 'prixTTC';
let section2 = document.getElementById('sectionFormulaire');

document.body.appendChild(header);
document.body.appendChild(main);
main.appendChild(section1);
main.appendChild(section2);
document.body.appendChild(footer);
section1.appendChild(h1);
section1.appendChild(h2);
section1.appendChild(div);
section1.appendChild(divCart);
section1.appendChild(divPrixTotal);
divCart.appendChild(ulProduit);
divPrixTotal.appendChild(pPrixTotal);
div.appendChild(p);
p.textContent = 'Votre panier est vide';

// Compteur quantité
let nbre = document.getElementById('panier');
    nbre.textContent = 'Panier (' + `${panier.length}` + ')';

// Message sur quantité d'objet dans la panier

function nombreProduit() {
  let qte = panier.length;
  if (panier) {
    if (qte == 1) {
      p.textContent =
        'Il y a ' + `${panier.length}` + ' article dans votre panier : ';
    }
    if (qte >= 2) {
      p.textContent =
        'Il y a ' + `${panier.length}` + ' articles dans votre panier : ';
    }
  console.log(qte);
  }
}
nombreProduit();

    //     SECTION 1 : LE PANIER

  // Affichage du panier

function afficherPanier() {
  panier.forEach(function (product) {
    console.log(panier);
    console.log(`${product.name}`);
    let li = document.createElement('li');
    li.className = 'listeProduit';
    li.innerHTML = '<b>Camera :</b> ' + `${product.name}` + ' ' + ' <b>Prix : </b>' + `${product.price}` / 100 + '€';
    ulProduit.appendChild(li);
    //création bouton supprimer
    let supprimer = document.createElement('button');
    let idSup = 'supprimer'+ `${product._id}`;
        supprimer.id = idSup;
        supprimer.className = 'btn btn-secondary';
        supprimer.textContent = 'Supprimer';
    ulProduit.appendChild(supprimer);  
  })
};

// bouton sup
function deleteBtn() {  
  let btnSup = document.getElementById('idSup');
  document.getElementById(btnSup).addEventListener('click', () => {
    for (product._id of panier){
      //localStorage.removeItem('product._id');
      delete panier[product.lenses];
      delete panier[product.description];
      delete panier[product.name];
      delete panier[product.price];
      delete panier[product.imageUrl];
      delete panier[product._id];
      window.location.reload();
    }
  })
}; 
  let data = JSON.parse(localStorage.getItem('panier'));
  localStorage.setItem('panier', JSON.stringify(data));
    
    //chargementPanier(); 
//};
console.log(typeof panier)
//           // bouton supprimer
//   let btnsup = JSON.parse(localStorage.getItem('monPanier'));
//   panier.forEach(function (product) {
//     let supprimerArticle = document.getElementById('supprimer');
//     // let supprimer = document.createElement('button');
//     // supprimer.id = 'supprimer';
//     // supprimer.className = 'btn btn-secondary btn-block mb-12';
//     // supprimer.textContent = 'Supprimer';
//     // ulProduit.appendChild(supprimer);  
    
//     supprimerArticle.addEventListener('click', function (e) {
//         localStorage.removeItem('panier');
//     })
// })
//}
afficherPanier();

function prixTotal() {
  let total = 0;
  panier.forEach(function (product) {
    let prixProduit = parseFloat(`${product.price}`);
    total = total + prixProduit;
    console.log(total);
  });
  pPrixTotal.textContent = 'Prix total : ' + total / 100 + ' €';
};
prixTotal();

let retour = document.createElement('a');
retour.href = 'index.html';
retour.className = 'btn btn-primary';
retour.id = 'btnRetour';
retour.textContent = '<< Retour';
section2.appendChild(retour);

  //     SECTION 2 : LE FORMULAIRE

  //Vérification du contenu du panier (non vide)

  console.log(panier);
  if (panier == null) {
      alert('Votre panier est vide');
      console.log('panier non nul')
  };

// Récupération des idProduits (future requête POST) 
  let products = []
  function getProductsId() {
    let panier = JSON.parse(localStorage.getItem('monPanier'));
    for (let product of panier ) {
      products.push(product._id);
      localStorage.setItem('order', JSON.stringify(products));
      console.log('ok!')
      console.log(panier)
      console.log(product._id)
      return products;
    }
  };

  console.log(products)

  getProductsId(products);
  
    // Récupération des données utr
  let form = document.getElementById('monFormulaire');
  let firstName = form.elements.firstName.value;
  let lastName = form.elements.lastName.value;
  let email = form.elements.email.value;
  let address = form.elements.address.value;
  let city = form.elements.city.value;

    // Création objet contact (future requête POST)
  
  let contact = {
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "address": address,
      "city": city,
  };

  localStorage.setItem('contact', JSON.stringify(contact));

    // Création objet (pour envoi au serveur)
  let objectOrder = {
      contact,
      products
  };
  console.log(contact)
  localStorage.setItem('objectOrder', JSON.stringify(objectOrder));
  //let SendOrder = JSON.stringify(objectOrder);
  console.log(objectOrder)

  // contrôle de saisie
    
  let formValid = document.getElementById('envoyer');
  formValid.addEventListener('click', validation);

  function validation(event){
    let firstName = document.getElementById('firstName');
    let firstNameError = document.getElementById('firstNameError');
    let firstNameOk = /^[a-zA-Z ,.'-]+$/;

    let lastName = document.getElementById('lastName');
    let lastNameError = document.getElementById('lastNameError');
    let lastNameOk = /^[a-zA-Z ,.'-]+$/;

    let address = document.getElementById('address');
    let addressError = document.getElementById('addressError');
    let addressOk = /[0-9a-zA-Z]{1,3}[a-z ,.'-]+$/;

    let city = document.getElementById('city');
    let cityError = document.getElementById('cityError');
    let cityOk = /[0-9a-zA-Z]{1,3}[a-z ,.'-]+$/;

    let email = document.getElementById('email');
    let emailError = document.getElementById('emailError');
    let emailOk = /[\w\.]+[\w]@[\w]+\.[\w]/;
       //Si le champ est vide
    if (firstName.validity.valueMissing){
        event.preventDefault();
        firstNameError.textContent = 'Prénom manquant';
        firstNameError.style.color = 'red';
      //Si le format de données est incorrect
    }
    else if (firstNameOk.test(firstName.value) == false){
        event.preventDefault();
        firstNameError.textContent = 'Format incorrect';
        firstNameError.style.color = 'orange';
    }
    else if (lastName.validity.valueMissing){
        event.preventDefault();
        lastNameError.textContent = 'Nom manquant';
        lastNameError.style.color = 'red';
      //Si le format de données est incorrect
    }
    else if (lastNameOk.test(lastName.value) == false){
        event.preventDefault();
        lastNameError.textContent = 'Format incorrect';
        lastNameError.style.color = 'orange';
    }
    else if (address.validity.valueMissing){
        event.preventDefault();
        addressError.textContent = 'Adresse manquante';
        addressError.style.color = 'red';
      //Si le format de données est incorrect
    }
    else if (addressOk.test(address.value) == false){
        event.preventDefault();
        addressError.textContent = 'Format incorrect';
        addressError.style.color = 'orange';
    }
    else if (city.validity.valueMissing){
        event.preventDefault();
        cityError.textContent = 'Ville manquante';
        cityError.style.color = 'red';
      //Si le format de données est incorrect
    }
    else if (cityOk.test(city.value) == false){
        event.preventDefault();
        cityError.textContent = 'Format incorrect';
        cityError.style.color = 'orange';
    }
    else if (email.validity.valueMissing){
        event.preventDefault();
        emailError.textContent = 'Courriel manquant';
        emailError.style.color = 'red';
      //Si le format de données est incorrect
    }
    else if (emailOk.test(email.value) == false){
        event.preventDefault();
        emailError.textContent = 'Format incorrect';
        emailError.style.color = 'orange';
    }
    else if (panier == null){
        event.preventDefault();
        alert('Votre panier est vide! Pour passer commande, il vous faut au moins un article ;)')
        return false;
    }
    else {
      let request = new XMLHttpRequest();
      request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE) {
              // let confirmation = JSON.parse(this.responseText);
              // sessionStorage.setItem('order', JSON.stringify(confirmation));
              // let prix = JSON.parse(localStorage.getItem('prixTotal'));
              // sessionStorage.setItem('prix', JSON.stringify(prix));
          //  console.log(typeof prix);
          //  console.log( prix);
              //Des que la requete est envoyé, on bascule sur la page de confirmation de commande avec toutes les infos demandé : Id de commande, prix du panier
          window.location.href = 'confirmation_commande.html';
        }
      }
      request.open('post', 'http://localhost:3000/api/cameras/order');
      request.setRequestHeader('Content-Type', 'application/json');
      request.send();
    }
}