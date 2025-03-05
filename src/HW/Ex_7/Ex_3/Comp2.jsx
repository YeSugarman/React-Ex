import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Comp2() {

    const navigate = useNavigate()

    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")

    const handleSubmit = (e) =>{
      e.preventDefault()
      if(firstName){
        localStorage.setItem("firstName", firstName)
        localStorage.setItem("lastName", lastName)      
        navigate("/comp3")
      }
      else
          console.log("enter firstName");
          
    }

  return (
    <div>
       <form onSubmit={handleSubmit}>
            First Name: <input type="text" onChange={(e)=>{setFirstName(e.target.value)}}/> <br />
            Last Name: <input type="text" onChange={(e)=>{setLastName(e.target.value)}}/> <br />

            <button type="submit">Next</button>
       </form>
    </div>
  )
}
