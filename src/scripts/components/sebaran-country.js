import {
  showHide
} from '../functions'
import "./sebaran-country-item";
import dataCountry from '../data/country-list'

class selectCountry extends HTMLElement {
  constructor() {
    super();
  }

  set countries(countries) {
    this._countries = countries;
    this.render();
  }

  render() {
    this.innerHTML = `<div>
      <div class="input">
        <input type="text" class="search-country" placeholder="Cari Negara" />
        </div>
        <country-item class="is-selected" country-id="global">GLOBAL</country-item>
        <country-item country-id="id"><i class="flag flag-id"></i> INDONESIA</country-item>
    </div>`

    const data = Object.entries(this._countries)
    data.forEach(country => {
      const listElement = document.createElement('country-item')
      listElement.country = country;
      this.querySelector('div').appendChild(listElement)
    });

    // Mengambil nilai dari input nama negara
    const search = document.querySelector(".search-country");

    search.addEventListener("keyup", function () {
      const filter = this.value.toUpperCase();
      for (let i = 0; i < select.length; i++) {
        let txtValue = select[i].textContent || select[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          select[i].style.display = "";
        } else {
          select[i].style.display = "none";
        }
      }
    });

    const select = document.querySelectorAll("country-item")

    for (let i = 0; i < select.length; i++) {
      select[i].addEventListener("click", function () {
        const isSelected = document.querySelector(".is-selected"),
          name = this.innerHTML,
          countryId = this.getAttribute('country-id');

        if (isSelected) {
          isSelected.classList.remove("is-selected");
        }
        document.querySelector(".selected").innerHTML = name;
        this.classList.add("is-selected");
        showHide();

        dataCountry.getCaseData(countryId)
      });
    }
  }
}

customElements.define("country-list", selectCountry);