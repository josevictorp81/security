window.addEventListener('load', (event) => {
  const id = localStorage.getItem('id')
  var escola = localStorage.getItem('escolas')
  let logado = localStorage.getItem('logado')
  let usuarios = localStorage.getItem('usuarios')
  let contatos = localStorage.getItem('contatos')

  if (logado) {
    redirecionar(JSON.parse(logado))
  }

  if (!id) {
    localStorage.setItem('id', 0)
  }

  if (!escola) {
    escola = {
      id: criaId(),
      nome: 'CETI RAIMUNDO ANDRADE',
      endereco: 'Exemplo, exemplo 129123',
      contato_1: '12312321312',
      contato_2: '123123',
      status: 'Seguro',
    }

    localStorage.setItem('escolas', JSON.stringify([escola]))
  }

  if (!usuarios) {
    criaUsuario(escola.id)
  }
  if (!contatos) {
    criaContatos()
  }
})

/**
 * Realiza o login do usuário
 * @param {Object} usuario { email: '', senha: '' }
 */

let botaoLogin = document.getElementById('botaoLogin')

botaoLogin.addEventListener('click', () => {
  login()
})

function login() {
  let usuarios = localStorage.getItem('usuarios')

  let email = document.getElementById('email')
  let senha = document.getElementById('senha')

  if (!usuarios) {
    alert('Algo deu errado!')
    return
  }

  usuarios = JSON.parse(usuarios)

  const encontrado = usuarios.find(
    (u) => u.email === email.value && u.senha === senha.value
  )

  if (encontrado) {
    localStorage.setItem('logado', JSON.stringify(encontrado))
    redirecionar(encontrado)
  }
}

function criaUsuario(escola_id) {
  let usuarios = localStorage.getItem('usuarios')

  let usuariosLista = [
    {
      id: criaId(),
      email: 'aluno1@email.com',
      senha: 'aluno1senha',
      perfil: 'aluno',
      nome: 'aluno1',
      escola_id,
    },
    {
      id: criaId(),
      email: 'gestor@email.com',
      senha: 'gestorsenha',
      perfil: 'gestor',
      nome: 'gestor',
      escola_id,
    },
    {
      id: criaId(),
      email: 'autoridade@email.com',
      senha: 'autoridadesenha',
      perfil: 'autoridade',
      nome: 'autoridade',
      escola_id,
    },
  ]

  if (!JSON.parse(usuarios)) {
    localStorage.setItem('usuarios', JSON.stringify(usuariosLista))
    return
  }

  usuarios = JSON.parse(usuarios)
  usuarios.push(usuarios)
  localStorage.removeItem('usuarios')
  localStorage.setItem('usuarios', JSON.stringify(usuarios))
}

/**
 *
 * Função que cria os contatos
 */

function criaContatos() {
  const contatosLocal = localStorage.getItem('contatos')

  if (contatosLocal) {
    return
  }

  const contatos = [
    {
      id: criaId(),
      nome: 'Policia Militar',
      numero: 190,
    },
    {
      id: criaId(),
      nome: 'Bombeiros',
      numero: 193,
    },
  ]

  localStorage.setItem('contatos', JSON.stringify(contatos))
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

function criaId() {
  const id = parseInt(localStorage.getItem('id')) + 1

  localStorage.removeItem('id')

  localStorage.setItem('id', id)

  return id
}

/**
 * @returns [Array] Retorna os contatos cadastrados
 * { nome: 'Exemplo', numero: 1290 }
 */

// function retornaContatos() {
//   const contatos = localStorage.getItem('contatos')

//   return contatos ? JSON.parse(contatos) : []
// }

/**
 *
 * @returns [Array] Retorna as denúncias cadastradas
 * { local: 'Igreja', data: '12/10/2024', hora: '08:00', descricao: 'Isso é um exemplo', tipo_de_denuncia: 'vandalismo', anonimo: false, nome_aluno: '', status: 'aberto', escola_id: 1 }
 */
// function retornaDenuncias() {
//   const denuncias = localStorage.getItem('denuncias')

//   return denuncias ? JSON.parse(denuncias) : []
// }

/**
 * Finaliza uma denúncia, modificando o status para encerrada.
 * @param {Number} id
 */

// function finalizarDenuncia(id) {
//   let denuncias = retornaDenuncias()

//   denuncias = denuncias.map((denuncia) => {
//     if (denuncia.id === id) {
//       denuncia.status = 'encerrada'
//       return denuncia
//     }

//     return denuncia
//   })

//   localStorage.removeItem('denuncias')

//   localStorage.setItem('denuncias', JSON.stringify(denuncias))
// }

/**
 * @returns [Array] Retorna as escolas cadastradas
 * { nome: 'Exemplo', numero: 1290 }
 */

// function retornaEscolas() {
//   const escolas = localStorage.getItem('escolas')

//   return escolas ? JSON.parse(escolas) : []
// }

/**
 * Adiciona estado de alerta para escola
 * @param {Number} id
 */

// function adicionaEstadoDeAlerta(gestorId) {
//   let escolas = retornaEscolas()

//   escolas = escolas.map((escola) => {
//     if (escola.id === gestorId) {
//       escola.status = 'Alerta vermelho'
//       return escola
//     }

//     return escola
//   })

//   localStorage.removeItem('escolas')

//   localStorage.setItem('escolas', JSON.stringify(escolas))
// }
