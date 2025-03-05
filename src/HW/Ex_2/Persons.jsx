import React, { useState, useEffect } from 'react'
import { getAllItems } from './Utils.jsx'
import Person from './Person.jsx'

export default function Persons() {

const [persons,setPersons]=useState(null)


useEffect(()=>{ const getPersons = async()=>{
  const personss= await getAllItems(`https://jsonplaceholder.typicode.com/users`)
  setPersons(personss)
}
getPersons()},
[])

  if (!persons) {
    return <p>Loading...</p>;
  }

  return (<div style={{ border: "8px solid green" }}>
  <h1>Persons List</h1>
    {persons.map((element) => (<div  key={element.id} style={{ border: "5px solid red" }}>
    <Person id={element.id}/></div>
    ))}
  </div>
  )
}
