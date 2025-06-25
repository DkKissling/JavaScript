// src/App.jsx

import React from 'react'
import { useField } from './hooks'
import useResource from './hooks/useResource'

const App = () => {
  const content = useField('text')
  const name = useField('text')
  const number = useField('text')

  const { resources: notes, create: createNote, loading: notesLoading, error: notesError } = useResource('http://localhost:3005/notes')
  const { resources: persons, create: createPerson, loading: personsLoading, error: personsError } = useResource('http://localhost:3005/persons')

  const handleNoteSubmit = (event) => {
    event.preventDefault()
    createNote({
      content: content.value
    })
  }

  const handlePersonSubmit = (event) => {
    event.preventDefault()
    createPerson({
      name: name.value,
      number: number.value
    })
  }

  return (
    <div>
      <h2>notes</h2>
      <form onSubmit={handleNoteSubmit}>
        <input {...content} />
        <button>create</button>
      </form>
      {notesLoading && <p>Loading notes...</p>}
      {notesError && <p>Error loading notes: {notesError.message}</p>}
      {notes.map(n => <p key={n.id}>{n.content}</p>)}

      <h2>persons</h2>
      <form onSubmit={handlePersonSubmit}>
        name <input {...name} /> <br />
        number <input {...number} />
        <button>create</button>
      </form>
      {personsLoading && <p>Loading persons...</p>}
      {personsError && <p>Error loading persons: {personsError.message}</p>}
      {persons.map(n => <p key={n.id}>{n.name} {n.number}</p>)}
    </div>
  )
}

export default App
