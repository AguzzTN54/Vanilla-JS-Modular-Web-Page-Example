import '../data/country-list'
import '../components/header'
import '../components/kasus'
import dataCountry from '../data/country-list';

const main = function () {
  dataCountry.getList()
  // const root = document.getElementById("root")
  // import("../../assets/images/gejala/batuk.svg").then((batuk) => {
  //   root.innerHTML = `<h1 class="heading heading-1">hore</h1>
  //   <img src="${batuk.default}">`;
  // });
};

export default main