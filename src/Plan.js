function Plan(props)
{
    return<>
    {console.log("Plan ")}
    <div className="pen"></div><li  className="shadow p-2 my-2 col-sm-9" id="blocks" >{props.value}</li>
    <button className="btn btn-danger my-2 col-sm-2 offset-1" onClick={()=>{props.sendData(props.id)}}>X</button>
    </>
}

export default Plan;