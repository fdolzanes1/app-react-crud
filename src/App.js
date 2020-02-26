import React, { Component } from 'react';
import Header from './components/Header';
import ContactBox from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  render () {
    return (
      <div className="container">
        <Header title="Contact App"/>
        <ContactBox/>
        <Footer/>
      </div>
    );
  }
}

export default App;