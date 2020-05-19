class dataCountry {
  static getList() {
    fetch("https://covid19.mathdro.id/api/countries")
      .then((response) => response.json())
      .then((responseJSON) => {
        const targetElemen = document.querySelector('country-list')
        targetElemen.countries = responseJSON.countries;
      }).catch(err => {
        console.error('Terjadi Kesalahan Bebs ' + err)
      })
  }
}

export default dataCountry;