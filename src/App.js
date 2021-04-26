import React, { useState } from 'react';
import TodoList from './Components/todoList';
import ShowList from './Components/showList';

const App = () => {
    let initial = JSON.parse(localStorage.getItem('task')) === null ? [] : [...JSON.parse(localStorage.getItem('task'))]
    const [listProp, setListProp] = useState(initial);
    const makeList = (listItem)=>{
        localStorage.setItem('task', JSON.stringify([...listProp, listItem]))
        setListProp(JSON.parse(localStorage.getItem('task')));
    }

    const todoDel = idx => {
        listProp.splice(idx, 1);
        localStorage.setItem('task', JSON.stringify([...listProp]))
        setListProp([...JSON.parse(localStorage.getItem('task'))]);
        if (listProp.length === 0) {
            localStorage.removeItem('task')
        }
    }

    return (
        <div style = {{display: "flex", flexDirection: "column" , backgroundColor: "slategray", width: "40%", margin:"30px 0 0 33%", padding: "10px", border: "2px solid black", boxShadow: "1px 1px orange" }}>
            <TodoList listMaker = { makeList }/>
            <h1 style = {{color: "yellow", margin: "0% 15%"}}>Your Todos appear here</h1>
            { listProp.length > 0 ? listProp.map(( make, i )=> 
            <ShowList key={i} listDisplay={make} idx={i} deleteOne={todoDel} />
            ) :  <p style = {{color: "black", margin: "0% 22%", marginTop: "2px" }}>Empty for now, add a new task to begin</p> }
        </div>
    )
}

export default App;