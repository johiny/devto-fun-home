import React from 'react'
import styled from 'styled-components'
import cardstyle from './cardstyle'
const MiniCard = ({className,children}) => {
  return (
    <h1 className={className}>
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
`