
//    Connexion à l'API pour récupération des données du serveur
fetch('http://localhost:3000/api/cameras')
  .then(response => response.json()).then(console.log)


//  Récupération des données du serveur grace à la requete précedente
var products = function () {
  return camera('http://localhost:3000/api/cameras/').then(function (response) {
    var products = JSON.parse(response);
    return products;
  });
};
let vcam = document.getElementById('vcam');

 products().then(function(products){
  console.log(products);
  

  // forEach pour afficher Chaque produits à la suite sous forme de liste
  products.forEach( camera=> {
  
    var article = document.createElement('article');
    article.id= "articleListe";

      var image = document.createElement('img');
      image.src =  camera.imageUrl;

        var div = document.createElement('div');
          var nom = document.createElement('h3');
          nom.textContent = camera.name;
          nom.id = "camera";

          var prix = document.createElement('h4');
          prix.textContent = 'Prix :';
            var price = document.createElement('p');
            price.textContent = camera.price + ' €';
    
          var id = teddy._id;

          let link = document.createElement('a');
            link.id = "lien";
            link.href = 'produit.html?id=' + camera._id;
            link.textContent = "Voir l'appareil";

// mise en place des éléments pour les autres articles affichés en boucle dans le DOM

    vcam.appendChild(article);
    article.appendChild(nom);
    article.appendChild(image);
    article.appendChild(div);
    div.appendChild(prix);
    div.appendChild(price);
    div.appendChild(link)
  });
});