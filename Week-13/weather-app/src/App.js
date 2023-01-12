import "./App.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forcast";
import getFormattedWeatherData from "./services/weatherService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
`;

const Container = styled.div`
  width: 50%;
  color: white;
  padding: 1rem 2rem;
`;

function App() {
  const [query, setQuery] = useState({ q: "dehradun" });
  const [aqi, setAqi] = useState({ aqi: "yes" });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({
        ...query,
        ...aqi,
      }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query]);

  return (
    <Wrapper>
      <Container>
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} />

        {weather && (
          <>
            <TimeAndLocation weather={weather} />
            <TemperatureAndDetails weather={weather} />
            <Forecast title="Hourly Forcast" items={weather.hourly} />
            <Forecast title="Daily Forcast" items={weather.forecast} />
          </>
        )}
      </Container>
      <ToastContainer autoClose={3000} theme="colored" newestOnTop={true} />
    </Wrapper>
  );
}

export default App;

