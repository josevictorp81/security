function lerEscolas() {
  let escolas = JSON.parse(localStorage.getItem('escolas'))

  escolas.forEach((e) => {
    let escolasDiv = document.getElementById('escolas')

    let escolaDiv = document.createElement('div')
    let classes = ['escola', 'seguro']
    escolaDiv.classList.add(...classes)
    escolaDiv.onclick = function () {
      localStorage.setItem('escolaId', JSON.stringify(e.id))
      window.location.href = 'escola_detalhe.html'
    }

    let spanescola = document.createElement('span')
    let spanstatus = document.createElement('span')

    spanescola.innerText = e.nome
    spanescola.classList.add('texto')

    spanstatus.innerText = e.status
    spanstatus.classList.add('texto')
    spanstatus.classList.add('status__seguro')

    escolaDiv.appendChild(spanescola)
    escolaDiv.appendChild(spanstatus)

    escolasDiv.appendChild(escolaDiv)
  })
}

window.addEventListener('load', () => {
  lerEscolas()
})
