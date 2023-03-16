const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const skills = document.querySelector('#skills')
const skillsNav = document.querySelector('#skillsNav')
const projects = document.querySelector('#projects')
const about = document.querySelector('#about')
const home = document.querySelector('#home')
const arrowToSkills = document.querySelector('.arrowToSkills')
const arrowToProjects = document.querySelector('.arrowToProjects')
const arrowToHome = document.querySelector('.arrowToHome')
const arrowToAbout = document.querySelector('.arrowToAbout')

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

arrowToProjects.addEventListener('click', () => {
  projects.scrollIntoView({
    behavior: 'smooth',
  })
})

arrowToAbout.addEventListener('click', () => {
  about.scrollIntoView({
    behavior: 'smooth',
  })
})

skillsNav.addEventListener('click', () => {
  skills.scrollIntoView({
    behavior: 'smooth',
  })
})
