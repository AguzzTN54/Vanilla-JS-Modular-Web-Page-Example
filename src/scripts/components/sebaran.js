import {
  buatELement,
  showHide
} from '../functions'
import './sebaran-country'

const persebaran = (async () => {
  const sebaran = await buatELement('main', 'body')
  sebaran.classList.add('container')

  selectCountry()
})()

const selectCountry = async () => {
  const country = await buatELement('div', 'main')
  country.classList.add('select-country', 'mt-3')
  country.setAttribute('id', 'persebaran')

  country.innerHTML = `<h3 class="heading heading-2 txt-center strong">Pilih Negara</h3>
  <div class="selected shadow">
    GLOBAL
  </div>
  <span class="d-block txt-center" style="font-size: 0.9em; position: relative; z-index: -1;">Sumber : <a href="#" id="sumber" target="_blank"></a></span>
  
  <country-list class="hide"></country-list>`

  document.querySelector(".selected").addEventListener("click", showHide);

  const cases = await buatELement('case-list', 'main')
  cases.classList.add('d-flex')
}