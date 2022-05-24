import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../contexts/ThemeContext'
const PageContainer = ({className,children}) => {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={className} theme={theme}>
        {children}
    </div>
  )
}

export default styled(PageContainer)`
display: flex;
justify-content : center;
align-items: center;
flex-direction: column;
background-color: ${props => props.theme.background};
`
