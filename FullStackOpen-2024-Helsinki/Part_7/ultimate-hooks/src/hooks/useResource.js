import { useState, useEffect } from 'react'
import axios from 'axios'

const useResource = (baseUrl) => {
  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  let token = null

  const setToken = (newToken) => {
    token = `bearer ${newToken}`
  }

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get(baseUrl)
        setResources(response.data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchResources()
  }, [baseUrl])

  const create = async (resource) => {
    try {
      const config = {
        headers: { Authorization: token },
      }
      const response = await axios.post(baseUrl, resource, config)
      setResources(resources.concat(response.data))
      return response.data
    } catch (error) {
      setError(error)
    }
  }

  return { resources, create, loading, error, setToken }
}

export default useResource

