import React, { useState } from 'react';

function Counter ({counter,setcount}){
    return <div>
            <h3>The value in the Counter is {counter}</h3>
            <button onClick = {()=> setcount(++counter)}>Increase Value</button>
            <button onClick = {()=> setcount(--counter)}>Decrease Value</button>
        </div>
}
export default Counter;