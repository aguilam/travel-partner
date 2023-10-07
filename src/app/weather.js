import { useEffect, useState } from "react";

export default function Weather({ returnDate }) {
  const [Airports, setAirports] = useState([]);
  const [Citys, setCitys] = useState([]);
  const [cityCode, setCityCode] = useState('');
  const [cityName, setCityName] = useState('');
  const [WeatherData, setWeatherData] = useState([]);
  const [airportCode, setAirportCode] = useState('VKO');
  const returnDateFull = returnDate.substring(0, 10);

  const WeatherSearch = async (cityName) => {
    try {
      let url = `http://api.weatherapi.com/v1/forecast.json?key=42348fe5bbe7430991c150528230710&q=${cityName}&date=${returnDateFull}`;
      let response = await fetch(url);
      let data = await response.json();

      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchAirport = async () => {
      try {
        const response = await fetch(`http://localhost:3001/airport`);
        const data = await response.json();
        const items = data || [];
        setAirports(items);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchCity = async () => {
      try {
        const response = await fetch(`http://localhost:3001/city`);
        const data = await response.json();
        const items = data || [];
        setCitys(items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAirport();
    fetchCity();
  }, []);

  useEffect(() => {
    Airports.map(airport => {
      if (airport.code === airportCode) {
        console.log('Информация об аэропорте:', airport);
        setCityCode(airport.city_code)
      }
    });
  }, [Airports, airportCode]);

  useEffect(() => {
    Citys.map(city => {
      if (city.code === cityCode) {
        console.log('Информация о городе:', city);
        setCityName(city.name)
      }
    });
  }, [Citys, cityCode]);

  useEffect(() => {
    if (cityName) {
      WeatherSearch(cityName);
    }
  }, [cityName]);

  console.log(WeatherData);
  return (
    <div>
      {WeatherData.location && (
        <>
          <p>Current Weather: {WeatherData.current.condition.text}</p>
          <img src={WeatherData.current.condition.icon} alt="" />
          <p>temp_c: {WeatherData.current.temp_c}</p>
          <p>feelslike_c: {WeatherData.current.feelslike_c}</p>
          <p>wind_mph: {WeatherData.current.wind_mph}</p>
          <p>wind_dir: {WeatherData.current.WSW}</p>
          <p>cloud: {WeatherData.current.cloud}</p>
          <p>pressure_mb: {WeatherData.current.pressure_mb}</p>
          <p>pressure_in: {WeatherData.current.pressure_in}</p>
          <p>humidity: {WeatherData.current.humidity}</p>
          <p>gust_mph: {WeatherData.current.gust_mph}</p>
        </>
      )}
    </div>
  );
  
}




