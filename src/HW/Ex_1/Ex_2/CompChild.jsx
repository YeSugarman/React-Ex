import { useState } from "react"

function CompChild(props){

    const [help,setHelp]=useState(false)

    const showProduct = ()=>{
        return(<>

        <table border={1}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Color</th>
            </tr>
        </thead>

        <tbody>
            {
                props.data.map((prodact,index) => {
                    return <tr key={index}>
                        <td>{prodact.name}</td>
                        <td>{prodact.price}</td>
                        <td>{prodact.color}</td>
                    </tr>

                })
            }
        </tbody>

    </table>

    </>) }

    return<>
     <button onClick={() => setHelp(true)}>Show Product in table</button>
    
    {help&&showProduct()}
    </>
}
export default CompChild