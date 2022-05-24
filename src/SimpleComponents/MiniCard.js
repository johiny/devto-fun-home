import React, { useContext } from 'react'
import styled from 'styled-components'
import cardstyle from './cardstyle'
import { DevtoContext } from '../contexts/DevtoContext'
const MiniCard = ({className,children,devToValue}) => {
  const {setQuery} = useContext(DevtoContext)
  return (
    <h1 className={className} onClick={()=> setQuery(devToValue)}>
      {children}
    </h1>
  )
}

export default styled(MiniCard)`
${cardstyle}
border-top-left-radius: 1vh;
border-top-right-radius: 1vh; 
padding: 1vh;
margin-left: 1vh;
margin-right: 1vh;
box-shadow: 0.5vh 0.5vh ${props => props.theme.borderColor};
transition: 500ms;
background-color: ${props => props.theme.background};
border-color: ${props => props.theme.borderColor};
:hover{
  background-color: ${props => props.theme.hoverColor};
  color: ${props => props.theme.textHoverColor}
}
`