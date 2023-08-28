import { nanoid } from 'nanoid';
import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Container from './Conteiner/Conteiner';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  formSabmitHendler = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const { contacts } = this.state;

     if ( contacts?.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} is already in contacts.`);
    } else if ( contacts?.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    } else if (contacts !==null) {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }else{
      this.setState(({ contacts }) => ({
        contacts: [contact],
      }))}
  };

  ChangeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  Delite = todoId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(cont => cont.id !== todoId),
    }));
  };
  componentDidMount () {
    if(this.state.contacts !== []){
      this.setState({
        contacts: JSON.parse( localStorage.getItem('contacts'))
      })
    } 
  
  }
  componentDidUpdate (prevProps, prevState){
  if(this.state.contacts){
    localStorage.setItem('contacts',JSON.stringify(this.state.contacts))
  }
  }

  render() {
    const { contacts, filter } = this.state;
    const NomrmalizeFilter = filter.toLowerCase();
    const VilibleTodos = contacts?.filter(cont =>
      cont.name.toLowerCase().includes(NomrmalizeFilter)
    );
    return (
      <>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.formSabmitHendler} />
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.ChangeFilter} />
          <ContactList contacts={VilibleTodos} OnDelite={this.Delite} />
        </Container>
      </>
    );
  }
}

export default App;