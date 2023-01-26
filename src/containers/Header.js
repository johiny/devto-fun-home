import React from 'react'
import styled from 'styled-components'
import devlogo from "../images/dev-badge.svg"
import Row from '../SimpleComponents/Row'
import cardstyle from '../SimpleComponents/cardstyle'
const Header = ({className}) => {
  return (
    <div className={className}>
        <Row>
        <h1>Johiny's</h1>
        <img src={devlogo} alt='webpage logo'/>
        <h1>Posts</h1>
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
margin-left: auto;
left: 20px;
box-shadow: 0.75vh 0.75vh ${props => props.theme.borderColor};
background-color: ${props => props.theme.background};
border-color: ${props => props.theme.borderColor};
img{
    width: 10vh;
    padding: 0 2vh;
    filter: ${props => props?.theme?.invert};
}
h1{
  color: ${props => props.theme.textColor}
}
`