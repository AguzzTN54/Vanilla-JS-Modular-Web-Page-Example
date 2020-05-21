import {
  gejala,
  pencegahan
} from './gejala-pencegahan'

class cegahGejala {
  static gejalaList() {
    return new Promise(resolve => {
      const element = document.querySelector('gejala-list')
      element.gejala = gejala
      resolve(element)
    }).catch(err => {
      console.error('Eror Bebs ' + err)
    })
  }
}

export default cegahGejala