import {
  buatELement,
  onScrollEvent
} from "../functions";

const footer = (async () => {
  const footer = await buatELement('footer', 'body')

  footer.classList.add('txt-center', 'bg-primary', 'txt-white', 'p-3', 'mt-5')
  footer.innerHTML = `<a href="#header" class="munggah">^</a>
  <span class="d-block">Referensi :
    <a href="http://covid19.go.id" class="txt-white" target="_blank"
      rel="noopener noreferrer"><b>covid19.go.id</b></a></span>
  <span>Created by <b>AguzzTN54</b></span>`

  onScrollEvent()
})()