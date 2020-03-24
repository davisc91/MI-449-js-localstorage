var dayThemeBtn = document.getElementById('day-theme-btn')
var nightThemeBtn = document.getElementById('night-theme-btn')
var pgCounter = document.getElementById('pg-counter').value

var themeColor = window.localStorage.getItem('themeColor')
if (!themeColor) {
  themeColor = window.localStorage.setItem('themeColor', 'daytheme')
  document.body.setAttribute('class', 'daytheme')
} else {
  themeColor = window.localStorage.getItem('themeColor')
  document.body.setAttribute('themeColor', themeColor)
}

dayThemeBtn.addEventListener('click', function () {
  window.localStorage.setItem('themeColor', 'daytheme')
  document.body.setAttribute('class', 'daytheme')
})

nightThemeBtn.addEventListener('click', function () {
  window.localStorage.setItem('themeColor', 'nighttheme')
  document.body.setAttribute('class', 'nighttheme')
})

var counterFunction = function () {
  var visitNumber = parseInt(window.localStorage.getItem('pgCounter')).value
  if (!visitNumber) {
    visitNumber = 1
    pgCounter = parseInt(window.localStorage.setItem('pgCounter', visitNumber))
  } else {
    pgCounter = (parseInt(visitNumber) + 1)
  }
}

pgCounter.textContent = counterFunction()
