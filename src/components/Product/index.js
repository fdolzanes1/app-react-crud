import React, { Component } from 'react'; 
import './styles.css';

class FormProduct extends Component {
  render() {
    return (
      <div>
        <h2>Cadastro de Produtos</h2>
      </div>
    );
  }
}

class ListProduct extends Component {
  render() {
    return (
      <div>
        <h2>Listar de Produtos</h2>
      </div>
    );
  }
}

export default class ProductBox extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6"><FormProduct/></div>
        <div className="col-md-6"><ListProduct/></div>
      </div>
    );
  }
}