import { useState, useEffect } from 'react'
import Axios from 'axios'
import livro2 from '../assets/livros2.jpg'
import * as S from './style'
export function Content() {
  const [repositories, setRepositories] = useState([])
  const [nome, setNome] = useState('')
  const [autor, setautor] = useState('')
  const [imagem, setImagem] = useState('')
  const [resumo, setResumo] = useState('')
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
    setautor(event.target.value)
  }

  function handleInputValueImagem(event) {
    setImagem(event.target.value)
  }

  function handleInputValueResumo(event) {
    setResumo(event.target.value)
  }

  function handleCreateMessage(event) {
    event.preventDefault()

    console.log('mensagem enviada', nome, citacao, minibio, imagem)

    async function sendData() {
      await Axios.post(baseURL, {
        nome: nome,
        autor: autor,
        imagem: imagem,
        resumo: resumo
              })
      const response = await Axios.get(baseURL)
      setRepositories(response.data)
    }
    sendData()

    setSuccess(true)
    setNome('')
    setautor('')
    setImagem('')
    setResumo('')
  }
}

function Principal() {
  
  return (
    <>    
    <S.Central>
    <S.Livro src={livro2} /><p>Site em construção</p>
</S.Central>
   
    </>
  )
}
export default Principal