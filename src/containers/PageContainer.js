import React, { useContext } from 'react'
import styled from 'styled-components'
const PageContainer = ({className,children}) => {
  return (
    <div className={className}>
        {children}
    </div>
  )
}

export default styled(PageContainer)`
display: flex;
align-items: center;
flex-direction: column;
background-color: ${(props) => props.theme.background};
min-height: 100vh;
`
