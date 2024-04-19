"use client"

import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'

const Context = createContext()

export const MainContext = ({children}) => {

    const [value, setValue] = useState('')
    const [cityData, setCityData] = useState({})
    const [loading, setLoading] = useState(false)
  
    const KEY = 'ecaed94cf9c9ec88fffebfd48e38ce49'
    const APIURL = `http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${KEY}`
  
    const handleSubmit = (e) => {
      e.preventDefault()
      setLoading(true)
      axios.get(APIURL).then((res) => {
        setCityData(res.data)
        console.log(res.data)
      })
      setValue('')
      setLoading(false)
  
      console.log(e.target.value)
  
    }
  
    const kelvinToCelsius = (k) => {
      return (k - 272.15).toFixed(0)
    }

  return (
    <Context.Provider value={{
        handleSubmit, kelvinToCelsius,
        value, setValue, cityData, setCityData, loading, setLoading
    }}>
        {children}
    </Context.Provider>
  )
}

export const UseMainContext = () => {
  return (useContext(Context))
}