let toggle = document.querySelector('.navbar-toggle'),
  navbar = document.querySelector('.navbar-content'),
  navItem = document.querySelectorAll('.navbar-item')

toggle.addEventListener('click', function (e) {
  e.preventDefault()
  if (toggle.classList.contains('close')) {
    toggle.classList.remove('close')
    navbar.classList.remove('show')
  } else {
    toggle.classList.add('close')
    navbar.classList.add('show')
  }

})