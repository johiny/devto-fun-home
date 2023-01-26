import React,{createContext,useState,useEffect} from "react";
import Jfetch from "../ultils/Jfetch";

const DevtoContext = createContext(null)
const DevtoProvider = ({children}) => {

const [query,setQuery] = useState("tag=react")
const [posts,setposts] = useState([])

useEffect(() => {
    Jfetch(query,setposts)
    console.log(query)
},[query])

const Devto = {
    query : query,
    setQuery: setQuery,
    posts : posts,
    setposts: setposts
}
    return(
    <DevtoContext.Provider value={Devto}>
        {children}
    </DevtoContext.Provider>
    )
}
export {DevtoContext, DevtoProvider};