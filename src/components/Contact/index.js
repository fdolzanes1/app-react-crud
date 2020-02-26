import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import { Table, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import './styles.css';

class FormContact extends Component {

  state = { 
    model: {
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
    this.setState({ model:{ nome: '', email: '', telefone: '' }  });
    this.props.contactCreate(this.state.model);
  }

  componentWillMount() {
    PubSub.subscribe('edit-contact', (topic, contact) => {
      this.setState({ model: contact });
    });
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

  onEdit = ( contact ) => {
    PubSub.publish('edit-contact', contact);
  }
  
  render() {
    const { contacts } = this.props;
    return (
      <Table className="table-responsive text-center" responsive>
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
                <td><Button color="info" size="sm" onClick={ e => this.onEdit( contact ) }>Editar</Button>
                  <Button color="danger" size="sm" onClick={ e => this.delete( contact._id )}>Excluir</Button>
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
      message: {
        text: '',
        alert: ''
      }
  }

  componentDidMount() {
    fetch(this.url)
      .then(response => response.json())
      .then(response => this.setState({ contacts: response.docs }))
      .catch(e => console.log(e));
  }

  save = (contact) => {
    let data = {
      _id: contact._id,
      nome: contact.nome, 
      email: contact.email, 
      telefone: contact.telefone
    }; 

    const requestInfo = {
      method: data._id != null ? 'PUT':'POST',
      body: JSON.stringify(data), 
      headers: new Headers({
        'Content-type': 'application/json'
      })

    };
    
    if ( data._id == null) {
      fetch(this.url, requestInfo)
      .then(response => response.json())
      .then(newContact => {
        let { contacts } = this.state; 
        contacts.push(newContact); 
        this.setState({ contacts, message: { text: "Novo Contado Adicionado", alert: 'success' } });
        this.timerMessage(3000);
      })
      .catch( e => console.log(e) );
    } else {
      fetch(`${ this.url }/${ data._id }`, requestInfo)
        .then(response => response.json())
        .then(updatedContact => {
          let { contacts } = this.state;
          
          let position = this.state.contacts.findIndex(contact => contact._id === data._id);
          contacts[position] = updatedContact;
          this.setState({ contacts, message: { text: "Contato Atualizado", alert: 'info' } });
          this.timerMessage(3000);
        })
        .catch( e => console.log(e) );
    }
    
  }

  delete = (_id) => {
    fetch(`${ this.url }/${ _id }`, { method: 'DELETE' })
      .then(response => response.json())
      .then(rows => {
        const contacts = this.state.contacts.filter(contact => contact._id !== _id);
        this.setState({ contacts,  message: { text: 'Contato Deletado', alert: 'danger' } });
        this.timerMessage(3000);
      })
      .catch(e => console.log(e));
  };

  timerMessage = (duration) => {
    setTimeout(() => {
      this.setState({ message: { text: '', alert: ''} });
    }, duration);
  }

  render() {
    return (
      <div className="contact-box">
        {
          this.state.message.text !== ''? (
              <Alert color={this.state.message.alert} className="text-center"> {this.state.message.text} </Alert>
          ) : ''
        }

        <div className="row">
          <div className="col-md-6">
            <h2>Cadastro de Contato</h2>
            <FormContact contactCreate={this.save}/>
          </div>
          <div className="col-md-6">
            <h2>Listar de Contato</h2>
            <ListContact contacts={this.state.contacts} deleteContact={ this.delete } />
          </div>
        </div>
      </div>
    );
  }
}