function modal() {
  var element = document.getElementById('modal-overlay')
  element.classList.toggle('active')
}

const form = document.getElementById('form')

form.addEventListener('submit', e => {
  e.preventDefault()
})
localStorage.clear()

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
    console.log('sem arquivo')
  }

  title.value = ''
  resume.value = ''
  nota.value = ''
  data.value = ''
  file.value = ''
}
