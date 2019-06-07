const hamburgerButton = document.querySelector('#hamburger')
const hamburger = document.querySelector('.hamburger')
const linkList = document.querySelector('.header__link-list')

hamburgerButton.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger--open') 
  linkList.classList.toggle('header__link-list--open') 
})
