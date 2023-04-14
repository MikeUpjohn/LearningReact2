import React from 'react';

import CardList from './Components/CardList/CardList';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <CardList />
      </div>
    )
  }
}

export default App;
