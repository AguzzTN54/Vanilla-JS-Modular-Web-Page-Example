import "./sebaran-country-item";

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
    </div>`

    const data = Object.entries(this._countries)
    data.forEach(country => {
      const listElement = document.createElement('country-item')
      listElement.country = country;
      this.querySelector('div').appendChild(listElement)
    });
    const select = document.querySelectorAll("country-item"),
      search = document.querySelector(".search-country");

    for (let i = 0; i < select.length; i++) {
      select[i].addEventListener("click", function () {
        const isSelected = document.querySelector(".is-selected"),
          name = this.innerHTML;

        if (isSelected) {
          isSelected.classList.remove("is-selected");
        }

        selected.innerHTML = name;
        this.classList.add("is-selected");
        showHide();
      });
    }

    search.addEventListener("keyup", function () {
      const filter = this.value.toUpperCase();
      for (let i = 0; i < select.length; i++) {
        txtValue = select[i].textContent || select[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          select[i].style.display = "";
        } else {
          select[i].style.display = "none";
        }
      }
    });
  }
}

customElements.define("country-list", selectCountry);