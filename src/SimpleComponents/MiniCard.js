import React, { useContext } from 'react'
import styled from 'styled-components'
import cardstyle from './cardstyle'
import { DevtoContext } from '../contexts/DevtoContext'
import { ThemeContext } from '../contexts/ThemeContext'
const MiniCard = ({className,children,devToValue}) => {
  const {setQuery} = useContext(DevtoContext)
  const {theme} = useContext(ThemeContext)
  console.log(theme.background)
  return (
    <h1 className={className} theme={theme} onClick={()=> setQuery(devToValue)}>
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
box-shadow: 0.5vh 0.5vh black;
transition: 500ms;
background-color: ${props => props.theme.background || 'white'};
border-color: ${props => props.theme.borderColor};
:hover{
  background-color: ${props => props.theme.hoverColor};
  color: ${props => props.theme.textHoverColor}
}
`