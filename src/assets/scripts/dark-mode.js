const toggleButton = document.querySelector('#dark-mode-toggle')
let darkMode = JSON.parse(localStorage.getItem('theme'))

toggleButton.addEventListener('click', () => {
  darkMode = !darkMode
  if (darkMode) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }

  localStorage.setItem('theme', darkMode)
})
