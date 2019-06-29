import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import HandPinch from './components/HandPinch/HandPinch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Header />
        <Title />
        <HandPinch />
        </header>
      </div>
    );
  }
}

export default App;
