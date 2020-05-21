class gejalaItem extends HTMLElement {
  constructor() {
    super()
  }

  set gejala(gejala) {
    this._gejala = gejala
    this.render()
  }

  render() {
    import(`../../assets/images/gejala/${this._gejala.toLowerCase().split(' ').join('-')}.svg`)

      .then(pic => {
        this.innerHTML = `
      <figure>
        <img src="${pic.default}" alt="${this._gejala}" />
      </figure>
      <figcaption class="d-block txt-primary strong">${this._gejala}</figcaption>`
      })
  }
}

customElements.define('gejala-item', gejalaItem)