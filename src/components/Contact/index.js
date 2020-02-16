import React, { Component } from 'react'; 
import { Table, Button } from 'reactstrap';
import './styles.css';

class FormContact extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

class ListContact extends Component {
  render() {

    const { contacts } = this.props; 
    console.log(contacts);
    return (
      <Table>
        <thead>
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
                    <Button color="danger" size="sm">Excluir</Button>
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

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h2>Cadastro de Contato</h2>
          <FormContact/>
          
        </div>
        <div className="col-md-6">
          <h2>Listar de Contato</h2>
          <ListContact contacts={this.state.contacts}/>
          
        </div>
      </div>
    );
  }
}