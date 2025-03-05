const style = {backgroundColor: "green", width: "50px", height: "50px"}
function CompC(props){
    return<>
    <div style={style}>
        CompC
        <br />
        {props.input}
    </div>
    </>
}
export default CompC