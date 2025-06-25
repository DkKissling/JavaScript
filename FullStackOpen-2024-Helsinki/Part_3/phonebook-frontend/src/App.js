import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

axios.defaults.baseURL = 'https://phonebook-backend-fragrant-paper-2482.fly.dev/';

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState('');
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchPersons();
    }, []);

    const fetchPersons = () => {
        axios.get('/api/persons')
            .then(response => {
                console.log('Datos completos de la base de datos:', JSON.stringify(response.data, null, 2));
                setPersons(response.data);
            })
            .catch(error => {
                console.error('Error fetching persons:', error);
                showMessage('Error fetching contacts', 'error');
            });
    };
    const addPerson = (event) => {
        event.preventDefault();
        const personObject = {
            name: newName,
            number: newNumber
        };

        if (editingId) {
            axios.put(`/api/persons/${editingId}`, personObject)
                .then(response => {
                    setPersons(persons.map(person => person.id === editingId ? response.data : person));
                    setNewName('');
                    setNewNumber('');
                    setEditingId(null);
                    showMessage('Contact updated successfully', 'success');
                })
                .catch(error => {
                    showMessage(error.response.data.error, 'error');
                });
        } else {
            axios.post('/api/persons', personObject)
                .then(response => {
                    setPersons(persons.concat(response.data));
                    setNewName('');
                    setNewNumber('');
                    showMessage('Contact added successfully', 'success');
                })
                .catch(error => {
                    showMessage(error.response.data.error, 'error');
                });
        }
    };

    const deletePerson = (id) => {
      console.log('ID recibido en deletePerson:', id);
      if (window.confirm('Are you sure you want to delete this contact?')) {
          if (!id) {
              console.error('Invalid id:', id);
              showMessage('Error: Invalid contact id', 'error');
              return;
          }
          axios.delete(`/api/persons/${id}`)
              .then((response) => {
                  console.log('Respuesta de delete:', response);
                  setPersons(persons.filter(person => (person.id || person._id) !== id));
                  showMessage('Contact deleted successfully', 'success');
              })
              .catch(error => {
                  console.error('Error deleting contact:', error.response || error);
                  showMessage('Error deleting contact', 'error');
              });
      }
  };

    const editPerson = (person) => {
        setNewName(person.name);
        setNewNumber(person.number);
        setEditingId(person.id);
    };

    const showMessage = (text, type) => {
        setMessage(text);
        setMessageType(type);
        setTimeout(() => {
            setMessage(null);
            setMessageType('');
        }, 5000);
    };

    const filteredPersons = persons.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2>Phonebook</h2>
            {message && <div className={`message ${messageType}`}>{message}</div>}
            <div>
                search: <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
                </div>
                <button type="submit">{editingId ? 'Update' : 'Add'}</button>
            </form>
            <h2>Numbers</h2>
            <ul>
            {filteredPersons.map(person => (
              <li key={person.id || person._id}>
                  {person.name} {person.number}
                  <button onClick={() => editPerson(person)}>Edit</button>
                  <button onClick={() => {
                      console.log('Persona a eliminar:', JSON.stringify(person, null, 2));
                      deletePerson(person.id || person._id);
                  }}>Delete</button>
              </li>
              ))}
            </ul>
        </div>
    );
};

export default App;

