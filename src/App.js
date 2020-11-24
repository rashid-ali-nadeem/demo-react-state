import React ,{ useState } from 'react';
import Room from './Room.js';
import RoomTemp from './RoomTemp.js';
import Counter from './Counter.js';


function App() {
  let [count, setCount] = useState(0); 
  

  return (
    <div >
  <Room/>
  <RoomTemp/>
  <Counter counter = {count} setcount = {setCount}/>
  </div>
  );
}

export default App;
