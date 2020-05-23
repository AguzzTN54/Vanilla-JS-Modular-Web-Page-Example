class cegahItem extends HTMLElement {
  constructor() {
    super()
  }

  set cegahItem(cegahItem) {
    this._cegahItem = cegahItem
    this.render()
  }

  render() {
    const title = this._cegahItem.title,
      pic = this._cegahItem.pic
    import(`../../assets/images/pencegahan/${pic}`)

      .then(thumb => {
        this.innerHTML = `<figure>
      <img src="${thumb.default}" alt="${title}" />
    </figure>
    <figcaption class="d-block txt-primary">
      ${title}
    </figcaption>`
      })
  }
}

customElements.define('cegah-item', cegahItem)