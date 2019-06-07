const toggleButton = document.querySelector('#dark-mode-toggle')
const moonIcon = document.querySelector('#moon-icon')
const sunIcon = document.querySelector('#sun-icon')

let darkMode = JSON.parse(localStorage.getItem('theme'))

if (darkMode) {
  moonIcon.classList.toggle('hidden')
  sunIcon.classList.toggle('hidden') 
}

toggleButton.addEventListener('click', () => {
  darkMode = !darkMode
  if (darkMode) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
  moonIcon.classList.toggle('hidden')
  sunIcon.classList.toggle('hidden')

  localStorage.setItem('theme', darkMode)
})
