import React from 'react'
import styled from 'styled-components'
import MiniCard from "./MiniCard.js"
import Row from './Row'
const Title = ({className,theme}) => {
  return (
    <Row className={className}>
      <h1>Welcome here you can</h1><MiniCard theme={theme} devToValue={"username=johiny"}>see my posts</MiniCard><h1>or</h1><MiniCard theme={theme} devToValue={"tag=react"}>see react latest articles</MiniCard>
    </Row>
  )
}

export default styled(Title)`
h1 {
    font-size: 3vh;
    cursor: pointer;
    color: ${props => props.theme.textColor}
}
align-items: center;
`