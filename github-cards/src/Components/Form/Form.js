import React from 'react';

import './Form.css';

class Form extends React.Component {
    render() {
        return (
            <form action="">
                <input type="text" placeholder="GitHub Username" />
                <button>Add Card</button>
            </form>
        )
    }
}

export default Form;