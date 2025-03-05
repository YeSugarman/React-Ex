import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Names() {

    const [names,setNames]= useState([])
    
    useEffect(()=>{
        const fetchData = async ()=>{
            const resp = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            setNames(resp.data)
        }
        fetchData()}
        ,[])        

  return (
    <div>
        {names.map(
            (element)=>(<div key={element.id}><Link to={`/name/${element.id}`}>{element.name}</Link></div>)
        )}
    </div>
  )
}
