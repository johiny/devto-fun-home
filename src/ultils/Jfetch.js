async function Jfetch(query,callback){
    const response = await fetch(`https://dev.to/api/articles?${query}`)
    const data = await response.json()
    callback(data)
}

export default Jfetch