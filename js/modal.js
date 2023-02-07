// Ventana modal
var modal = document.getElementById("ventanaModal");

// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var span = document.getElementsByClassName("cerrar")[0];

// Si el usuario hace clic en la x, la ventana se cierra
span.addEventListener("click", function () {
  modal.style.display = "none";
});
// Si el usuario hace clic fuera de la ventana, se cierra.
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

let modalesContenido = [{
  id: 1,
  title: 'Pet Shop',
  text: 'laudantium enim quasi est quidem magnam voluptate …utem quasi\nreiciendis et nam sapiente accusantium',
  image: '../images/capturaPetShop.png',
  techList: ['<span class="techs">html</span>', '<span class="techs">js</span>', '<span class="techs">css</span>'],
  linkSitioWeb: 'https://falconleandro.github.io/Frontend/PetShop/index.html',
  linkGithub: './LemonPie/index.html'
}, {
  id: 2,
  title: 'Examen',
  text: ' magnam voluptate …utem quasi\nreiciendis et nam sapiente accusantium',
  image: '../images/capturaExamen.png',
  techList: ['<span class="techs">html</span>', '<span class="techs">react</span>', '<span class="techs">css</span>', '<span class="techs">sass</span>'],
  linkSitioWeb: 'https://falconleandro.github.io/Frontend/ExamenPracticoFinal-FE1-LeandroFalcon/index.html',
  linkGithub: './LemonPie/index.html'
}, {
  id: 3,
  title: 'Heroes',
  text: ' quidem magnam voluptate …utem quasi\nreiciendis et nam sapiente accusantium',
  image: '../images/capturaHeroes.PNG',
  techList: ['<span class="techs">html</span>', '<span class="techs">css</span>'],
  linkSitioWeb: 'https://falconleandro.github.io/Frontend/Heroes/index.html',
  linkGithub: './LemonPie/index.html'
}, {
  id: 4,
  title: 'Pizzeria',
  text: ' voluptate …utem quasi\nreiciendis et nam sapiente accusantium',
  image: '../images/capturaPizzeria.png',
  linkSitioWeb: '',
  techList: ['<span class="techs">html</span>', '<span class="techs">react</span>', '<span class="techs">css</span>'],
  linkSitioWeb: 'https://falconleandro.github.io/Frontend/Pizzeria/index.html',
  linkGithub: ''
}, {
  id: 5,
  title: 'Batman',
  text: ' magnam voluptate …utem quasi\nreiciendis et nam sapiente accusantium',
  image: '../images/capturaBatmanCv.png',
  techList: ['<span class="techs">html</span>', '<span class="techs">react</span>', '<span class="techs">css</span>', '<span class="techs">sass</span>'],
  linkSitioWeb: 'https://falconleandro.github.io/Frontend/Cv/index.html',
  linkGithub: './LemonPie/index.html'
}, {
  id: 6,
  title: 'Lemon Pie',
  text: ' magnam voluptate …utem quasi\nreiciendis et nam sapiente accusantium',
  image: '../images/capturaLemonPie.png',
  techList: ['<span class="techs">html</span>', '<span class="techs">react</span>', '<span class="techs">css</span>', '<span class="techs">sass</span>'],
  linkSitioWeb: 'https://falconleandro.github.io/Frontend/LemonPie/index.html',
  linkGithub: './LemonPie/index.html'
}
];

/* ------------------------- funcion para atrapar el evento de clickeado ------------------------- */
function atraparIdCardClickeada() {
  //agarro todos los cards
  const cards = document.querySelectorAll('.card');
  console.log(cards);
  const modalContenedor = document.querySelector('.contenido-modal');

  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', e => {

      //accedo al id que tiene la card clickeada
      var id = e.target.getAttribute("id");

      for (let i = 0; i < modalesContenido.length; i++) {

        if (id == modalesContenido[i].id) {
          modal.style.display = "block";

          modalContenedor.innerHTML = `
            <div class="contenedor-modal-descripcion">
                <h2 class="modal-descripcion-titulo">${modalesContenido[i].title}</h2>
                <p>${modalesContenido[i].text}</p>
                
                <div>
                  ${modalesContenido[i].techList}
                </div>
            </div>
            <div class="contenedor-modal-preview">
                <img class="${id == 6 || id == 4 || id == 5 ? 'animacion-none' : ' '}" src="${modalesContenido[i].image}"/>
                <div id="modal-preview-shadow"></div>
                <div class="modal-preview-enlaces">
                    <a href="${modalesContenido[i].linkSitioWeb}" target=" _blank">GitHub</a>
                    <a href="${modalesContenido[i].linkSitioWeb}" target=" _blank">Web Site</a>
                </div>
            </div>
          `
        }
      }
    });
  }
};
atraparIdCardClickeada();