import {
  buatELement
} from '../functions'

const kepala = (async () => {
  document.body.innerHTML = ''
  const headerElement = await buatELement('header', 'body')
  headerElement.setAttribute('id', 'header')

  navbar()
  jumbotron()
})()

const navbar = async () => {
  const navbar = await buatELement('nav', 'header')
  navbar.innerHTML = `
    <div class="brand">
      <h1>COVID</h1>
    </div>
    <button class="navbar-toggle"><span></span></button>
    <div class="navbar-content">
      <a href="#header" class="navbar-item active">Home</a>
      <a href="#persebaran" class="navbar-item">Persebaran</a>
      <a href="#gejala" class="navbar-item">Gejala</a>
      <a href="#pencegahan" class="navbar-item">Pencegahan</a>
    </div>`

  navbarResponsive()
}

const navbarResponsive = () => {
  const toggle = document.querySelector(".navbar-toggle"),
    navbar = document.querySelector(".navbar-content"),
    navbarItem = document.querySelectorAll('.navbar-item')

  navbarItem.forEach(navItem => {
    navItem.addEventListener('click', function () {
      const active = document.querySelector('.active')
      active.classList.remove('active')

      this.classList.add('active')
      toggle.classList.remove("close")
      navbar.classList.remove("show")
    })
  })

  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    if (toggle.classList.contains("close")) {
      toggle.classList.remove("close")
      navbar.classList.remove("show")
    } else {
      toggle.classList.add("close")
      navbar.classList.add("show")
    }
  });
}

const jumbotron = async () => {
  const jumbotron = await buatELement('div', 'header')
  jumbotron.classList.add('jumbotron')

  let particles = ''
  for (let i = 0; i < 30; i++) {
    particles += '<div class="particle"></div>'
  }

  import('../../assets/images/flu-girl.svg')
    .then((fluGirl) => {
      jumbotron.innerHTML = ` ${particles}
    <div class="main-pic">
      <img src="${fluGirl.default}" alt="Flu Girl" class="flip-x" />
    </div>
    <div class="jumbotron-text pt-3">
      <h1 class="nama">Corona Virus Disease</h1>
      <span class="display ml-1 mr-1">Heal The World, Jaga Dirimu dan Orang Tersayang</span>

      <h4 class="greet txt-primary txt-white mt-2">GLOBALS</h4>
      <div class="d-flex content-center items-center wrap">
        <div class="bg-warning text-white m-1 p-1 pl-2 pr-2 rounded">
          <h2 class="greet mb-1" id="globalConfirmed"></h2>
          <span>Konfirmasi</span>
        </div>
        <div class="bg-success text-white m-1 p-1 pl-2 pr-2 rounded">
          <h2 class="greet mb-1" id="globalCure"></h2>
          <span>Sembuh</span>
        </div>
        <div class="bg-danger text-white m-1 p-1 pl-2 pr-2 rounded">
          <h2 class="greet mb-1" id="globalDeath"></h2>
          <span>Meninggal</span>
        </div>
      </div>
      <div class="d-block mt-2">
        <a href="#" class="btn btn-info p-1 pl-5 pr-5" style="width: min-content;">Persebaran</a>
      </div>
    </div>`
    })
}