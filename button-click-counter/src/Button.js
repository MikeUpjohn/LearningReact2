import React, {useState} from 'react';

function Button() {
    const [counter, setCounter] = useState(0);

    return <button onClick={() => setCounter(counter + 1)}>{counter}</button>
}

function logRandom() {
    console.log(Math.random());
}

export default Button;