import React from 'react'
import styled from 'styled-components'
const Row = ({className,children}) => {
  return (
    <div className={className}>
        {children}
    </div>
  )
}

export default styled(Row)`
display: flex;
flex-direction: row
`