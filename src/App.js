import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import FooterContainer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <FooterContainer />
      </div>
    );
  }
}

export default App;
