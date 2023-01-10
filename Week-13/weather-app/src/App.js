import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forcast";

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
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Container = styled.div`
  width: 50%;
  color: white;
  padding: 1rem 2rem;
`;

function App() {
  return (
    <Wrapper>
      <Container>
        <TopButtons />
        <Inputs />

        <TimeAndLocation />
        <TemperatureAndDetails />
        <Forecast title="Hourly Forcast" />
        <Forecast title="Daily Forcast" />
      </Container>
    </Wrapper>
  );
}

export default App;
