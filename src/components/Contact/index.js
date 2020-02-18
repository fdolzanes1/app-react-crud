import React, { Component } from 'react';
import { Table, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './styles.css';
import Header from '../Header';

class FormContact extends Component {

  state = { 
    model: {
      _id: 0,
      nome: '', 
      email: '', 
      telefone: '' 
    } 
  };

  setValues = (e, field) => {
    const { model } = this.state;
    model[field] = e.target.value;
    this.setState({ model });
  }

  create  = () => {
    let data = {
      _id: parseInt(this.state.model.id),
      nome: this.state.model.nome, 
      email: this.state.model.email, 
      telefone: this.state.model.telefone
    }; 
    this.setState({ model:{ _id: 0, nome: '', email: '', telefone: '' }  });
    this.props.contactCreate(data);
  }

  render() {
    return (
      <Form >
        <FormGroup>
          <Label for="nome">Nome</Label>
          <Input id="nome" value={this.state.model.nome} type="text" placeholder="Digite o seu Nome" onChange={ e => this.setValues(e, 'nome')} ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input id="email" value={this.state.model.email} type="text" placeholder="Digite o seu Email" onChange={ e => this.setValues(e, 'email')} ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="telefone">Telefone</Label>
          <Input id="telefone" value={this.state.model.telefone} type="text" placeholder="Digite o seu Telefone" onChange={ e => this.setValues(e, 'telefone')} ></Input>
        </FormGroup>
        <FormGroup>
          <Button onClick={this.create} color="primary">Salvar Contato</Button>
        </FormGroup>
      </Form>
    );
  }
}

class ListContact extends Component {
  
  delete = (_id) => {
    this.props.deleteContact(_id);
  }

  render() {
    const { contacts } = this.props;
    return (
      <Table className="table-bordered text-center">
        <thead className="thead-dark">
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.map(contact => (
              <tr key={contact._id} >
                <td>{contact.nome}</td>
                <td>{contact.email}</td>
                <td>{contact.telefone}</td>
                <td><Button color="info" size="sm">Editar</Button>
                  <Button color="danger" size="sm" onClick={ e => this.delete(contact._id)}>Excluir</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    );
  }
}

export default class ContactBox extends Component {

  url = "https://nameless-badlands-32634.herokuapp.com/api/contacts";

  state = {
    contacts: [],
  }

  componentDidMount() {
    fetch(this.url)
      .then(response => response.json())
      .then(response => this.setState({ contacts: response.docs }))
      .catch(e => console.log(e));
  }

  create = (contact) => {
    const requestInfo = {
      method: 'POST',
      body: JSON.stringify(contact), 
      headers: new Headers({
        'Content-type': 'application/json'
      })

    };
    fetch(this.url, requestInfo)
      .then(response => response.json())
      .then(newContact => {
        let { contacts } = this.state; 
        contacts.push(newContact); 
        this.setState({ contacts });
      })
      .catch( e => console.log(e) );
  }

  delete = (_id) => {
    fetch(`${ this.url }/${ _id }`, { method: 'DELETE' })
      .then(response => response.json())
      .then(rows => {
        const contacts = this.state.contacts.filter(contact => contact._id !== _id);
        this.setState({ contacts });
      })
      .catch(e => console.log(e));
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h2>Cadastro de Contato</h2>
          <FormContact contactCreate={this.create}/>

        </div>
        <div className="col-md-6">
          <h2>Listar de Contato</h2>
          <ListContact contacts={this.state.contacts} deleteContact={ this.delete } />

        </div>
      </div>
    );
  }
}