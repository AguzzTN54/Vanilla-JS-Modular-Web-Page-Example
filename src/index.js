import "./assets/stylesheet/style.css";
const main = () => {
  const root = document.getElementById("root");
  import("./assets/images/gejala/batuk.svg").then((batuk) => {
    root.innerHTML = `<h1 class="heading heading-1">hore</h1>
    <img src="${batuk.default}">`;
  });
};

document.addEventListener("DOMContentLoaded", main);
