import CompC from "./CompC"

function CompB(props){
    const style = {backgroundColor: "blue", width: "100px", height: "100px"}

    return<>
    <div style={style}>
        CompB
        <CompC input={props.input}/>
    </div>
    </>
}
export default CompB