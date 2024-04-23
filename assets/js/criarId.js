export default function criaId() {
  const id = parseInt(localStorage.getItem('id')) + 1

  localStorage.removeItem('id')

  localStorage.setItem('id', id)

  return id
}
