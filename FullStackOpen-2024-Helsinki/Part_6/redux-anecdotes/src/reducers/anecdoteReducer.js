import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../service/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    setAnecdotes(state, action) {
      return action.payload
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    updateAnecdote(state, action) {
      const updatedAnecdote = action.payload
      return state.map(anecdote => 
        anecdote.id !== updatedAnecdote.id ? anecdote : updatedAnecdote
      )
    }
  }
})

export const { setAnecdotes, appendAnecdote, updateAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnecdote = id => {
  return async (dispatch, getState) => {
    const anecdoteToChange = getState().anecdotes.find(n => n.id === id)
    const changedAnecdote = { 
      ...anecdoteToChange, 
      votes: anecdoteToChange.votes + 1
    }
    const updatedAnecdote = await anecdoteService.update(id, changedAnecdote)
    dispatch(updateAnecdote(updatedAnecdote))
  }
}

export default anecdoteSlice.reducer
