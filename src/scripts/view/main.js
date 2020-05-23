import '../data/country-list'
import '../components/header'
import '../components/kasus'
import '../components/gejala'
import '../components/pencegahan'
import '../components/footer'
import dataCountry from '../data/country-list';
import cegahGejala from "../data/get-gejala-pencegahan";

const main = function () {
  // Cetak List Negara terdampak pada selectbox
  dataCountry.getList()

  // Cetak Data negara terdampak
  dataCountry.getCaseData()

  // Cetak Informasi Gejala
  cegahGejala.gejalaList()

  // Cetak Informasi Pencegahan
  cegahGejala.pencegahanList()
};

export default main