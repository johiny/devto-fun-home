import React, { useContext } from 'react'
import styled from 'styled-components'
import Card from '../SimpleComponents/Card'
import { DevtoContext } from '../contexts/DevtoContext'
const Articles = ({className}) => {
    const {posts} = useContext(DevtoContext)
  return (
    <div className={className}>
        {posts.map((post => {
            return <Card img={post.social_image} link={post.url} key={post.id} title={post.title} name={post.user.name}/>
        }))}
    </div>
  )
}

export default styled(Articles)`
margin-top:1vh;
margin-left: 1.5vh;
margin-right: 1.5vh;
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 5vh;
justify-content: center;
`