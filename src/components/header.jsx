import React from 'react'
import livro from '../assets/livros1.jpg'
import * as S from './style'

function Header(){
return(
    <>
    <S.Nav>
 <S.Topo src={livro} alt="livro"/>LIVROS DA TIA MARY<S.Topo src={livro} alt="livro"/>
    </S.Nav>
    </>
)
}
export default Header