import React , { useState } from 'react';
import './RoomTemp.css';

function RoomTemp(){
    let [temp, setTemp] = useState(72);
    return <div>
            <h3>The Current Temprature is {temp} <sup>0</sup>F</h3>
            <button onClick = {()=> setTemp(++temp)}>Increase Temprature</button>
            <button className = 'button' onClick = {()=> setTemp(--temp)}>Decrease Temprature</button>
        </div>
}
export default RoomTemp;