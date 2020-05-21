import './sebaran'
import './kasus-item'
class kasus extends HTMLElement {
  constructor() {
    super();
  }

  set cases(cases) {
    this._cases = cases
    this.render()
  }

  render() {
    this.innerHTML = ''
    const cases = Object.entries(this._cases),
      lokasiID = document.querySelector('.is-selected').getAttribute('country-id')

    if (lokasiID === 'global' || lokasiID === 'id') {
      cases.forEach(kasus => {
        const element = document.createElement('case-item')
        element.case = kasus
        this.appendChild(element)
      })

    } else {
      const element = document.createElement('case-item')
      element.case = this._cases
      this.appendChild(element)
    }
  }
}

customElements.define('case-list', kasus)