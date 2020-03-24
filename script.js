var themeBtn = document.getElementById('theme-btn')
var pgCounter = document.getElementById('pg-counter')

var themeColor = window.localStorage.getItem('themeColor')
if (!themeColor) {
  themeColor = window.localStorage.setItem('themeColor', 'daytheme')
  document.body.setAttribute('class', 'daytheme')
} else {
  themeColor = window.localStorage.getItem('themeColor')
  document.body.setAttribute('class', themeColor)
}

themeBtn.addEventListener('click', function () {
  var themeColor = window.localStorage.getItem('themeColor')
  if (themeColor === 'daytheme') {
    window.localStorage.setItem('themeColor', 'nighttheme')
    document.body.setAttribute('class', 'nighttheme')
  } else {
    window.localStorage.setItem('themeColor', 'daytheme')
    document.body.setAttribute('class', 'daytheme')
  }
})

var counterFunction = function () {
  var visitNumber = parseInt(window.localStorage.getItem('pgCounter'))
  if (isNaN(visitNumber)) {
    visitNumber = 1
    pgCounter = parseInt(window.localStorage.setItem('pgCounter', visitNumber))
    return visitNumber
  } else {
    visitNumber = visitNumber + 1
    pgCounter = parseInt(window.localStorage.setItem('pgCounter', visitNumber))
    return visitNumber
  }
}

pgCounter.textContent = counterFunction()
