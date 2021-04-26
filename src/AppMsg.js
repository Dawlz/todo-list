import React, { useState } from 'react';
import './App.css';
import MessageDisplay from './Components/MessageDisplay'
import MessageForm from './Components/MessageForm'

function App() {
  const [currentMsg, setCurrentMsg] = useState("Message is empty");
  const youGotMsg = (newMsg) =>{
    setCurrentMsg(newMsg)
  }

  return (
    <div className="App">
      <MessageForm display = { youGotMsg }/>
      <MessageDisplay message = { currentMsg } />
    </div>
  )
};

export default App;
