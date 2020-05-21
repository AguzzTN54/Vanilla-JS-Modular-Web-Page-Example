import {
  buatELement
} from '../functions'
import "./gejala-list";

const gejala = (async () => {
  const gejala = await buatELement('section', 'body')
  gejala.classList.add('bg-white', 'mt-3')
  gejala.setAttribute('id', 'gejala')
  gejala.innerHTML = `<div class="container pt-1 pb-2">
      <h2 class="heading heading-2">GEJALA</h2>
      <div class="d-flex gejala">
        <gejala-list class="txt-center"></gejala-list>
        
        <aside style="flex-basis: 30%;">
          <div class="rounded bg-primary mb-2 p-1 txt-white txt-center d-flex items-center" style="height: 100%;">
            <div>
              <h3 class="heading strong">Merasa Kurang Sehat ?</h3>
              <p class="heading mt-2 mb-2 ml-1 mr-1">
                Segera Hubungi Tim Kesehatan Terdekat
              </p>
              <a class="btn btn-tertiary d-block"> Hubungi 119</a>
            </div>
          </div>
        </aside>`
})()