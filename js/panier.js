let CART = JSON.parse(localStorage.getItem("monPanier"));
let params = new URLSearchParams(document.location.search);
let id = params.get("id");

//     SECTION 1 : LE PANIER

createDomHTML();
setNavCartCount()
setCartSummaryText();
displayCart();
totalPrice();
backToIndex();



// document
//   .getElementById("supprimer" + `${idProduit}`)
//   .addEventListener("click", removeCartProduct);

// function removeCartProduct() {
//   alert("Votre produit " + idProduit + " est surpprimé");
//   localStorage.removeItem("panier", `${idProduit}`);
//   CART = JSON.parse(localStorage.getItem("monPanier"));
//   //window.location.reload(); quand on sup on rappelle les functions (affichage panier, nbre produit etc)
//   setCartSummaryText();
//   //displayCart();
//   console.log('ici');
// }

// bouton sup

// delete panier[product.lenses];
// delete panier[product.description];
// delete panier[product.name];
// delete panier[product.price];
// delete panier[product.imageUrl];
// delete panier[product._id];

//})
// };
let data = JSON.parse(localStorage.getItem("panier"));
localStorage.setItem("panier", JSON.stringify(data));

//chargementPanier();
//};
//console.log(typeof panier);
//           // bouton supprimer
//   let btnsup = JSON.parse(localStorage.getItem('monPanier'));
//   CART.forEach(function (product) {
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

//     SECTION 2 : LE FORMULAIRE

//Vérification du contenu du panier (non vide)

console.log(CART);
if (CART == null) {
  alert("Votre panier est vide");
  console.log("panier non nul");
}

// Récupération des idProduits (future requête POST)
// Création objet (pour envoi au serveur)
objectOrder = {
  contact: {},
  products: [],
};
CART.forEach((idArticle) => objectOrder.products.push(idArticle._id));

document
  .getElementById("monFormulaire")
  .addEventListener("submit", function (getFormCustomerOrder) {
    getFormCustomerOrder.preventDefault();
  });

function getFormCustomerOrder() {
  // Récupération des données usr
  let firstName = document.getElementById("firstName").value;
  localStorage.setItem("Prenom", firstName);
  console.log(firstName.value);
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;

  // Création objet contact (future requête POST)

  objectOrder.contact = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    address: address,
    city: city,
  };
  contact = objectOrder.contact;
  products = objectOrder.products;
  console.log(products);
  console.log(objectOrder);
  console.log(contact);
  localStorage.setItem("contact", JSON.stringify(contact));
  localStorage.setItem("objectOrder", JSON.stringify(objectOrder));
}

// contrôle de saisie

let formValid = document.getElementById("envoyer");
formValid.addEventListener("click", verif);
function verif(event) {
  if (validation(event)) {
    getFormCustomerOrder();
    sendFormCustomerOrder();
  }
  // validation doit renvoyer un booléen (false = pas d'(envoi et true : passe à la suite
  // crée fction sendForm : coontient envoi form dc l'enlever de la validation. Donc le Else envoi))
}

function sendFormCustomerOrder(){
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE) {
      let orderId = JSON.parse(this.responseText);
      console.log(request);
      console.log(orderId);
      sessionStorage.setItem("orderId", JSON.stringify(orderId.orderId));
      console.log(orderId);
      //localStorage.setItem("orderId", JSON.stringify(orderId));
      //Des que la requete est envoyé, on bascule sur la page de confirmation de commande avec toutes les infos demandé : Id de commande, prix du panier
      window.location.href = "confirmation_commande.html";
    }
  };

  request.open("post", "http://localhost:3000/api/cameras/order");
  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify(objectOrder));
  console.log(objectOrder);
}

// else {
//   fetch('http://localhost:3000/api/cameras/order', {
//                 method: 'POST',
//                 body: JSON.stringify(objectOrder),
//                 headers: {
//                 'Content-type': 'application/json; charset=UTF-8'
//                 }
//             })
//             .then(response => {
//                 if (response.status == 201) {
//                     (window.location.href = 'confirmation_commande.html')
//                     //let confirmation = JSON.parse(this.responseText);
//                     //sessionStorage.setItem('order', JSON.stringify(confirmation));
//                 }
//             })
//             .catch(err => console.log(err));
//         };
//       }
// //   let request = new XMLHttpRequest();
// //   request.onreadystatechange = function () {
// //     if (this.readyState == XMLHttpRequest.DONE) {
// //           let confirmation = JSON.parse(this.responseText);
// //           sessionStorage.setItem('order', JSON.stringify(confirmation));
// //           // let prix = JSON.parse(localStorage.getItem('prixTotal'));
// //           // sessionStorage.setItem('prix', JSON.stringify(prix));
// //       //  console.log(typeof prix);
// //       //  console.log( prix);
// //           //Des que la requete est envoyé, on bascule sur la page de confirmation de commande avec toutes les infos demandé : Id de commande, prix du panier
// //       window.location.href = 'confirmation_commande.html';
// //     }
// //   }
// //   request.open('post', 'http://localhost:3000/api/cameras/order');
// //   request.setRequestHeader('Content-Type', 'application/json');
// //   request.send(objectOrder);
// // }

// FUNCTIONS 
function createDomHTML() {
  let main = document.createElement("main");
  main.className = "container";
  let section1 = document.createElement("section");
  section1.id = "sectionPanier";
  let h1 = document.createElement("h1");
  h1.textContent = "OrinoCamera";
  let h2 = document.createElement("h2");
  h2.id = "recap";
  h2.textContent = "Panier";
  let div = document.createElement("div");
  div.id = "panierGlobal";
  let p = document.createElement("p");
  p.id = "cartSummary";
  let divCart = document.createElement("div");
  divCart.id = "contenuPanier";
  let ulProduit = document.createElement("ul");
  ulProduit.id = "productList";
  let divPrixTotal = document.createElement("div");
  divPrixTotal.id = "prixTotal";
  let pTotalPrice = document.createElement("p");
  pTotalPrice.id = "prixTTC";
  let section2 = document.getElementById("sectionFormulaire");

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
  divPrixTotal.appendChild(pTotalPrice);
  div.appendChild(p);
  p.textContent = "Votre panier est vide";
}

function setCartSummaryText() {
  let qte = CART.length;
  let p = document.getElementById("cartSummary");
  if (CART) {
    if (qte == 1) {
      p.textContent =
        "Il y a " + `${CART.length}` + " article dans votre panier : ";
    }
    if (qte >= 2) {
      p.textContent =
        "Il y a " + `${CART.length}` + " articles dans votre panier : ";
    }
    console.log(qte);
  }
}
// Affichage du panier
function displayCart() {
  let productList = document.getElementById("productList");
  CART.forEach(function (product) {
    console.log(panier);
    console.log(`${product.name}`);
    let li = document.createElement("li");
    li.className = "listeProduit";
    li.innerHTML = "<b>Camera :</b> " + `${product.name}` + " " + " <b>Prix : </b>" + `${product.price}` / 100 + "€";
    productList.appendChild(li);
    //création bouton supprimer
    let supprimer = document.createElement("button");
    idProduit = product._id;
    idSup = "supprimer" + `${idProduit}`; // j'ai passé en global cette variable pour l'utiliser dans la fonctionn sup
    supprimer.id = idSup;
    supprimer.className = "btn btn-secondary";
    supprimer.textContent = "Supprimer";
    li.appendChild(supprimer);
  });
}
function totalPrice() {
  let total = 0;
  CART.forEach(function (product) {
    let prixProduit = parseFloat(`${product.price}`);
    total = total + prixProduit;
    console.log(total);
  });
  let pTotalPrice = document.getElementById('prixTTC');
  pTotalPrice.textContent = "Prix total : " + total / 100 + " €";
  localStorage.setItem("prixFinal", total / 100);
}
function backToIndex() {
  let retour = document.createElement("a");
  let section2 = document.getElementById("sectionFormulaire");
  retour.href = "index.html";
  retour.className = "btn btn-primary";
  retour.id = "btnRetour";
  retour.textContent = "<< Retour";
  section2.appendChild(retour);
  }
  // Compteur quantité
  function setNavCartCount(){
    let nbre = document.getElementById("panier");
    nbre.textContent = "Panier (" + `${CART.length}` + ")";
  }

  function validation(event) {
    let firstName = document.getElementById("firstName");
    let firstNameError = document.getElementById("firstNameError");
    let firstNameOk = /^[a-zA-Z ,.'-]+$/;
  
    let lastName = document.getElementById("lastName");
    let lastNameError = document.getElementById("lastNameError");
    let lastNameOk = /^[a-zA-Z ,.'-]+$/;
  
    let address = document.getElementById("address");
    let addressError = document.getElementById("addressError");
    let addressOk = /[0-9a-zA-Z]{1,3}[a-z ,.'-]+$/;
  
    let city = document.getElementById("city");
    let cityError = document.getElementById("cityError");
    let cityOk = /[0-9a-zA-Z]{1,3}[a-z ,.'-]+$/;
  
    let email = document.getElementById("email");
    let emailError = document.getElementById("emailError");
    let emailOk = /[\w\.]+[\w]@[\w]+\.[\w]/;
    //Si le champ est vide
    if (firstName.validity.valueMissing) {
      event.preventDefault();
      firstNameError.textContent = "Prénom manquant";
      firstNameError.style.color = "red";
      //Si le format de données est incorrect
    } else if (firstNameOk.test(firstName.value) == false) {
      event.preventDefault();
      firstNameError.textContent = "Format incorrect";
      firstNameError.style.color = "orange";
    } else if (lastName.validity.valueMissing) {
      event.preventDefault();
      lastNameError.textContent = "Nom manquant";
      lastNameError.style.color = "red";
      //Si le format de données est incorrect
    } else if (lastNameOk.test(lastName.value) == false) {
      event.preventDefault();
      lastNameError.textContent = "Format incorrect";
      lastNameError.style.color = "orange";
    } else if (address.validity.valueMissing) {
      event.preventDefault();
      addressError.textContent = "Adresse manquante";
      addressError.style.color = "red";
      //Si le format de données est incorrect
    } else if (addressOk.test(address.value) == false) {
      event.preventDefault();
      addressError.textContent = "Format incorrect";
      addressError.style.color = "orange";
    } else if (city.validity.valueMissing) {
      event.preventDefault();
      cityError.textContent = "Ville manquante";
      cityError.style.color = "red";
      //Si le format de données est incorrect
    } else if (cityOk.test(city.value) == false) {
      event.preventDefault();
      cityError.textContent = "Format incorrect";
      cityError.style.color = "orange";
    } else if (email.validity.valueMissing) {
      event.preventDefault();
      emailError.textContent = "Courriel manquant";
      emailError.style.color = "red";
      //Si le format de données est incorrect
    } else if (emailOk.test(email.value) == false) {
      event.preventDefault();
      emailError.textContent = "Format incorrect";
      emailError.style.color = "orange";
    } else if (CART == null) {
      event.preventDefault();
      alert(
        "Votre panier est vide! Pour passer commande, il vous faut au moins un article ;)"
      );
      return false;
    } else {
      // tous les else if renvoient return false
      return true;
    }
  }