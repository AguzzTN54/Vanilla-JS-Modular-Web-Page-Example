const toggle = document.querySelector(".navbar-toggle"),
  navbar = document.querySelector(".navbar-content"),
  navItem = document.querySelectorAll(".navbar-item");

toggle.addEventListener("click", function (e) {
  e.preventDefault();
  if (toggle.classList.contains("close")) {
    toggle.classList.remove("close");
    navbar.classList.remove("show");
  } else {
    toggle.classList.add("close");
    navbar.classList.add("show");
  }
});

const select = document.querySelectorAll("country-item"),
  list = document.querySelector("country-list"),
  selected = document.querySelector(".selected"),
  search = document.querySelector(".search-country");

const showHide = () => {
  list.classList.toggle("hide");
  list.classList.toggle("show");
};

selected.addEventListener("click", showHide);

for (let i = 0; i < select.length; i++) {
  select[i].addEventListener("click", function () {
    const isSelected = document.querySelector(".is-selected"),
      name = this.innerHTML;

    if (isSelected) {
      isSelected.classList.remove("is-selected");
    }

    selected.innerHTML = name;
    this.classList.add("is-selected");
    showHide();
  });
}

search.addEventListener("keyup", function () {
  const filter = this.value.toUpperCase();
  for (let i = 0; i < select.length; i++) {
    txtValue = select[i].textContent || select[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      select[i].style.display = "";
    } else {
      select[i].style.display = "none";
    }
  }
});

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
