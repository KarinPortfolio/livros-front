import { useState, useEffect } from 'react'
import Axios from 'axios'

export function Content() {
  const [repositories, setRepositories] = useState([])
  const [nome, setNome] = useState('')
  const [minibio, setAutor] = useState('')
  const [imagem, setImagem] = useState('')
  const [citacao, setResumo] = useState('')
  const [success, setSuccess] = useState(false)
  const baseURL = 'https://livros-backend.onrender.com/livros'

  useEffect(() => {
    async function getData() {
      const response = await Axios.get(baseURL)
      setRepositories(response.data)
    }
    getData()
  }, [])

  function handleInputValueNome(event) {
    setNome(event.target.value)
  }

  function handleInputValueAutor(event) {
    setAutor(event.target.value)
  }

  function handleInputValueImagem(event) {
    setImagem(event.target.value)
  }

  function handleInputValueResumo(event) {
    setResumo(event.target.value)
  }

  function handleCreateMessage(event) {
    event.preventDefault()

    console.log('mensagem enviada', nome, autor, imagem, resumo)

    async function sendData() {
      await Axios.post(baseURL, {
        nome: nome,
        citacao: citacao,
        minibio: minibio,
        imagem: imagem
      })
      const response = await Axios.get(baseURL)
      setRepositories(response.data)
    }
    sendData()

    setSuccess(true)
    setNome('')
    setAutor('')
    setImagem('')
    setResumo('')
  }

  return (
    <>
      <Header
        title='Livros da tia Mary'
        subtitle='Cadastre um livro' />
     <div>
        <h2> Cadastre um livro:</h2>
        <form onSubmit={handleCreateMessage}>
          <input onChange={handleInputValueNome} placeholder="Digite o nome" value={nome} />
          <textarea onChange={handleInputValueAutor} placeholder="Digite o(a) autor(a)" value={autor} />
          <textarea onChange={handleInputValueImagem} placeholder="Digite o link da imagem" value={imagem} />
          <textarea onChange={handleInputValueResumo} placeholder="Digite um resumo" value={resummo} />
          <button className={styles.formButton} type="submit">Enviar cadastro</button>
          {success && <p>Cadastro realizado com sucesso.</p>}
        </form>
      </div>
      <Footer />
    </>
  )
}
   
 
export default Principal