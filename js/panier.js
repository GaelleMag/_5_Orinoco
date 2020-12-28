  // Compteur quantité
let panier = JSON.parse(localStorage.getItem('monPanier'));
  //let panier = localStorage.getItem('monPanier');
let params = new URLSearchParams(document.location.search);
let id = params.get('id');
let idProduct = panier._id;

  // Affichage des éléments du DOM

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
    p.id = 'panierDetail';
    p.textContent = 'Il y a ' + `${panier.length}` + ' article(s) dans votre panier : '; // penser à adapter le mot article en fonction du nombre
let divCart = document.createElement('div');
    divCart.id = 'contenuPanier';
let ulProduit = document.createElement('ul');
let divPrixTotal = document.createElement('div');
    divPrixTotal.id = 'prixTotal';
let pPrixTotal = document.createElement('p');
    pPrixTotal.id = 'prixTTC';
let section2 = document.getElementById('sectionFormulaire');

document.body.appendChild(header);
document.body.appendChild(section1);
document.body.appendChild(section2);
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

  // Message sur quantité d'objet dans la panier

if (panier) {
  function nombreProduit() {
    let qte = panier.length;
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
  nombreProduit();

      //     SECTION 1 : LE PANIER

    // Affichage du panier

  function afficherPanier() {
    let cart = JSON.parse(localStorage.getItem('monPanier'));
    panier.forEach(function (product) {
      console.log(panier);
      console.log(`${product.name}`);
      let li = document.createElement('li');
      li.className = 'listeProduit';
      li.textContent = 'Caméra : ' + `${product.name}` + ' ' + ' Prix : ' + `${product.price}` / 100 + '€';
      ulProduit.appendChild(li);

      // bouton supprimer
  
    });
  }
}
afficherPanier();

function prixTotal() {
  let total = 0;
  panier.forEach(function (product) {
    let prixProduit = parseFloat(`${product.price}`);
    total = total + prixProduit;
    console.log(total);
  });
  pPrixTotal.textContent = 'Prix total : ' + total / 100 + ' €';
}
prixTotal();

let retour = document.createElement('a');
retour.href = 'index.html';
retour.className = 'btn btn-primary btn-block mb-4';
retour.textContent = 'Retour';
section2.appendChild(retour);

    //     SECTION 2 : LE FORMULAIRE

  // Affichage d'un message contextuel pour la saisie du nom
var nomElt = document.getElementById('nom');

nomElt.addEventListener('focus', function () {
  document.getElementById('nom').textContent = 'Entrez votre nom';
});

  // Suppression du message contextuel pour la saisie du nom
nomElt.addEventListener('blur', function (e) {
  document.getElementById('nom').textContent = '';
});

// Focus sur la zone de saisie du nom
nomElt.focus();

//Contrôle du courriel en fin de saisie

function verifMail() {
  document.getElementById('email').addEventListener('blur', function (e) {
    var regexEmail = /[\w\.]+[\w]*@[\w]+\.[\w]/;
    if (!regexEmail.test(e.target.value)) {
      validiteEmail = 'Adresse invalide';
    } else {
      console.log('ok');
    }
    document.getElementById('aideCourriel').textContent = validiteEmail;
  })
};

// Bouton envoyer
let productsOrdered = getProductsOrdered(); // récupère les infos et les stocke en objet

function getProductsId() {
  let products = []
  panier.forEach((product) => products.push(product._id));

  return products;
}

function getProductsOrdered() {
  // Vérification du panier (non nul)
  let panier = localStorage.getItem('monPanier');
  console.log(panier);
  if (panier == null) {
    alert('Votre panier est vide');
  }

}
const productsId = getProductsId();
console.log(productsId)

function getCustomerInfo() {
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let address = document.getElementById('address').value;
  let city = document.getElementById('city').value;
  let email = document.getElementById('email').value;
};
  let contact = {
    'firstName' : firstName,
    'lastName' : lastName,
    'address' : address,
    'city' : city,
    'email' : email,
  

//   class contact {
//     constructor(firstName, lastName, address, city, email) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.address = address;
//       this.city = city;
//       this.email = email;
//     }
//   //   contact = new Contact();
//     // ajouter data user au localStorage sous forme
    
//  //}
//  // console.log(contact);
}
let customerInfo = getCustomerInfo();
console.log(contact);

  //création de l'objet à envoyer
let sendOrder = {
  productsId,
  contact
};
  
  // Envoyer Data vers id /order

  fetch('http://localhost:3000/api/cameras/order', {
    method : 'POST',
    body : JSON.stringify(sendOrder),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  .then(response => response.json()) 
  .then(json => console.log(json))
  .catch(err => console.log(err));
  //let orderReturn = sendOrder(productsOrdered, customerInfo);
  //function sendOrder(productsOrdered, customerInfo){
    // changement de la ligne function sendOrder()
  // function sendOrder(contact, productsId) {
  //   let request = new XMLHttpRequest();
  //   request.onreadystatechange = function () {
  //     if (this.readyState == XMLHttpRequest.DONE) {
  //       let confirmation = JSON.parse(this.responseText);
  //       localStorage.setItem('order', JSON.stringify(confirmation));
  //       /*let prix = JSON.parse(localStorage.getItem('prixTotal'));
  //              sessionStorage.setItem('prix', JSON.stringify(prix));
  //             console.log(typeof prix);
  //             console.log( prix);*/
  //       //Des que la requete est envoyé, on bascule sur la page de confirmation de commande avec toutes les infos demandé : Id de commande, prix du panier
  //       window.location.href = 'confirmation_commande.html';
  //     }
  //   };
  //   request.open('post', 'http://localhost:3000/api/cameras/order');
  //   request.setRequestHeader('Content-Type', 'application/json');
  //   request.send(validateAndSendOrder);
  // }

  console.log('sendOrder');


// document.getElementById('envoyer').addEventListener('click', function (event) {
//   console.log('2');
//   validateAndSendOrder();
// });

  // Affichage contact

function contactUs() {
  Swal.fire({
    imageUrl: 'images/contact2.jpg',
    imageHeight: 700,
    imageWidth: 1500,
    imageAlt: 'contact',
  });
}
