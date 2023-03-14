const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const skills = document.querySelector('#skills')
const skillsNav = document.querySelector('#skillsNav')
const home = document.querySelector('#home')
const arrowToSkills = document.querySelector('.arrowToSkills')
const arrowToHome = document.querySelector('.arrowToHome')

console.log(arrowToSkills)
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
})

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
  })
})

arrowToSkills.addEventListener('click', () => {
  skills.scrollIntoView({
    behavior: 'smooth',
  })
})

arrowToHome.addEventListener('click', () => {
  home.scrollIntoView({
    behavior: 'smooth',
  })
})

skillsNav.addEventListener('click', () => {
  skills.scrollIntoView({
    behavior: 'smooth',
  })
})
