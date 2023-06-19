import axios from "axios";
import { useEffect, useState } from "react";
import Header, { cordd } from "./components/Header";
import WeatherTable from "./components/WeatherTable";

const WeatherPage = () => {
    const [cordd, setCor] = useState<cordd | undefined>(undefined);
  const [weatherReports, setWeatherRepo] = useState([]);
  const fetchWeatherData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${cordd?.lat}&lon=${cordd?.lon}&appid=886705b4c1182eb1c69f28eb8c520e20`
      )
      .then((res) => {
        setWeatherRepo(res.data.list);
      });
  };
  useEffect(() => {
    if (cordd !== undefined) {
      fetchWeatherData();
    }
  }, [cordd]);
  return (
    <div>
      {" "}
      <header className="App-header">
        <Header handleCordd={setCor} />
      </header>
      <div>
        {weatherReports && weatherReports.length > 0 && (
          <WeatherTable data={weatherReports} />
        )}
      </div>
    </div>
  );
};
export default WeatherPage;