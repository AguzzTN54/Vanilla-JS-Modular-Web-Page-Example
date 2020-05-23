import {
  buatELement
} from "../functions"
import './pencegahan-list'

const cegah = (async () => {
  const pencegahan = await buatELement('section', 'body')

  pencegahan.classList.add('container', 'mt-4')
  pencegahan.setAttribute('id', 'pencegahan')
  pencegahan.innerHTML = `<h2 class="heading heading-2 strong">Pencegahan</h2>
  <cegah-list class="txt-center"></cegah-list>`;
})()