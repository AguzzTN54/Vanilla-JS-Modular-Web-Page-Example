class caseItem extends HTMLElement {
  constructor() {
    super()
  }

  set case(kasus) {
    this._case = kasus
    this.render()
  }

  render() {
    const lokasi = document.querySelector('.is-selected'),
      lokasiID = lokasi.getAttribute('country-id')
    let negara,
      konfirmasi,
      sembuh,
      meninggal,
      moreInfo = ''

    if (lokasiID === 'global') {
      negara = this._case[1].World.toUpperCase()
      konfirmasi = this._case[1].Positive
      sembuh = this._case[1].Cure
      meninggal = this._case[1].Death

    } else if (lokasiID === 'id') {
      const official = this._case[1].link
      negara = this._case[1].Province
      konfirmasi = this._case[1].Positive
      sembuh = this._case[1].Cure
      meninggal = this._case[1].Death
      moreInfo = `<span class="d-block txt-right pt-1 bg-white">
        More: <a href="http://${official}">${official.substring(0,20)}</a>
      </span>`
      import(`../../assets/images/provinsi/${negara.toLowerCase().split(' ').join('-')}.svg`)
        .then(provinsi => {
          this.innerHTML += `<img src="${provinsi.default}" alt="${negara}" />`
        })

    } else {
      negara = lokasi.innerHTML
      konfirmasi = this._case.confirmed.value
      sembuh = this._case.recovered.value
      meninggal = this._case.deaths.value
    }

    this.classList.add('shadow', 'rounded')
    this.innerHTML += `
    <h3 class="heading heading-1 strong">${negara}</h3>
    <div class="cases txt-center txt-white mt-1">
      <div class="confirm bg-warning rounded p-1">
        <h2 class="mb-1">${konfirmasi}</h2>
        <span>Konfirmasi</span>
      </div>
      <div class="death bg-danger rounded p-1">
        <h2 class="mb-1">${meninggal}</h2>
        <span>Meninggal</span>
      </div>
      <div class="recover bg-success rounded p-1">
        <h2 class="mb-1">${sembuh}</h2>
        <span>Sembuh</span>
      </div>
    </div>
    ${moreInfo}`
  }
}

customElements.define('case-item', caseItem)