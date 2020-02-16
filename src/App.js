import React, { Component } from 'react';
import Header from './components/Header';
import { FormProduct, ListProduct} from './components/Product';

class App extends Component {
  render () {
    return (
      <div className="container">
        <Header title="Products App"/>
        <div className="row">
          <div className="col-md-6"><FormProduct/></div>
          <div className="col-md-6"><ListProduct/></div>
        </div>
      </div>
    );
  }
}

export default App;