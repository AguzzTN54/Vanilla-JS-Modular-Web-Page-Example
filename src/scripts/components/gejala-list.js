import "./gejala-list-item"

class gejalaList extends HTMLElement {
  constructor() {
    super()
  }

  set gejala(gejala) {
    this._gejala = gejala
    this.render()
  }

  render() {
    this.innerHTML = ''
    this._gejala.forEach(gejalaItem => {
      const item = document.createElement('gejala-item')
      item.classList.add('p-1')
      item.gejala = gejalaItem
      this.appendChild(item)
    })

  }
}

customElements.define('gejala-list', gejalaList)