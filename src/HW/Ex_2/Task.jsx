import React, { useState, useEffect } from 'react'
import { getAllItems } from './Utils.jsx'

export default function Task(props) {

    const [tasks,setTasks]=useState(null)

    useEffect(()=>{
      const getTaskId = async()=>{
        const taskss= await getAllItems(`https://jsonplaceholder.typicode.com/todos`)
        setTasks(taskss)
    }
    getTaskId()
    },
    [])


    if (!tasks) {
        return <p>Loading...</p>;
    }

  return ( <> {tasks.filter((element)=>(element.userId==props.id))
        .map((element)=>(<div key={element.id} style={{ border: "3px solid blue" }}>
        <p>Title: {element.title}</p>
        <p>Completed: {element.completed?"true":"false"}</p>
        </div>))
        
      }
</> 
  )
}
