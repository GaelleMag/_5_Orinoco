// Déclarations variables

const imageCamera = document.querySelector('img');
const params = new URLSearchParams(document.location.search);
const id = params.get('id');
let url = 'http://localhost:3000/api/cameras/';
let urlProduit =  'detail.produit.html?id=' + '._id';
console.log(urlProduit)
 
if (localStorage.getItem('monPanier')){
    console.log('panier OK')
}
else {
    console.log('création panier')
    let init = []
    localStorage.setItem('monPanier', (JSON.stringify(init)))
};
//let panier = JSON.parse(localStorage.getItem('monPanier'));
let panier = JSON.parse(localStorage.getItem('monPanier'));
console.log(panier)

// connexion API

//let camera = data; let id =  camera._id;
fetch('http://localhost:3000/api/cameras/'+ id)
//fetch('http://localhost:3000/api/cameras/')
    .then((response) => response.json())
    .then(function(data) {

        // compteur produit 
        let nbre = document.getElementById('panier');
            nbre.textContent = 'Panier (' + `${panier.length}` + ')';

        // affichage camera + description dans le DOM


        let main = document.createElement('main');
            main.className = 'container';
        let h1 = document.createElement('h1');
            h1.className = 'my-4';
            h1.innerHTML = 'OrinoCamera, <small>votre boutique de caméra vintage</small>'
        let section1 = document.createElement('section');
            section1.id = 'section_camera';
            section1.className = 'row';
        let div_title = document.createElement('div');
            div_title.id = 'title';
            div_title.className = 'my-3'
        let div_row = document.createElement('div');
            div_row.className = 'col-md-5 first';
        let div_row2 = document.createElement('div');
            div_row2.className = 'col-md-7 second';
        let image = document.createElement('img');
            image.className = 'img-fluid';
        let para = document.createElement('p');
            para.id = 'para';
        let para_prix = document.createElement('p');
            para_prix.id = 'para_prix';
        let span = document.createElement('span');
            span.className = 'col-md-4';
        let sectionSelect = document.createElement('section');
            sectionSelect.id = 'section_ga';
            sectionSelect.className = 'row';
        let div_lent = document.createElement('div');
            div_lent.id = 'div_select';

        let form = document.createElement('form');
        form.className = 'row justify-content-around custom-line'
        let selectLent = document.createElement('select');
            selectLent.id = 'selectLentille';
            selectLent.className = 'col-md-3';
        let boutonAjout = document.createElement('button');
            boutonAjout.id = 'btnAjout';
            //boutonAjout.className = 'col-md-3';
            boutonAjout.className = 'btn btn-success btn-block col-md-3';
            boutonAjout.textContent = 'Ajouter';
        let retour = document.createElement('a');
            retour.href = 'index.html';
            retour.className = 'btn btn-primary btn-block mb-4';
            retour.textContent = 'Retour'; 

        document.body.appendChild(main);
        main.appendChild(h1);
        main.appendChild(section1);
        section1.appendChild(div_title);
        section1.appendChild(div_row2);
        section1.appendChild(div_row);
        div_row2.appendChild(image);
        div_row.appendChild(para);
        div_row.appendChild(para_prix);
        div_row.appendChild(para);
        para.appendChild(span);

        main.appendChild(sectionSelect);
        sectionSelect.appendChild(div_lent);
        div_lent.appendChild(form);
        div_lent.appendChild(retour);
        form.appendChild(selectLent);
        form.appendChild(boutonAjout);
        document.body.appendChild(footer);

    //    document.body.appendChild(section);
       // section2.appendChild(div_row);

       let t_prix = document.createTextNode('Prix : ' + `${data.price}`/100  + ' €');
        para_prix.appendChild(t_prix);

        let t_desc = document.createTextNode('Description : ' +  `${data.description}` + '\n');
        span.appendChild(t_desc);
        
        image.setAttribute('src', data.imageUrl);

        let titre = document.createTextNode(`${data.name}`); 
        div_title.appendChild(titre); 

 // Choix de la lentille


        data.lenses.forEach(function(lense) {
           // let lentille  = document.getElementById('selectlentille');
            let option = document.createElement('option');
              option.value = `${lense}`;
            option.textContent = `${lense}`;
            option.id = `${lense}`;
            selectLent.appendChild(option);
            console.log(`${lense}`)
           // let choixL =  document.getElementById(`${lenses}`);


            })


        function addCart(){
            let bouton = document.getElementById('btnAjout');
            bouton.addEventListener('click', function(e){ 
                e.preventDefault();
                
                panier.push(data);
                //panier.push(data.name + data._id);
                //console.log(data._id);
                localStorage.setItem('monPanier', JSON.stringify(panier));
                //localStorage.setItem('monPanier', panier);
                alert('Vous avez ajouté ' + `${data.name}` + ' au panier');
                document.location.reload()
            }) 
        }
            addCart()

            
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

