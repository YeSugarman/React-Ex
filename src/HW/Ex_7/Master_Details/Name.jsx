import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams, Outlet } from 'react-router-dom'

export default function Name() {

    const param = useParams()

    const [name, setName] = useState({})

    useEffect(()=>{
        const  fetchData = async ()=>{
            const resp = await axios.get(`https://jsonplaceholder.typicode.com/users/${param.id}`)
            setName(resp.data)
        }
        fetchData()
    },[])

  return (
    <div style={{border: "2px solid blue"}}>
        {name.name}<br/>
        {name.email}<br/>
        {name.address?.city}<br/>

        <Link to='posts'>posts</Link><br/>
        <Link to='todos'>todos</Link><br/>
        <Link to="/">to back home</Link>
        
        <Outlet/>
      </div>
  )
}
