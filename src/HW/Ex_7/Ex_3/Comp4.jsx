import React from 'react'

export default function Comp4() {
  return (
    <div>
      firstName: {localStorage.getItem("firstName")} <br/>
      lastName: {localStorage.getItem("lastName")} <br/>
      city: {localStorage.getItem("city")} <br/>
    </div>
  )
}
