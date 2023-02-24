import Button from './Button';
import Display from './Display';
import React, { useState } from 'react';

function App() {
    const [counter, setCounter] = useState(42);
    const incrementCounter = () => setCounter(counter + 1);
    return (
        <>
            <Button onClickFunction={incrementCounter} />
            <Display message={counter} />
        </>
    )
}

export default App;


