import '../data/country-list'
import '../components/header'
import '../components/kasus'
import '../components/gejala'
import dataCountry from '../data/country-list';
import cegahGejala from "../data/get-gejala-pencegahan";

const main = function () {
  // Cetak List Negara terdampak
  dataCountry.getList()

  // Cetak Informasi Gejala
  cegahGejala.gejalaList()

  // const root = document.getElementById("root")
  // import("../../assets/images/gejala/batuk.svg").then((batuk) => {
  //   root.innerHTML = `<h1 class="heading heading-1">hore</h1>
  //   <img src="${batuk.default}">`;
  // });
};

export default main