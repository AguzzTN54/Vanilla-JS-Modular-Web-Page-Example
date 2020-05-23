const buatELement = (namaEl, target) => {
  return new Promise((resolve) => {
    const elemen = document.createElement(namaEl),
      trgt = document.querySelector(target)
    trgt.appendChild(elemen)
    resolve(elemen)
  })
}

const showHide = () => {
  const list = document.querySelector("country-list")
  list.classList.toggle("hide");
  list.classList.toggle("show");
};

const formatNum = (number) => {
  return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

const onScrollEvent = () => {
  const nav = document.querySelector("nav"),
    toTop = document.querySelector(".munggah");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      nav.classList.add("fixed");
      toTop.style.display = "block";
    } else {
      toTop.style.display = "none";
      nav.classList.remove("fixed");
    }
  });
}

export {
  buatELement,
  showHide,
  formatNum,
  onScrollEvent
}