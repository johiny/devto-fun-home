import React from 'react'
import styled from 'styled-components'
const CardOverly = ({className,title,name,theme}) => {
  return (
    <div className={className}>
        <h3>{title}</h3>
        <h4>{`@${name}`}</h4>
    </div>
  )
}

export default styled(CardOverly)`
display: flex;
opacity: 0;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
top: -1px;
left: -2px;
background-color: ${props => props.theme.hoverColor};
width: 101%;
height: 101%;
border-top-left-radius: 2vh;
border-top-right-radius: 2vh;
border-bottom-left-radius: 2px;
border-bottom-right-radius: 2px;
h3{
    margin: 5vh;
    font-size: 3vh;
    color: ${props => props.theme.textHoverColor}
}
h4{
    color: ${props => props.theme.textHoverColor};
    font-size: 2vh;
}
transition: 500ms;
:hover{
    opacity: 1;
}
`