import React from 'react';
import './App.scss';
import axios from 'axios';

function App() {
  const [items, setItems] = React.useState([])

  React.useEffect(()=>{
    axios.get('http://localhost:5050/user').then(responce =>
    setItems(responce))
  },[])
  console.log(items)
  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
