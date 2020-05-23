import {
  formatNum
} from "../functions";

class dataCountry {
  static getList() {
    this.api = 'https://api.allorigins.win/raw?url='

    fetch(this.api + "https://covid19.mathdro.id/api/countries")
      .then((response) => response.json())
      .then((responseJSON) => {
        const targetElemen = document.querySelector('country-list')
        targetElemen.countries = responseJSON.countries;
        this.getGlobalCase()

      }).catch(err => {
        console.error('Terjadi Kesalahan Bebs ' + err)
      })
  }

  static getGlobalCase() {
    fetch(this.api + 'https://covid19.mathdro.id/api/')
      .then(response => response.json())
      .then(responseJSON => {
        const confirmed = document.querySelector('#globalConfirmed'),
          cure = document.querySelector('#globalCure'),
          death = document.querySelector('#globalDeath')

        confirmed.innerHTML = formatNum(responseJSON.confirmed.value)
        cure.innerHTML = formatNum(responseJSON.recovered.value)
        death.innerHTML = formatNum(responseJSON.deaths.value)
      })
  }

  static getCaseData(country = 'global') {
    let negara = '',
      source = ''
    if (country === 'global') {
      negara = 'https://seecorona.com/csv/world.json',
        source = 'https://seecorona.com/'
    } else if (country === 'id') {
      negara = 'https://seecorona.com/csv/province.json',
        source = 'https://seecorona.com/'
    } else {
      negara = 'https://covid19.mathdro.id/api/countries/' + country,
        source = 'https://covid19.mathdro.id/'
    }

    fetch(this.api + negara)
      .then(response => response.json())
      .then(responseJSON => {
        const sumber = document.querySelector('#sumber'),
          targetElemen = document.querySelector('case-list')

        let responData = ''
        if (source === 'https://seecorona.com/') {
          responData = responseJSON.data
        } else {
          responData = responseJSON
        }
        targetElemen.cases = responData

        sumber.setAttribute('href', source)
        sumber.innerText = source
      })
  }
}

export default dataCountry;