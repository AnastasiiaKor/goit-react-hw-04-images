import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactsList';
import { Wrapper } from './App.styled';
import Modal from 'components/Modal';
import { Button } from '../ContactForm/ContactForm.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
    if (
      this.state.contacts.length > prevState.contacts.length &&
      prevState.contacts.length
    ) {
      this.toggleModal();
    }
  }

  componentDidMount() {
    if (
      localStorage.getItem('contacts') &&
      JSON.parse(localStorage.getItem('contacts')).length
    ) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts')),
      });
    }
  }
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  filterChangeHandler = event => {
    this.setState({ filter: event.target.value });
  };

  formSubmitHandler = data => {
    if (this.state.contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is alreary in contacts`);
    } else {
      const newContact = { ...data };
      newContact.id = nanoid();
      this.setState(prevState => {
        return { contacts: [...prevState.contacts, newContact] };
      });
    
    }
  };
  deleteContactHandler = event => {
    const id = event.target.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const lowerCaseFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCaseFilter)
    );

    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <Button type="submit" onClick={this.toggleModal}>
          Add Contact
        </Button>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <ContactForm onSubmit={this.formSubmitHandler} />
          </Modal>
        )}

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.filterChangeHandler} />
        <ContactList
          contacts={filteredContacts}
          onClick={this.deleteContactHandler}
        />
      </Wrapper>
    );
  }
}
export default App;
