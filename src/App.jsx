import React, { Component } from 'react';
import LifeCycle from './components/LifeCycle';

class App extends Component {
  render() {
    return (
      <div>
        <LifeCycle name='Toto2'/>
        <p>Bonjour</p>
      </div>
    );
  }
}

export default App;