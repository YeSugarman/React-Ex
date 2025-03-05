import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Todos() {
  const param = useParams()
  const [todos,setTodos]= useState([])

  useEffect(()=>{
      const fetchData = async ()=>{
          const resp = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
          setTodos(resp.data)
      }
      fetchData()}
      ,[]) 
    
  return (
    <div>
      <ul>
        {todos.filter((element)=>(element.userId==param.id))
        .map((element)=>(<li key={element.id}>{element.title}</li>))}
      </ul>
    </div>
  )
}
