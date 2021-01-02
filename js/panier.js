
let panier = JSON.parse(localStorage.getItem('monPanier'));
//let panier = localStorage.getItem('monPanier');
let params = new URLSearchParams(document.location.search);
let id = params.get('id');
//let idProduct = panier._id;

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
//     p.id = 'panierDetail';
//     p.textContent = 'Il y a ' + `${panier.length}` + ' article(s) dans votre panier : '; 
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
  //let cart = JSON.parse(localStorage.getItem('monPanier'));
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
  // document.getElementById('supprimer').addEventListener('click', function(e){
  //   localStorage.removeItem('products');
  // })
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
 
//for(let i=0; i < btnSup.length; i++) {
  
    //delete product[product._id];
    
  //})
    // // récupération du nom du teddy pour plus tard
    // nomProduit = btnSup[i].parentElement.parentElement.firstChild.innerText.trim();
    // console.log(nomProduit);
    // // récupération du qté du teddy pour calculs de la suppression
    // qte = btnSup[i].parentElement.children[1].textContent;
    // //conversion du string en number
    // qte = parseInt(qte);
    // // récupération du prix du teddy pour calculs de la suppression
    // let price = btnSup[i].parentElement.children[3].textContent;
    //  //conversion du string en number
    // price = parseInt(price);
    // //calcul de la qté dans le panier après suppression de l'article
    // calculQte = nombreTotalDeProduit - qte;
    // localStorage.setItem('qté', calculQte);
    // //calcul du prix dans le panier après suppression de l'article
    // calculPrice = coutDuPanier - qte * price;
    // localStorage.setItem('prixTotal', calculPrice);
    // // on supprime la ligne du teddy correspondant au bouton supprimer
    // delete data[nomProduit];

    // // une petite alerte pour dire qu'un article à été supprimé.
    // alert('Vous avez supprimé '+ nomProduit + ' de votre panier ! ')
    // on actualise le LocalStorage et recharge la page pour une mise a jour
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
}
prixTotal();

let retour = document.createElement('a');
retour.href = 'index.html';
retour.className = 'btn btn-primary';
retour.id = 'btnRetour';
retour.textContent = '<< Retour';
section2.appendChild(retour);

  //     SECTION 2 : LE FORMULAIRE

// Affichage d'un message contextuel pour la saisie du nom
var nomElt = document.getElementById('firstName');

nomElt.addEventListener('focus', function () {
document.getElementById('nom').textContent = 'Entrez votre nom';
});

// Suppression du message contextuel pour la saisie du nom
nomElt.addEventListener('blur', function (e) {
document.getElementById('firstName').textContent = '';
});

// Focus sur la zone de saisie du nom
nomElt.focus();





// Récupération des id produits
let productsOrdered = getProductsOrdered(); // récupère les infos et les stocke en objet

function getProductsId() {
let products = []
panier.forEach((product) => products.push(product._id));
localStorage.setItem('order', JSON.stringify(products));

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
const products = getProductsId();
console.log(products)

// récupération des données utilisateurs

// let customerInfo = getCustomerInfo();
// function getCustomerInfo() {
  let nom = document.getElementById('firstName').value;
  let prenom = document.getElementById('lastName').value;
  let adresse = document.getElementById('address').value;
  let ville = document.getElementById('city').value;
  let mail = document.getElementById('email').value;
// };
//getCustomerInfo()

//console.log(customerInfo)
let contact = {
'firstName' : firstName,
'lastName' : lastName,
'address' : address,
'city' : city,
'email' : email,
};
//return contact;

//contact.forEach((contact) => contact.push(contact));
panier.push(contact);
localStorage.setItem('contact', JSON.stringify(contact));

console.log(contact);
//console.log(customerInfo)

//création de l'objet à envoyer
let sendOrder = {
contact, 
products
};

//Contrôle du courriel en fin de saisie
// function verifMail() {
// document.getElementById('email').addEventListener('input', function (e) {
//   var regexEmail = /[\w\.]+[\w]@[\w]+\.[\w]/;
//   if (!regexEmail.test(e.target.value)) {
//     validiteEmail = 'Adresse invalide';
//     alert('Adresse mail invalide!')
//   } else {
//     console.log('ok');
//   }
//   document.getElementById('aideCourriel').textContent = validiteEmail;
// })
// }
//let envoyerLesDonnées = document.getElementById('envoyer');
document.getElementById('envoyer').addEventListener('click', function(e){
  panier.push(sendOrder);
      // var verifEmail = document.getElementById('email');
      // //if (!regexEmail.test(e.target.value)) {
      //   if (verifEmail != /[\w\.]+[\w]@[\w]+\.[\w]/) {
      //   //validiteEmail = 'Adresse invalide';
      //   alert('Adresse mail invalide!')
      // } 
  if (document.forms[0].elements['firstName'].value == null) {
    alert('Nom invalide!')
    return preventDefault ;        
  }
  else if (document.forms[0].elements['lastName'].value == null) {
    alert('Prénom invalide!')
    return preventDefault ;        
  }
  else if (document.forms[0].elements['adress'].value == null) {
    alert('Adresse invalide!')
    return preventDefault ;        
  }
  else if (document.forms[0].elements['city'].value == null) {
    alert('Ville invalide!')
    return preventDefault ;        
  }
  else {
    fetch('http://localhost:3000/api/cameras/order', {
      method: 'POST',
      body: JSON.stringify(sendOrder),
      headers: {
      'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(response => {
      if (response.status == 201) {
      (window.location.href = 'confirmation_commande.html')
      }
    })
    .catch(err => console.log(err));
  }
});