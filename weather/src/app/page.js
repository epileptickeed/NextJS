"use client"
import Image from "next/image";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {

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

  
  return (
    <main className={styles.main}>
      <h1>Weather</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="search for a city" className={styles.search} 
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </form>
      

      {cityData.main ? (
        <div>
          <img
            src={`http://openweathermap.org/img/w/${cityData.weather[0].icon}.png`}
            alt="weather status icon"
            className="weather-icon"
          />
          <p>{cityData.main.temp}</p>
          <p>{cityData.name}</p>
        </div>
        
      ) : (
        <h1>Loading</h1>
      ) 
      }

      {/* https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key} */}
      {/* ecaed94cf9c9ec88fffebfd48e38ce49 */}
    </main>
  );
}
