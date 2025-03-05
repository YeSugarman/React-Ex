import {useState} from 'react'
import CompB from "./CompB"

function CompA() {
    const [input, setInput]=useState("")

    const style = {backgroundColor: "red", width: "200px", height: "200px"}
    return <>
    <div style={style}>
        CompA
        <input type="text" onChange={(event)=> {setInput(event.target.value)}}/>
        <CompB input={input}/>
    </div>
    </>
}
export default CompA