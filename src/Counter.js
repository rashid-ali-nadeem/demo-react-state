import React from 'react';
import './Counter.css';
import './Header.css';

function Counter ({counter,setcount}){
    return (
        <div>
            <header className = 'header'>
                <h3>The value in the Counter is {counter}</h3>
                <button onClick = {()=> setcount(++counter)}>Increase Value</button>
                <button className = 'button' onClick = {()=> setcount(--counter)}>Decrease Value</button>
            </header>
        </div>
        
        );
}
export default Counter;