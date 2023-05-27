const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time() {
  let dateToday = new Date()
  let hr = dateToday.getHours()
  let mt = dateToday.getMinutes()
  let sg = dateToday.getSeconds()

  if (hr < 10) {
    hr = '0' + hr
  }

  if (mt < 10) {
    mt = '0' + mt
  }

  if (sg < 10) {
    sg = '0' + sg
  }

  horas.textContent = hr
  minutos.textContent = mt
  segundos.textContent = sg
})