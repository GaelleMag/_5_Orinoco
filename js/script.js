function createNode(element){
  return document.createElement(element);
}

function append(parent, el){
  return parent.appendChild(el);
}
const ul = document.getElementById('toutesNosCameras');
const url = 'http://localhost:3000/api/cameras';
const produit = 'Voir le produit';
let panier = JSON.parse(localStorage.getItem('monPanier'));

  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    console.log(data)
    let cameras = data;
    let main = document.getElementById('toutesNosCameras');
    let h1 = createNode('h1');
        h1.textContent = 'OrinoCamera, Caméras vintages!';
    let h2 = createNode('h2');
        h2.className= 'my-4';
        h2.textContent = 'Nos Appareils'
    let divGlobale = createNode('div');
        divGlobale.className = 'row';
        append(main, h1);
        append(main,h2);
        append(main, divGlobale);
    
      

    return cameras.map(function(camera){
      let id =  camera._id;

      
      let div1 = createNode('div');
        div1.className = 'col-lg-4 col-sm-6 mb-4';
      let div2 = createNode('div');
        div2.className = 'card h-100';
      let div3 = createNode('div');
        div3.className = 'card-body';
      let img = createNode('img');
          img.className = 'card-img-top';
          img.src = camera.imageUrl;
    //  let h1 = createNode ('h1');
    //      h1.textContent = 'OrinoCamera, camréras vintages';
      let h3 = createNode('h3');
          h3.className = 'card-title';
          h3.innerHTML = `${camera.name}` + ' ' /*+ ' \n ' + `${camera.description}`*/;
      let p = createNode('p');
          p.className = 'card-text';
          p.innerHTML = `${camera.description}` + ' '; 
      let a = createNode('a');
        a.className = 'btn btn-primary';
        a.innerHTML = produit + ' ';
        a.setAttribute('src', url+ '/_id:'+camera._id)
      let link =  a ;
              link.id = 'lien';
              link.href = 'detail.produit.html?id=' + camera._id;
              link.textContent = 'Voir la camera';
      
      
      let header = document.getElementById('header');
      
      let footer = document.getElementById('footer');
      main.className = 'container';
      document.body.appendChild(header);
      document.body.appendChild(main);

     
      append(divGlobale, div1);
      append(div1, div2)
      append(div2, img);
      append(div2, div3);
      append(div3, h3);
      append(div3, p);
      append(div3, a);
      document.body.appendChild(footer);

      // header
      function nombreProduit(){
        let qte = panier.length;
        console.log(panier.length)
        panier = document.getElementById('panier'),
    panier.textContent = 'Paner' + `${panier.length}`;
    }
        })
    nombreProduit() 
    
  })
.catch(function(error){
  console.log(error);
});
function contactUs() {
  Swal.fire({
      //let btnContact = document.getElementById()
      imageUrl: 'images/contact2.jpg',
      imageHeight: 700,
      imageWidth : 1500,
      imageAlt: 'contact'
  })  
};
/*
var URL = 'https://developer.mozilla.org/';

console.log('Cliquer ici pour revenir sur ' + texteAffiché.link(URL));
// Cliquer ici pour revenir sur <a href='https://developer.mozilla.org/'>MDN</a>*/

/* let link = document.createElement('a');
            link.id = 'lien';
            link.href = 'produit.html?id=' + teddy._id;
            link.textContent = 'Voir l'ourson';*/