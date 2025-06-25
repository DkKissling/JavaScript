import React from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, createAnecdote, updateAnecdote } from './services/anecdotes'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useNotification } from './NotificationContext'

const App = () => {
  const queryClient = useQueryClient()
  const [notification, dispatch] = useNotification()

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: false
  })

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (newAnecdote) => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
      dispatch({ type: 'SET', payload: `Added '${newAnecdote.content}'` })
      setTimeout(() => dispatch({ type: 'CLEAR' }), 5000)
    },
    onError: () => {
      dispatch({ type: 'SET', payload: 'too short anecdote, must have length 5 or more' })
      setTimeout(() => dispatch({ type: 'CLEAR' }), 5000)
    }
  })

  const updateAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: (updatedAnecdote) => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
      dispatch({ type: 'SET', payload: `Voted for '${updatedAnecdote.content}'` })
      setTimeout(() => dispatch({ type: 'CLEAR' }), 5000)
    }
  })

  if (result.isLoading) {
    return <div>Loading...</div>
  }

  if (result.isError) {
    return <div>Anecdote service not available due to problems in server</div>
  }

  const anecdotes = result.data

  const handleVote = (anecdote) => {
    updateAnecdoteMutation.mutate({...anecdote, votes: anecdote.votes + 1})
  }

  return (
    <div>
      <h3>Anecdote app</h3>
      <Notification />
      <AnecdoteForm newAnecdoteMutation={newAnecdoteMutation} />
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App