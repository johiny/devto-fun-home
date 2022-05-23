import React,{createContext,useState,useEffect} from "react";
import DevtoMock from "../DevtoMock"

const DevtoContext = createContext(null)
const DevtoProvider = ({children}) => {

const [query,setQuery] = useState(null)
const [posts,setposts] = useState(DevtoMock)
const Devto = {
    query : query,
    setUser: setQuery,
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