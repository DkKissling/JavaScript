import React, { useState, useEffect } from 'react';
import personsService from './Service/persons'; // Importa el servicio de personas
import Notification from './Notification'; // Importa el componente Notification
import './style.css';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setErrorMessage('Error fetching data');
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });
  }, []);

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const addPerson = event => {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber };

    const existingPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());
    if (existingPerson) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personsService
          .update(existingPerson.id, newPerson)
          .then(updatedPerson => {
            setPersons(persons.map(person => (person.id !== updatedPerson.id ? person : updatedPerson)));
            setNewName('');
            setNewNumber('');
            setSuccessMessage(`Updated ${updatedPerson.name}`);
            setTimeout(() => {
              setSuccessMessage(null);
            }, 5000);
          })
          .catch(error => {
            console.error('Error updating person:', error);
            setErrorMessage('Error updating person');
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
          });
      }
    } else {
      personsService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
          setNewName('');
          setNewNumber('');
          setSuccessMessage(`Added ${returnedPerson.name}`);
          setTimeout(() => {
            setSuccessMessage(null);
          }, 5000);
        })
        .catch(error => {
          console.error('Error creating person:', error);
          setErrorMessage('Error creating person');
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        });
    }
  };

  const deletePerson = id => {
    const personToDelete = persons.find(person => person.id === id);
    if (window.confirm(`Delete ${personToDelete.name} ?`)) {
      personsService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
          setSuccessMessage(`Deleted ${personToDelete.name}`);
          setTimeout(() => {
            setSuccessMessage(null);
          }, 5000);
        })
        .catch(error => {
          console.error('Error deleting person:', error);
          setErrorMessage('Error deleting person');
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        });
    }
  };

  const personsToShow = filter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} type="error" />
      <Notification message={successMessage} type="success" />
      <Filter value={filter} onChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm
        onSubmit={addPerson}
        nameValue={newName}
        onNameChange={handleNameChange}
        numberValue={newNumber}
        onNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} onDelete={deletePerson} />
    </div>
  );
};

const Filter = ({ value, onChange }) => (
  <div>
    Filter shown with <input value={value} onChange={onChange} />
  </div>
);

const PersonForm = ({ onSubmit, nameValue, onNameChange, numberValue, onNumberChange }) => (
  <form onSubmit={onSubmit}>
    <div>
      name: <input value={nameValue} onChange={onNameChange} />
    </div>
    <div>
      number: <input value={numberValue} onChange={onNumberChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);

const Persons = ({ persons, onDelete }) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Number</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {persons.map(person => (
          <tr key={person.id}>
            <td>{person.name}</td>
            <td>{person.number}</td>
            <td><button onClick={() => onDelete(person.id)}>delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default App;
