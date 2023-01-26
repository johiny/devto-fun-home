import React from 'react'
import styled from 'styled-components'
import cardstyle from './cardstyle'
import CardOverly from './CardOverly'
const Card = ({className, img, link, title, name,theme}) => {
    const navigate = () => {
        window.location.href = link
    }
  return (
    <div className={className} onClick={() => navigate()}>
        <img src={img} alt='devto article img'/>
    <CardOverly  theme={theme} title={title} name={name} />    
    </div>
  )
}

export default styled(Card)`
${cardstyle}
position: relative;
display: flex;
flex-direction: column;
width: 60vh;
padding: 1vh;
box-shadow: 0.5vh 0.5vh ${props => props.theme.borderColor};
background-color: ${props => props.theme.background};
border-color: ${props => props.theme.borderColor};
cursor: pointer;
img{
    width: 100%;
    border-radius: 1vh;
    filter: invert(${props => props?.theme?.invert ? 1 : 0})
}
`