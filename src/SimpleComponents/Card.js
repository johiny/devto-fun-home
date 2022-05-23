import React from 'react'
import styled from 'styled-components'
import cardstyle from './cardstyle'
const Card = ({className, img, link}) => {
    const navigate = () => {
        window.location.href = link
    }
  return (
    <div className={className} onClick={() => navigate()}>
        <img src={img}/>
    </div>
  )
}

export default styled(Card)`
${cardstyle}
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