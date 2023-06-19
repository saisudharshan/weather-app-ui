import axios from "axios";
import { useState } from "react";
export interface cordd {
lon: string;
lat: string
}
export interface LayoutProps {
  handleCordd: Function;
}
const Header = (props: LayoutProps) => {
  const [city, setCity] = useState("");

  const handleChange = (e: any) => {
    setCity(e.target.value);
  };
  const fetchCity = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=886705b4c1182eb1c69f28eb8c520e20`
      )
      .then((res) => {
        if(res.data && res.data.coord) {
        props.handleCordd(res.data.coord)
        }
      });
  };
  const handleClick = () => {
    fetchCity();
  };

  return (
    <>
      <div style={{ margin: 10 }}>
        <h2>Weather in your City</h2>
      </div>
      <div style={{ margin: "2%" }}>
        <input
          style={{ lineHeight: "40px" }}
          placeholder="City..."
          onChange={handleChange}
          value={city}
        />
        <button style={{ lineHeight: "30px" }} onClick={handleClick}>
          Search
        </button>
      </div>
    </>
  );
};
export default Header;
