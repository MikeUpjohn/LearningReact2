import React from 'react';

function Button(props) {
    // const handleClick = () => setCounter(counter + 1);

    return (
        <button onClick={props.onClickFunction}>
            +1  
        </button>
    )
}

export default Button;