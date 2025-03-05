import React from 'react'

export default function Movie(props) {
    console.log(props.name);
    console.log(props.data);
            
  return (
    <div style={{border: "5px solid blue" }}>
        {props.data
        .filter((element)=>(element.name==props.name))
        .map((element)=> (<div key={element.id}>
            <p>{element.name}</p>
            <img src={element.pic} alt={element.name} />
        </div>))
        }
    </div>
  )
}
