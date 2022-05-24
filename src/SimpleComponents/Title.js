import React,{useContext} from 'react'
import styled from 'styled-components'
import MiniCard from "./MiniCard.js"
import Row from './Row'
import { ThemeContext } from '../contexts/ThemeContext.js'
const Title = ({className}) => {
  const theme = useContext(ThemeContext)
  return (
    <Row className={className} theme={theme}>
      <h1>Welcome here you can</h1><MiniCard devToValue={"username=johiny"}>see my posts</MiniCard><h1>or</h1><MiniCard devToValue={"tag=react"}>see react lastest articles</MiniCard>
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