import React, { useState } from 'react';

const TodoList = (props) => {
    const [list, setList] = useState('');

    const changeHandler = (e) => {
        setList(e.target.value);
    };

    const processTask = () => {
        props.listMaker( list );
        setList("");
        alert("Task Added Successfully");
    }

    const taskAdder = (e)=>{
        e.preventDefault();
        list === "" ? alert("Add a valid task") : processTask()
        
    }

    return (
        <div>
            <form style = {{color: "beige", margin: "10px 10%", fontSize: "44"}} onSubmit= { taskAdder }>
                <label htmlFor="formItem">Add a New Task: </label>
                <input type="text" value= { list } onChange = { changeHandler }/>
                <input style = {{backgroundColor: "darkolivegreen", color: "whitesmoke", cursor: "pointer", marginLeft: "4px"}} type="submit" value="Add Task"/>
            </form>
        </div>
    )
}

export default TodoList;