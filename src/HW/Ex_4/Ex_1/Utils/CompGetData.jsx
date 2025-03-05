import React, {useState} from 'react'
import { getUserFullData } from './Utils'
import "../Utils/GetData.css"

export default function CompGetData() {
    const [data, setData] = useState({name:"",email:"",todos:[],posts:""})
    const [id, setId] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    const fetchData= async ()=>{
        const result = await getUserFullData(Number(id))
        setData(result)
        setIsVisible(true)
    }


  return (
    <div>
        Enter id <input type="text" onChange={(e)=>(setId(e.target.value))}/>
        <button onClick={()=>(fetchData())}>click me</button><br />
        <div className={isVisible == true ? "style-visible" : "style-invisible"}>
            email: {data.email} <br />
            name: {data.name} <br/>
            todos:
            <ul>
                {data.todos.map((todo, element)=>(<li key={element}>{todo}</li>))}
            </ul>
            posts: {data.posts}
        </div>
    </div>
  )
}
