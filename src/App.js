import React, { Component } from 'react';
import Header from './components/Header';
import ContactBox from './components/Contact';

class App extends Component {
  render () {
    return (
      <div className="container">
        <Header title="Contact App"/>
        <ContactBox/>
      </div>
    );
  }
}

export default App;