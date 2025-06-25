// src/reducers/notificationReducer.js
import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    clearNotification() {
      return null
    }
  }
})

export const { setNotification, clearNotification } = notificationSlice.actions

let timeoutId = null

export const setNotificationWithTimeout = (message, time) => {
  return dispatch => {
    dispatch(setNotification(message))
    
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    
    timeoutId = setTimeout(() => {
      dispatch(clearNotification())
    }, time * 1000)
  }
}

export default notificationSlice.reducer
