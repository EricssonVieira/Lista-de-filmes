function modal() {
  var element = document.getElementById('modal-overlay')
  element.classList.toggle('active')
}

const form = document.getElementById('form')


function addFilme() {
  const title = document.querySelector('#title')
  const resume = document.querySelector('#resume')
  const nota = document.querySelector('#nota')
  const data = document.querySelector('#data')
  const file = document.querySelector('#file')

  localStorage.setItem('resume', resume.value)
  localStorage.setItem('nota', nota.value)
  localStorage.setItem('data', data.value)
  localStorage.setItem('file', file.value)
  localStorage.setItem('title', title.value)

  if (file.value === '') {
    localStorage.setItem('file',src='./img/semiimg.png')
  }

  title.value = ''
  resume.value = ''
  nota.value = ''
  data.value = ''
  file.value = ''

  modal();
}
localStorage.clear()

const img = document.createElement('img')
img.src = "./img/semimg.png"



const verMais = document.createElement('a')
const texto = document.createTextNode("Ver mais")
verMais.appendChild(texto)

const container = document.querySelector(".container")
container.appendChild(img)
// container.appendChild(verMais)
container.classList.add("mini-banner")

// =========================================================================

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});