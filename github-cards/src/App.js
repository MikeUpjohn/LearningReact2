import React from 'react';

import Card from './Components/Card/Card';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Card />
      </div>
    )
  }
}

export default App;
