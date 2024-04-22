var modal = document.getElementById('meuModal')
var btn = document.getElementById('botaoAlertaVermelho')
var span = document.getElementById('fechar')

// observa o click alerta vermelho
btn.onclick = function () {
  modal.style.display = 'block'
}

// // observa o click no não
span.onclick = function () {
  modal.style.display = 'none'
}
