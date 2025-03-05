import { useState } from "react"
import CompChild from "./CompChild"

function CompParent(){

    const [name, setName]=useState("")
    const [price, setPrice]=useState("")
    const [color, setColor]=useState("")
    const [data, setData]= useState([{}])

    return<>
    Product Name: <input type="text" onChange={(e)=>{setName(e.target.value)}}/> <br />
    Product Price: <input type="text" onChange={(e)=>setPrice(e.target.value)}/> <br />
    Product Color: <input type="text" onChange={(e)=>setColor(e.target.value)}/> <br />

    <button onClick={()=>{setData([...data,{name:name,price:price,color:color}])}}>To save data</button>

    <CompChild data={data}/>
    </>


}
export default CompParent