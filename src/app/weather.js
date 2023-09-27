import { useEffect,useState } from "react";

export default function Weather() {
  const [Airports, setAirports] = useState([]);
  const [Citys, setCitys] = useState([]);

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
  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await fetch(`http://localhost:3001/city`);

        const data = await response.json();
        const items = data || [];
        
        setCitys(items)
      } catch (error) {
        console.error(error);
      }
    };
    fetchCity();
  }, []);
  const airportCode = 'SVO';
  var cityCode = ''
  var cityName = ''

  Airports.map(airport => {
    if (airport.code === airportCode){
      console.log('Информация об аэропорте:', airport);
      cityCode = airport.city_code
    }
  })
  Citys.map(city => {
    if (city.code === cityCode){
      console.log('Информация о городе:', city);
      cityName = city.name 
    }
  })
  console.log(cityName)
  const WeatherSearch = async () => {

      let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=298fc3c7d1bfb15bbf5ca1b45c6e8395`;

      let response = await fetch(url);
      let data = await response.json();
      
      console.log(data);
  }
	WeatherSearch()  
}
