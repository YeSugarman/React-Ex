import React, { useState, useEffect} from 'react'
import { getItem } from './Utils.jsx'
import Task from './Task.jsx'

export default function Person(props) {

 const [person,setPerson]=useState(null)

useEffect(()=>{
  const getPersonId = async()=>{
    const personn= await getItem(`https://jsonplaceholder.typicode.com/users`,props.id)
    setPerson(personn)
    }
    getPersonId()
},
[])


  if (!person) {
    return <p>Loading...</p>;
  }
  return (
  <>
  {person.name}
  <Task id={person.id}/>
  </>
  )
}
