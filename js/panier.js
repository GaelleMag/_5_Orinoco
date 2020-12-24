// Compteur quantité
let panier = JSON.parse(localStorage.getItem("monPanier"));
//let panier = localStorage.getItem('monPanier');
let params = new URLSearchParams(document.location.search);

let id = params.get("id");
let idProduct = panier._id;

// Affichage des éléments du DOM

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
p.id = "panierDetail";
p.textContent =
  "Il y a " + `${panier.length}` + " article(s) dans votre panier : "; // penser à adapter le mot article en fonction du nombre
let divCart = document.createElement("div");
divCart.id = "contenuPanier";
let ulProduit = document.createElement("ul");
let divPrixTotal = document.createElement("div");
divPrixTotal.id = "prixTotal";
let pPrixTotal = document.createElement("p");
pPrixTotal.id = "prixTTC";
let section2 = document.getElementById("sectionFormulaire");

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
p.textContent = "Votre panier est vide";

// Message sur quantité d'objet dans la panier

if (panier) {
  function nombreProduit() {
    let qte = panier.length;

    if (qte == 1) {
      p.textContent =
        "Il y a " + `${panier.length}` + " article dans votre panier : ";
    }
    if (qte >= 2) {
      p.textContent =
        "Il y a " + `${panier.length}` + " articles dans votre panier : ";
    }
    console.log(qte);
  }
  nombreProduit();

  //     SECTION 1 : LE PANIER

  // Affichage du panier

  function afficherPanier() {
    let cart = JSON.parse(localStorage.getItem("monPanier"));
    //             var txt = '{"_id": "5be1ed3f1c9d44000030b061", "name": "Zurss 50S"}'
    // var obj = JSON.parse(txt);
    // console.log(obj.name)
    //for (let i=0; i<= panier.length; i++){
    panier.forEach(function (product) {
      //console.log(monPanier)
      console.log(panier);
      console.log(`${product.name}`);
      let li = document.createElement("li");
      li.className = "listeProduit";
      //panier = [];
      //        let indice = `${panier._id}`;
      //       console.log(`${panier._id}`);
      //        let idx = panier.indexOf(indice);
      //        console.log('idx');

      li.textContent =
        "Caméra : " +
        `${product.name}` +
        " " +
        " Prix : " +
        `${product.price}` / 100 +
        "€";
      ulProduit.appendChild(li);

      // bouton supprimer
      //     let supprimerArticle = document.createElement("button");
      //     supprimerArticle.className = "btnSup";
      //     supprimerArticle.textContent = "Supprimer";
      //   //  li.appendChild(supprimerArticle);
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
  pPrixTotal.textContent = "Prix total : " + total / 100 + " €";
}
prixTotal();

let retour = document.createElement("a");
retour.href = "index.html";
retour.className = "btn btn-primary btn-block mb-4";
retour.textContent = "Retour";
section2.appendChild(retour);

//     SECTION 2 : LE FORMULAIRE

// Affichage d'un message contextuel pour la saisie du nom
var nomElt = document.getElementById("nom");
//nomElt.value = "Mon nom";

nomElt.addEventListener("focus", function () {
  document.getElementById("nom").textContent = "Entrez votre nom";
});

// Suppression du message contextuel pour la saisie du nom
nomElt.addEventListener("blur", function (e) {
  document.getElementById("nom").textContent = "";
});

// Focus sur la zone de saisie du nom
nomElt.focus();

//Contrôle du courriel en fin de saisie

function verifMail() {
  document.getElementById("email").addEventListener("blur", function (e) {
    var regexEmail = /[\w\.]+[\w]*@[\w]+\.[\w]/;
    if (!regexEmail.test(e.target.value)) {
      validiteEmail = "Adresse invalide";
    } else {
      console.log("ok");
    }
    document.getElementById("aideCourriel").textContent = validiteEmail;
  });
}

// var txt = '{"_id": "5be1ed3f1c9d44000030b061", "name": "Zurss 50S"}'
// var obj = JSON.parse(txt);
// console.log(obj.name)

// Bouton envoyer
let productsOrdered = getProductsOrdered(); // récupère les infos et les stocke en objet

function getProductsId() {
    let products = []
  panier.forEach((product) => products.push(product._id));

  return products;
}

function getProductsOrdered() {
  // Vérification du panier (non nul)
  let panier = localStorage.getItem("monPanier");
  console.log(panier);

  if (panier == null) {
    alert("Votre panier est vide");
  }
  // Tableau produits
 // let products = [];
  // récupérer uniquement id

 const productsId = getProductsId();
 console.log(productsId)
}

let customerInfo = getCustomerInfo();
console.log(customerInfo);

function getCustomerInfo() {
  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastName").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let email = document.getElementById("email").value;

  class Contact {
    constructor(firstName, lastName, address, city, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.city = city;
      this.email = email;
    }
    Contact = new Contact();
    // ajouter data user au localStorage sous forme
  }
}

// Création de la fonction envoyer données au serveur + récupération id commande en retour
function validateAndSendOrder() {
  console.log("validateAndSendOrder!");
  let send = {
    customerInfo,
    productsOrdered,
    //Contact,
    //products
  };

  // let sendOrder = JSON.stringify(send);
  // }

  /* ex
var payload = {
    a: 1,
    b: 2
};

var data = new FormData();
data.append( "json", JSON.stringify( payload ) );

fetch("/echo/json/",
{
    method: "POST",
    body: data
})
.then(function(res){ return res.json(); })
.then(function(data){ alert( JSON.stringify( data ) ) }) */

  // Envoyer Data vers id /order

  //let orderReturn = sendOrder(productsOrdered, customerInfo);
  //function sendOrder(productsOrdered, customerInfo){
  function sendOrder(productsOrdered, customerInfo) {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == XMLHttpRequest.DONE) {
        let confirmation = JSON.parse(this.responseText);
        localStorage.setItem("order", JSON.stringify(confirmation));
        /*let prix = JSON.parse(localStorage.getItem('prixTotal'));
               sessionStorage.setItem('prix', JSON.stringify(prix));
              console.log(typeof prix);
              console.log( prix);*/
        //Des que la requete est envoyé, on bascule sur la page de confirmation de commande avec toutes les infos demandé : Id de commande, prix du panier
        window.location.href = "confirmation_commande.html";
      }
    };
    request.open("post", "http://localhost:3000/api/cameras/order");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(validateAndSendOrder);
  }

  console.log("sendOrder");
}

document.getElementById("envoyer").addEventListener("click", function (event) {
  console.log("2");
  validateAndSendOrder();
});

function contactUs() {
  Swal.fire({
    imageUrl: "images/contact2.jpg",
    imageHeight: 700,
    imageWidth: 1500,
    imageAlt: "contact",
  });
}
