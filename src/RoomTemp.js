import React , { useState } from 'react';
import './RoomTemp.css';
import './Header.css';

function RoomTemp(){
    let [temp, setTemp] = useState(72);
    return (
        <div>
            <header className = 'header'>    
                <h3>The Current Temprature is {temp} <sup>0</sup>F</h3>
                <button onClick = {()=> setTemp(++temp)}>Increase Temprature</button>
                <button className = 'button' onClick = {()=> setTemp(--temp)}>Decrease Temprature</button>
            </header>
        </div>
        );
}
export default RoomTemp;