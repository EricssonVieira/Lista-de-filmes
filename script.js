const description = document.querySelector('#description')
const title_movies = document.querySelector('#title_movies')
const vote_average = document.querySelector('#vote_average')
const date = document.querySelector('#date')
const banner = document.querySelector('.banner')
const swiper_wrapper = document.querySelector('.swiper-wrapper')

const getMovies = async movie => {
  const apiMoviesURL = `https://api.themoviedb.org/3/discover/movie?api_key=cb7052f34586626bf335bdee04865a56`

  const res = await fetch(apiMoviesURL)
  const data = await res.json()
  return data
}

// ====================================================================================

const showMovies = async movie => {
  const data = await getMovies(movie)
  const indexMovie = movie
  const topRated = data.results
  const path = topRated.map(movies => movies.poster_path)[indexMovie]
  var url = `https://image.tmdb.org/t/p/w500${path}`
  const title = topRated.map(movies => movies.title)[indexMovie]

  title_movies.innerText = title
  description.innerText = topRated.map(movies => movies.overview)[indexMovie]
  vote_average.innerText =
    topRated.map(movies => movies.vote_average)[indexMovie] * 10 +
    '% de aprovação'
  date.innerText = topRated.map(movies => movies.release_date)[indexMovie]
  banner.style.backgroundImage = `url(${url})`
}
showMovies(2)

// ====================================================================================

function modal() {
  var element = document.getElementById('modal-overlay')
  element.classList.toggle('active')
}
// ======================================================================

function contar() {
  const count = localStorage
  return count.length
}

// ======================================================================

function addFilme() {
  contar()
  const title = JSON.parse(localStorage.getItem('filmes')) || []
  const resume = document.querySelector('#resume')
  const nota = document.querySelector('#nota')
  const data = document.querySelector('#data')
  const file = document.querySelector('#file')

  localStorage.setItem(
    'filmes',
    JSON.stringify({
      resume: resume.value,
      nota: nota.value,
      data: data.value,
      file: file.value,
      title: title.value,
      id: contar()
    })
  )

  window.location.reload(true)
  updateUI()
  modal()
}

// =================================================================================

function updateUI() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length
  while (i--) {
    values.push(localStorage.getItem(keys[i]))
  }
}

// =================================================================================

// ---------------------------------- AINDA PRECISO ARRUMAR ISSO --------------------------------

// const showMoviess = async () => {
//   const apiMoviesURL = `https://api.themoviedb.org/3/discover/movie?api_key=cb7052f34586626bf335bdee04865a56`

//   const res = await fetch(apiMoviesURL)
//   const data = await res.json()
//   const topRated = data.results
//   const cont = topRated.length

//   for (i = 0; i < cont; i++) {
//     const path = topRated.map(movies => movies.poster_path)[i]
//     const url = `https://image.tmdb.org/t/p/w500${path}`

//     const divExt = document.createElement('div')
//     const divInt = document.createElement('div')
//     const img = document.createElement('img')
//     const link = document.createElement('a')

//     img.setAttribute('src', url)

//     link.textContent = "Ver mais"
    
//     divInt.appendChild(img)
//     divInt.appendChild(link)
//     divInt.classList.add('mini-banner')
    
    // divExt.classList.add('swiper-slide', 'slides')
    // divExt.appendChild(divInt)

//     swiper_wrapper.appendChild(divExt)
//   }
// }
// showMoviess()

// =========================================================================

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})
// =========================================================================

//
