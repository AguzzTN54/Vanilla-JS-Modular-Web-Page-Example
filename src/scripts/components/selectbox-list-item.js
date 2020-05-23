class countryItems extends HTMLElement {
  constructor() {
    super()
  }

  set country(country) {
    this._country = country
    this.render()
  }
  render() {
    const data = this._country[1]
    if (data.iso2) {
      const countryName = data.name,
        iso = data.iso2.toLowerCase()

      this.setAttribute('country-id', iso)
      this.innerHTML = `<i class="flag flag-${iso}"></i> ${countryName}`
    }
  }
}

customElements.define('country-item', countryItems)