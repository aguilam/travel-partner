'use client'

export default function Home() {

  let api_key = "298fc3c7d1bfb15bbf5ca1b45c6e8395";

  const WeatherSearch = async () => {

      let url = 'https://api.openweathermap.org/data/2.5/forecast?q=Vologda&appid=298fc3c7d1bfb15bbf5ca1b45c6e8395';

      let response = await fetch(url);
      let data = await response.json();
      
      console.log(data);
  }
  return (
    <main>
      <input type="text" className="input"></input>
      <button type="submit" className="button" onClick={() => WeatherSearch()}></button>
    </main>
  )
}
