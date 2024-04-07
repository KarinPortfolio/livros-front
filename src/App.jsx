import { useState } from 'react'
import Header from './components/header'
import Principal from './components/miolo'
import Footer  from './components/footer'

import {createGlobalStyle} from "styled-components"
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <>    
    <GlobalStyle />
    <Header />
    <Principal />   
    <Footer /> 
    </>
  )
}

export default App
