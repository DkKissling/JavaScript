import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Hook useField para gestionar el estado del input
const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

// Hook useCountry para obtener los datos del país
const useCountry = (name) => {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    if (name) {
      const fetchCountry = async () => {
        try {
          const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
          if (response.data && response.data.length > 0) {
            const countryData = response.data[0]
            setCountry({ found: true, data: countryData })
          } else {
            setCountry({ found: false })
          }
        } catch (error) {
          setCountry({ found: false })
        }
      }
      fetchCountry()
    }
  }, [name])

  return country
}

// Componente Country para mostrar los datos del país
const Country = ({ country }) => {
  if (!country) {
    return null
  }

  if (!country.found) {
    return (
      <div>
        not found...
      </div>
    )
  }

  return (
    <div>
      <h3>{country.data.name.common}</h3>
      <div>capital {country.data.capital[0]}</div>
      <div>population {country.data.population}</div>
      <img src={country.data.flags.svg} height='100' alt={`flag of ${country.data.name.common}`} />
    </div>
  )
}

// Componente principal App
const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const country = useCountry(name)

  const fetch = (e) => {
    e.preventDefault()
    setName(nameInput.value)
  }

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  )
}

export default App


