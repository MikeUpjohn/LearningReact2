import React from 'react';

import CardList from './Components/CardList/CardList';
import Form from './Components/Form/Form';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form />
        <CardList />
      </div>
    )
  }
}

export default App;
