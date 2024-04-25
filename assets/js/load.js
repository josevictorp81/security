export function usuarioLogado() {
  let logado = localStorage.getItem('logado')

  if (logado) {
    redirecionar(JSON.parse(logado))
  }
}

function redirecionar(usuario) {
  if (usuario.perfil === 'aluno') {
    document.location.href = './denuncias.html'
  }
  if (usuario.perfil === 'gestor') {
    document.location.href = './gestor.html'
  }
  if (usuario.perfil === 'autoridade') {
    document.location.href = './escolas.html'
  }
}
