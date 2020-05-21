const buatELement = (namaEl, target) => {
  return new Promise((resolve) => {
    const elemen = document.createElement(namaEl),
      trgt = document.querySelector(target)
    trgt.appendChild(elemen)
    resolve(document.querySelector(target).querySelector(namaEl))
  })
}

const showHide = () => {
  const list = document.querySelector("country-list")
  list.classList.toggle("hide");
  list.classList.toggle("show");
};

export {
  buatELement,
  showHide
}