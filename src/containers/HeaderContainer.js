import React from 'react'
import styled from 'styled-components'
const HeaderContainer = (props) => {
  return (
    <div className={props.className}>
        {props.children}
    </div>
  )
}

export default styled(HeaderContainer)`
display: flex;
flex-direction: row;
width: 100%;
justify-content: center;
`