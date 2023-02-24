import Button from './Button';
import Display from './Display';
import React, { useState } from 'react';

function App() {
    const [counter, setCounter] = useState(0);
    const incrementCounter = (increment) => setCounter(counter + increment);
    return (
        <>
            <Button onClickFunction={incrementCounter} increment={1} />
            <Button onClickFunction={incrementCounter} increment={5} />
            <Button onClickFunction={incrementCounter} increment={10} />
            <Button onClickFunction={incrementCounter} increment={100} />
            <Display message={counter} />
        </>
    )
}

export default App;