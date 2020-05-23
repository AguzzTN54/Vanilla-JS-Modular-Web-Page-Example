import './pencegahan-list-item'
class cegahList extends HTMLElement {
  constructor() {
    super()
  }

  set cegah(cegah) {
    this._cegah = cegah
    this.render()
  }

  render() {
    this._cegah.forEach(cegahItem => {
      const item = document.createElement('cegah-item')
      item.cegahItem = cegahItem
      this.appendChild(item)
    });
  }
}

customElements.define('cegah-list', cegahList)