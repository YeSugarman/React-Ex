import React, { useState } from 'react'
import Movie from './Movie'

export default function ParentComponent() {
    const [data,setData]=useState([{id : 1 , name : "Under the Dome", pic : 
        "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg"}, 
        {id : 2 , name : "Person of Interest", pic : 
        "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg"}, 
        {id : 3 , name : "Bitten", pic : 
        "https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg"}])

        const [name,setName]=useState(null)

        if(!data)
            return <p>loading</p>

  return (
    <div style={{border: "8px solid red" }}>
        <h1>Pick a Movie</h1>
        <select onChange={(event)=>(setName(event.target.value))}>
            <option> </option>
            {data.map((element)=>(<option key={element.id}>{element.name}</option>
            ))}
        </select>
        <br />
        <br />
        <br />
        <Movie name={name} data={data}/>
    </div>
  )
}
