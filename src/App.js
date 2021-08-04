import React from "react";
import "./App.scss";
import Join from "./components/Join";
import reducer from "./reducer";
import socket from "./socket";
import Chat from './components/Chat'

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
  });

  const onLogin = (obj) => {
    dispatch({
      type: "JOINED",
      payload: obj,
    });
    socket.emit("ROOM_JOIN", obj);
  };

  React.useEffect(() => {
    socket.on('ROOM_JOINED', (users) => {
      console.log('New user', users);
    });
  }, [])
  
  return (
    
    <div className="wrapper">{!state.joined ? <Join onLogin={onLogin}/> : <Chat/>}</div>
    
    
  );
}

export default App;
