import sunIcon from "../images/icons8-sun-240.svg"
import React, { useContext, useState } from 'react'
import styled from "styled-components"
import { darkmode, lightmode } from "./Themes"
import { ThemeContext } from "../contexts/ThemeContext"

const ThemeChanger = (props) => {
 const {setTheme} = useContext(ThemeContext)
  return (
    <img className={props.className} src={sunIcon} onClick={() => {
        props.theme.name === "lightmode" ? setTheme(darkmode):setTheme(lightmode)
        console.log("hola")
    }}/>
  )
}

export default styled(ThemeChanger)`
    width: 5vh;
    align-self: flex-start;
    margin-left: auto;
    margin-top: 2vh;
    margin-right: 2vh;
    cursor: pointer;
    filter: ${props => props?.theme?.invert};
`