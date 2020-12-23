        // Compteur quantité
    let panier = JSON.parse(localStorage.getItem('monPanier'));
    //let panier = localStorage.getItem('monPanier');
    let params = new URLSearchParams(document.location.search);

    let id = params.get('id');
    let idProduct = panier._id;


    // Affichage des éléments du DOM

    let section1 = document.createElement("section");
        section1.id = "sectionPanier";
    let h1 = document.createElement('h1');
        h1.textContent = 'OrinoCamera';
    let h2 = document.createElement("h2");
        h2.id = "recap";
        h2.textContent = "Panier";
    let div = document.createElement("div");
        div.id = "panierGlobal";
    let p = document.createElement("p");
        p.id = "panierDetail" ;
        p.textContent = "Il y a " + `${panier.length}` + " article(s) dans votre panier : "; // penser à adapter le mot article en fonction du nombre
    let divCart = document.createElement("div");
        divCart.id = "contenuPanier";
    let ulProduit = document.createElement ('ul');
    let divPrixTotal = document.createElement("div");
        divPrixTotal.id = "prixTotal"
    let pPrixTotal = document.createElement('p');
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
    
    if (panier){ 
        function nombreProduit(){
            let qte = panier.length;
        
            if (qte ==1){
             p.textContent = "Il y a " + `${panier.length}` + " article dans votre panier : ";
            }
            if (qte >=2){
                p.textContent = "Il y a " + `${panier.length}` + " articles dans votre panier : ";
             } 
        console.log(qte) 
        };
        nombreProduit() 


    

                //     SECTION 1 : LE PANIER

    // Affichage du panier

        function afficherPanier(){
            let cart = JSON.parse(localStorage.getItem('monPanier'));
            //             var txt = '{"_id": "5be1ed3f1c9d44000030b061", "name": "Zurss 50S"}'
            // var obj = JSON.parse(txt);
            // console.log(obj.name)
          //for (let i=0; i<= panier.length; i++){      
            panier.forEach(function(panier){
            //console.log(monPanier)
                console.log(panier)
                console.log(`${panier.name}`)
               let li = document.createElement ('li'); 
               li.className = "listeProduit";
                 //panier = [];
        //        let indice = `${panier._id}`;
         //       console.log(`${panier._id}`);
        //        let idx = panier.indexOf(indice);
        //        console.log('idx');
               
               li.textContent = "Caméra : "  + `${panier.name}` + " " + " Prix : " + `${panier.price}`/100 + "€";
               ulProduit.appendChild(li);

            // bouton supprimer
            //     let supprimerArticle = document.createElement("button");
            //     supprimerArticle.className = "btnSup";
            //     supprimerArticle.textContent = "Supprimer";
            //   //  li.appendChild(supprimerArticle); 
            

            })
        }
    };
    afficherPanier()

    function prixTotal(){
        let total = 0;
        panier.forEach(function(panier){
          
            let prixProduit = parseFloat(`${panier.price}`);
            total = (total + prixProduit);
            console.log(total)
        })
        pPrixTotal.textContent = "Prix total : " + total/100 + " €";
    }
    prixTotal()
 
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

function verifMail(){
    document.getElementById("email").addEventListener("blur", function (e) {
    var regexEmail = /[\w\.]+[\w]*@[\w]+\.[\w]/;
    if (!regexEmail.test(e.target.value)) {
        validiteEmail = "Adresse invalide";
    }else {
        console.log("ok")
    }
    document.getElementById("aideCourriel").textContent = validiteEmail;
    })
};

// var txt = '{"_id": "5be1ed3f1c9d44000030b061", "name": "Zurss 50S"}'
// var obj = JSON.parse(txt);
// console.log(obj.name)


           // Bouton envoyer
let productsOrdered = getProductsOrdered() // récupère les infos et les stocke en objet

/*function achat() {

// integration d'une alerte si le panier est vide, on ne peut pas passer commande  
  let panier = localStorage.getItem('panier');
  panier = JSON.parse(panier);
  var total = localStorage.getItem('prixTotal');
if (panier == null || total == 0){
  alert("Votre panier est vide, vous ne pouvez pas passer une commande ! ")
 }  
// on déclare un tableau de produits pour la requete POST plus tard
 let products = [];

 // on fait une fonction pour récupérer les id des produits au panier, pour l'afficher dans la requete POST
 function productId(products) {
  let panier = JSON.parse(localStorage.getItem('panier'));
  
  products = Object.values(panier).map( (data) => {
    let qté = parseInt(data.qté);
    console.log(typeof qté);
    console.log(qté);
    
    for (let i = 0 ; i< qté ; i ++){
        products.push(data._id);  
      }
       console.log(products); 
      return products; 
     });
 
  };*/

function getProductsOrdered(){
    // Vérification du panier (non nul) 
  let panier = localStorage.getItem('monPanier');
  //panier = JSON.parse(panier);
  console.log(panier)

if (panier == null){
  alert("Votre panier est vide")
 }  
// Tableau produits 
 let products = [];
 // récupérer uniquement id :
 function productsId(products) {
    let panier = JSON.parse(localStorage.getItem('panier'));
    
    products = Object.values(panier).map( (panier) => {
      let qté = parseInt(panier.length);
      console.log(typeof qté);
      console.log(qté);
      
      for (let i = 0 ; i< qté ; i ++){
          products.push(panier._id);  
        }
         console.log(products); 
        return products; 
       });
  
    }

}
 /* let idArray = [];
    panier.forEach(function(panier){
        idArray = idArray+1;
        //console.log(monPanier)
        console.log(panier)
        console.log(panier._id)
        //let productId = JSON.parse(localStorage.getItem('panier._id')); // envoyer ca dans le storage
        let productId = panier._id;
        console.log(typeof productId)
        console.log(productId)
        productId.push(panier._id);
        localStorage.setItem('productId', JSON.stringify(productId));
        // pour chaque article
        // je dois récupérer les id des produits stockés dans mon storage 'panier' pour les stocker dans une variable
        // ensuite, je dois prendre cette variable et l'envoyer dans mon storage via un nouveau nom (=créa d'un 'cookie') pour envoi
       // push array [idarray, panier._id];*/
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


    //SlocalStorage.getItem('monPanier', JSON.stringify(panier));
    // var monobjet_json = JSON.stringify(panier);
    // var monobjet = JSON.parse(monobjet_json);
// Affichage dans la console
   // console.log(monobjet.name);
    //let  productsInCart = localStorage.getItem(panier._id);
    //console.log(panier._id)
    //console.log(productsInCart)
//     let mon_objet = Object.create({}, { getToto: { value: function() { return this.toto; } } });
// mon_obj.toto = "truc";
// let  productsInCart = panier
// console.log(Object.values(panier.id));

// let  productsInCart = Object.create({}, { getPanier: { value: function() { return this._id; } } });
// panier = "_id";

// //console.log(Object.values(mon_obj))
//     console.log(Object.values(panier))
//   //  let productsInCart = `${panier._id}`;
//     console.log( `${panier._id}`)
//     console.log(panier.name);  //   let prixProduit = parseFloat(`${panier.price}`);
//         console.log(productsInCart)    
    // for (let productsInCart in panier) {
    //     console.log(panier._id);
    //     console.log(typeof panier);
    //     console.log(panier.name)   // parse
    //   }
    



let customerInfo = getCustomerInfo()
console.log(customerInfo)

function getCustomerInfo(){
    
        let firstName = document.getElementById('firstname').value;
        let lastName = document.getElementById('lastName').value;
        let address = document.getElementById('address').value;
        let city = document.getElementById('city').value;
        let email = document.getElementById('email').value;

        class Contact{
        constructor(firstName, lastName, address, city, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.address = address; 
            this.city = city;
            this.email = email;
        }
    Contact = new Contact;
 // ajouter data user au localStorage sous forme 
    }
}

// Création de la fonction envoyer données au serveur + récupération id commande en retour
function validateAndSendOrder(){
    console.log('validateAndSendOrder!')

}



    // Envoyer Data vers id /order

let orderReturn = sendOrder(productsOrdered, customerInfo)
function sendOrder(productsOrdered, customerInfo){
    //prendre les données et les envoyer à API http://localhost:3000/api/cameras/order;
    // gérer order return si ok alors return  if sendOrder = ok
     //                    else si ko alors ...
     if (panier == null || total == 0){
        return event.preventDefault();
     
      } else {
      // si tout à été bien rempli, on envoi la commande au serveur, avec toutes les coordonnées du client
      let request = new XMLHttpRequest();
           request.onreadystatechange = function () {
             if (this.readyState == XMLHttpRequest.DONE) {
               let confirmation = JSON.parse(this.responseText);
               sessionStorage.setItem('order', JSON.stringify(confirmation));
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
    
    console.log('sendOrder')
}
  
   
  

document.getElementById('envoyer').addEventListener('click', function(event) {
    console.log('2');
    validateAndSendOrder();

});
// // Get the modal
// var modal = document.getElementById("myModal");
    
// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");
//     btn.setAttribute("src", images/contact.jpg);
    

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// //export {lastName};
// function contactUs() {
//     Swal.fire({
//         imageUrl: 'images/contact.jpg',
//         imageHeight: 1500,
//         imageAlt: 'A tall image'
//       })
//       })
// };
    
    // getElementById('contactUs').function openContact(){
    //     Swal.fire({
    //         imageUrl: 'image/contact.jpg',
    //         imageHeight: 1500,
    //         imageAlt: 'contact'
    //     })         
    // };

function contactUs() {
    Swal.fire({
        //let btnContact = document.getElementById()
        imageUrl: 'images/contact2.jpg',
        imageHeight: 700,
        imageWidth : 1500,
        imageAlt: 'contact'
    })  
};
