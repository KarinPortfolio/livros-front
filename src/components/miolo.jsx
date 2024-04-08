import { useState, useEffect } from 'react'
import Axios from 'axios'
import livro2 from '../assets/livros2.jpg'
import * as S from './style'
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