import React, { Component } from 'react'; 
import './styles.css';

class FormContact extends Component {
  render() {
    return (
      <div>
        <h2>Cadastro de Contato</h2>
      </div>
    );
  }
}

class ListContact extends Component {
  render() {
    return (
      <div>
        <h2>Listar de Contato</h2>
      </div>
    );
  }
}

export default class ContactBox extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6"><FormContact/></div>
        <div className="col-md-6"><ListContact/></div>
      </div>
    );
  }
}