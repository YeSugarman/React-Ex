import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Posts() {

  const param = useParams()
  const [posts,sePosts]= useState([])

  useEffect(()=>{
      const fetchData = async ()=>{
          const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
          sePosts(resp.data)
      }
      fetchData()}
      ,[]) 
    
  return (
    <div>
      <ul>
        {posts.filter((element)=>(element.userId==param.id))
        .map((element)=>(<li key={element.id}>{element.title}</li>))}
      </ul>
    </div>
  )
}
