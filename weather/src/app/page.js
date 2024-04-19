"use client" 
import Image from "next/image";
import styles from "./page.module.scss";
import { UseMainContext } from "../../Context/MainContext";

export default function Home() {

 const { handleSubmit, kelvinToCelsius, cityData, value, setValue } = UseMainContext()

  
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
          <p>{cityData.name}</p>
          <Image
            src={`http://openweathermap.org/img/w/${cityData.weather[0].icon}.png`}
            alt="weather status icon"
            className="weather-icon"
            width={50}
            height={50}
          />
          <p>{kelvinToCelsius(cityData.main.temp)}°C</p>
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
