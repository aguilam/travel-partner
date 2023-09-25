import { useEffect,useState } from "react";

export default function Weather() {
  const [Airports, setAirports] = useState([]);
  useEffect(() => {
    const fetchAirport = async () => {
      try {
        const response = await fetch(`http://localhost:3001/airport`);

        const data = await response.json();
        const items = data || [];
        
        setAirports(items)
      } catch (error) {
        console.error(error);
      }
    };
    fetchAirport();
  }, []);
  console.log(Airports)
  let api_key = "298fc3c7d1bfb15bbf5ca1b45c6e8395";
  const WeatherSearch = async () => {

      let url = `https://api.openweathermap.org/data/2.5/forecast?q=Vologda&appid=${api_key}`;

      let response = await fetch(url);
      let data = await response.json();
      
      console.log(data);
  }
	WeatherSearch()  
}
