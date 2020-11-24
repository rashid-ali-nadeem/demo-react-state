import React ,{ useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  let [isDay, setDay] = useState(false);
  let [count, setCount] = useState(0); 
  const today = isDay ? 'dayShine' : 'darkNight';
  return (
    <div className = {'box ${today}'}>
  <h3>This is {isDay? "Day": "Night"}</h3>
  <button onClick = {() => setDay(!isDay)} >Change</button>
  <Counter counter = {count} setcount = {setCount}/>
  </div>
  );
}

export default App;
