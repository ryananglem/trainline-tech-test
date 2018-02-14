import React, { Component } from 'react';
import LineContainer from './components/Line'
import './app.css'

export class App extends Component {
  render() {
    return (
      <div>
        <LineContainer departureStation="Farringdon" />
      </div>
    );
  }
}
export default App;
