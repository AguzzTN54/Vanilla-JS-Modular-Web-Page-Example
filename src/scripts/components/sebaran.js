import buatElement from '../functions'
import './sebaran-country'

const persebaran = (async () => {
  const sebaran = await buatElement('main', 'body')
  sebaran.classList.add('container')

  selectCountry()
})()

const selectCountry = async () => {
  const country = await buatElement('div', 'main')
  country.classList.add('select-country', 'mt-3')
  country.setAttribute('id', 'persebaran')
  country.innerHTML = `<h3 class="heading heading-2 txt-center strong">Pilih Negara</h3>
  <div class="selected shadow">
    GLOBAL
  </div>
  <span class="d-block txt-center" style="font-size: 0.9em; position: relative; z-index: -1;">Sumber : <a href="#" target="_blank">http://ikilh.me</a></span>
  
  <country-list class="hide"></country-list>`
}

// Event
const list = document.querySelector("country-list"),
  selected = document.querySelector(".selected")
selected.addEventListener("click", showHide);

const showHide = () => {
  list.classList.toggle("hide");
  list.classList.toggle("show");
};