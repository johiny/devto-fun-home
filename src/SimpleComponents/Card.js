import React from 'react'
import styled from 'styled-components'
import cardstyle from './cardstyle'
import CardOverly from './CardOverly'
const Card = ({className, img, link, title, name}) => {
    const navigate = () => {
        window.location.href = link
    }
  return (
    <div className={className} onClick={() => navigate()}>
        <img src={img}/>
    <CardOverly title={title} name={name} />    
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
box-shadow: 0.5vh 0.5vh black;
cursor: pointer;
img{
    width: 100%;
    border-radius: 1vh;
}
`