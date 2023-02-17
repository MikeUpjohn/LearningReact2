import React, {useState} from 'react';

function Button() {
    const [counter, setCounter] = useState(5);

    return <button onClick={() => setCounter(counter * 2)}>{counter}</button>
}

function logRandom() {
    console.log(Math.random());
}

export default Button;