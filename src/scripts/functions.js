const buatELement = (namaEl, target) => {
  return new Promise((resolve) => {
    const elemen = document.createElement(namaEl),
      trgt = document.querySelector(target)
    trgt.appendChild(elemen)
    resolve(document.querySelector(target).querySelector(namaEl))
  })
}

export default buatELement