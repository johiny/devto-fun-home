import React from 'react'
import styled from 'styled-components'
import MiniCard from "./MiniCard.js"
import Row from './Row'
const Title = ({className}) => {
  return (
    <Row className={className}>
      <h1>Welcome here you can</h1><MiniCard>see my posts</MiniCard><h1>or</h1><MiniCard>see react lastest articles</MiniCard>
    </Row>
  )
}

export default styled(Title)`
h1 {
    font-size: 3vh;
}
align-items: center;
`