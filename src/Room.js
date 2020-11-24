import React, { useState } from 'react';
import './Room.css';
import './Header.css';

function Room (){
    let [isLight, setLight] = useState(false);
    return (
        <div className = {`room ${isLight ? 'light' : 'dark'}`}>
            <header className = 'header'>
                <h2>The Room is {isLight ? 'Light' : 'Dark'}</h2>
                <button onClick={()=>setLight(true)}>On</button>
                <button className = 'button' onClick={()=>setLight(false)}> OFF</button>
            </header>
        </div>
    );
}
export default Room;