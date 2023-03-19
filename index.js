const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const skills = document.querySelector('#skills')
const skillsNav = document.querySelector('#skillsNav')
const projects = document.querySelector('#projects')
const projectsNav = document.querySelector('#projectsNav')
const about = document.querySelector('#about')
const aboutNav = document.querySelector('#aboutNav')
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

//arrow functionality

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

// Nav bar functionality

skillsNav.addEventListener('click', () => {
  skills.scrollIntoView({
    behavior: 'smooth',
  })
})

projectsNav.addEventListener('click', () => {
  projects.scrollIntoView({
    behavior: 'smooth',
  })
})

aboutNav.addEventListener('click', () => {
  about.scrollIntoView({
    behavior: 'smooth',
  })
})

let prevScrollpos = window.pageYOffset
window.onscroll = function () {
  console.log('Working')
  let currentScrollPos = window.pageYOffset
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.nav-menu').style.top = '0'
  } else {
    document.querySelector('.nav-menu').style.top = '-50px'
    console.log(document.querySelector('.nav-menu'))
  }
  prevScrollpos = currentScrollPos
}
