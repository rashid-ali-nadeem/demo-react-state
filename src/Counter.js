import React from 'react';
import './Counter.css';

function Counter ({counter,setcount}){
    return <div>
            <h3>The value in the Counter is {counter}</h3>
            <button onClick = {()=> setcount(++counter)}>Increase Value</button>
            <button className = 'button' onClick = {()=> setcount(--counter)}>Decrease Value</button>
        </div>
}
export default Counter;