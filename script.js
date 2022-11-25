const description = document.querySelector('#description')
const title_movies = document.querySelector('#title_movies')
const vote_average = document.querySelector('#vote_average')
const date = document.querySelector('#date')
const banner = document.querySelector('.banner')
const carrosel = document.querySelector('.carrosel')
const carrosel_ID = document.getElementById('carrosel')

const getMovies = async movie => {
  const apiMoviesURL = `https://api.themoviedb.org/3/discover/movie?api_key=cb7052f34586626bf335bdee04865a56`

  const res = await fetch(apiMoviesURL)
  const data = await res.json()
  return data
}

// ====================================================================================

  
// essa serve pra achar o id do filme  
const li = document.getElementById("carrosel_ID");

  li.addEventListener("click", function(event)  {
    const target = event.target
    const index = target.className

    showMovies(index)
  })
  
  showMovies = async (index) => {
    const data = await getMovies(index)
    const topRated = data.results
    const path = topRated.map(movies => movies.poster_path)[index]
    const url = `https://image.tmdb.org/t/p/w500${path}`
    const title = topRated.map(movies => movies.title)[index]
    
    
    title_movies.innerText = title
    description.innerText = topRated.map(movies => movies.overview)[index]
    vote_average.innerText =
    topRated.map(movies => movies.vote_average)[index] * 10 +
    '% de aprovação'
    date.innerText = topRated.map(movies => movies.release_date)[index]
    banner.style.backgroundImage = `url(${url})`
    
    
    window.scrollTo({
      top:0,
      behavior: "smooth"

    });
      }
      
// =========================================================================

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

// essa funçao serve pra mostrar todos os mini banner vindo da api
const catalogo = async () => {
  const apiMoviesURL = `https://api.themoviedb.org/3/discover/movie?api_key=cb7052f34586626bf335bdee04865a56`

  const res = await fetch(apiMoviesURL)
  const data = await res.json()
  const topRated = data.results
  const cont = topRated.length

  for (i = 0; i < cont; i++) {
    const path = topRated.map(movies => movies.poster_path)[i]
    const url = `https://image.tmdb.org/t/p/w500${path}`
    const id = i
    

    const div = document.createElement('div')
    const img = document.createElement('img')
    const link = document.createElement('a')

    img.setAttribute('src', url)

    link.textContent = "Ver mais"
    
    div.appendChild(img)
    div.appendChild(link)

    div.classList.add('mini-banner')
    img.classList.add(i)
    
    carrosel.appendChild(div)
  }
}
catalogo()

// =========================================================================


//
