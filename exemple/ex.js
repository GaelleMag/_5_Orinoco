/*Lien avec l'API */

getAllCameras = () => {
  return new Promise((resolve) => {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (
        this.status < 400
      ) {
        resolve(JSON.parse(this.responseText));
        console.log("Connecté");
      } else {
      }
    };
    request.open("GET", "http://localhost:3000/api/cameras/");
    request.send();
  });
};

async function teddies() {
  const cameras = await getAllCameras();

    /* Lien avec la page index HTML */

  let listeProduit = document.getElementById("listeProduit");


  /* création de la structure index HTML */

  cameras.forEach((camera) => {
    let produitContenant = document.createElement("section");
    let produitIllustration = document.createElement("div");
    let produitElement = document.createElement("div");
    let produitPhoto = document.createElement("img");
    let produitNom = document.createElement("h3");
    let produitPrix = document.createElement("p");
    let produitAction = document.createElement("a");

    /*Ajout des attributs au balise index HTML */
    produitContenant.setAttribute("class", "produit_contenant");
    produitIllustration.setAttribute("class", "produit_illustration");
    produitPhoto.setAttribute("src", vcam.imageUrl);
    produitPhoto.setAttribute("alt", "Photo de la caméra");
    produitElement.setAttribute("class", "produit_element");
    produitNom.setAttribute("class", "produit_nom");
    produitPrix.setAttribute("class", "produit_prix");
    produitAction.setAttribute("href", "produit.html?id=" + camera._id);

    /* Agencement des éléments index HTML */
    listeProduit.appendChild(produitContenant);
    produitContenant.appendChild(produitIllustration);
    produitIllustration.appendChild(produitPhoto);
    produitContenant.appendChild(produitElement);
    produitElement.appendChild(produitNom);
    produitElement.appendChild(produitPrix);
    produitElement.appendChild(produitAction);

    /* Contenu des balises index HTML */
    produitNom.textContent = camera.name;
    produitPrix.textContent = camera.price / 100 + " euros";
    produitAction.textContent = "En savoir plus";
  });
}

let idCamera = "";
async function detailCamera() {
  idCamera = location.search.substring(4);
  const detailCamera = await getAllCameras();}