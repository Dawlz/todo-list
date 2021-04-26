import React, { useState } from 'react';

const ShowList = (props) => {
    const [isDone, setIsDone] = useState(false);
    const idx = props.idx;

    console.log(props.listDisplay)

    const checkChecked = (e) => {
        setIsDone(e.target.checked)
    }

    return (
        <div style = {{color: "black", margin: "0% 30%"}}>
            <input type="checkbox" checked = { isDone } onChange = { checkChecked } />
            { isDone ?   <del style = {{color: "skyblue"}}>  { props.listDisplay }  </del> : props.listDisplay }
            <button style = {{backgroundColor: "crimson", color: "whitesmoke", cursor: "not-allowed", marginLeft: "4px"}} onClick= { () => props.deleteOne(idx) }>Delete</button>
        </div>
    )
}

export default ShowList;

