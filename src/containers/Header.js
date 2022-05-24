import React, { useContext } from 'react'
import styled from 'styled-components'
import devlogo from "../images/dev-badge.svg"
import Row from '../SimpleComponents/Row'
import cardstyle from '../SimpleComponents/cardstyle'
import { ThemeContext } from '../contexts/ThemeContext'
const Header = ({className}) => {
  const theme = useContext(ThemeContext)
  return (
    <div className={className} theme={theme}>
        <Row>
        <h1>Johiny's</h1><img src={devlogo}/><h1>Posts</h1>
        </Row>
    </div>
  )
}

export default styled(Header)`
width: min(70vh,60%);
padding: 10vh;
display: flex;
justify-content: center;
${cardstyle}
margin-top: 2vh;
box-shadow: 0.75vh 0.75vh black;
background-color: ${props => props.theme.background};
border-color: ${props => props.theme.borderColor};
img{
    width: 10vh;
    padding: 0 2vh;
}
h1{
  color: ${props => props.theme.textColor}
}
`