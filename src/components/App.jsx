import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    if (this.isDublicate(name, number)) {
      const { contacts } = this.state;
      console.log(contacts);
      alert(`${name} ${number} is already exist`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  isDublicate = (name, number) => {
    const { contacts } = this.state;
    console.log(contacts);
    const normalizedName = name.toLowerCase();
    const dublicate = contacts.find(item => {
      return (
        item.name.toLowerCase() === normalizedName &&
        item.number.toLowerCase() === number
      );
    });

    return Boolean(dublicate);
  };

  onFilterChange = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  filteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  onDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    return (
      <>
        <h1 style={{ padding: 20 }}>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2 style={{ padding: 20 }}>Contacts</h2>
        <Filter filter={this.state.filter} filterItem={this.onFilterChange} />
        <Contacts
          filteredContacts={this.filteredContacts}
          deleteItem={this.onDelete}
        />
      </>
    );
  }
}
