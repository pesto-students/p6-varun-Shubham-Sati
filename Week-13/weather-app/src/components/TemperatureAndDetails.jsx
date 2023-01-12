import React from "react";
import styled from "styled-components";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import AirIcon from "@mui/icons-material/Air";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { iconUrlFromCode } from "../services/weatherService";

const Wrapper = styled.div`
  margin-top: 1rem;
  /* margin-bottom: 1rem; */
  padding: 0 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
const Text = styled.p`
  margin: 0;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 55px;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TemperatureAndDetails = ({ weather }) => {
  return (
    <Wrapper>
      <Container>
        <Text>{weather.text}</Text>
        <Details>
          <Img src={iconUrlFromCode(weather.icon)} />
          <Text style={{ fontSize: "24px" }}>{weather.temp_c}°C</Text>
          <Container style={{ lineHeight: "3px" }}>
            <InnerContainer>
              <DeviceThermostatIcon style={{ fontSize: "24px" }} />
              <Text style={{ fontSize: "12px" }}>Real Feal:</Text>
              <Text style={{ fontSize: "12px", fontWeight: "bold" }}>
                {weather.feelslike_c}°C
              </Text>
            </InnerContainer>
            <InnerContainer>
              <AcUnitIcon style={{ fontSize: "24px" }} />
              <Text style={{ fontSize: "12px" }}>Humidity:</Text>
              <Text style={{ fontSize: "12px", fontWeight: "bold" }}>
                {weather.humidity}%
              </Text>
            </InnerContainer>
            <InnerContainer>
              <AirIcon style={{ fontSize: "24px" }} />
              <Text style={{ fontSize: "12px" }}>Wind:</Text>
              <Text style={{ fontSize: "12px", fontWeight: "bold" }}>
                {weather.wind_kph}kph
              </Text>
            </InnerContainer>
          </Container>
        </Details>

        <Details style={{ marginTop: "10px" }}>
          <InnerContainer>
            <WbSunnyIcon style={{ fontSize: "16px" }} />
            <Text style={{ fontSize: "14px" }}>Rise:</Text>
            <Text style={{ fontSize: "14px", fontWeight: "bold" }}>
              {weather.sunrise}
            </Text>
          </InnerContainer>
          <Text>|</Text>
          <InnerContainer>
            <WbTwilightIcon style={{ fontSize: "16px" }} />
            <Text style={{ fontSize: "14px" }}>Sunset:</Text>
            <Text style={{ fontSize: "14px", fontWeight: "bold" }}>
              {weather.sunset}
            </Text>
          </InnerContainer>
          <Text>|</Text>
          <InnerContainer>
            <WbSunnyIcon style={{ fontSize: "16px" }} />
            <Text style={{ fontSize: "14px" }}>High:</Text>
            <Text style={{ fontSize: "14px", fontWeight: "bold" }}>
              {weather.high}°
            </Text>
          </InnerContainer>
          <Text>|</Text>
          <InnerContainer>
            <WbSunnyIcon style={{ fontSize: "16px" }} />
            <Text style={{ fontSize: "14px" }}>Low:</Text>
            <Text style={{ fontSize: "14px", fontWeight: "bold" }}>
              {weather.low}°
            </Text>
          </InnerContainer>
        </Details>
      </Container>
    </Wrapper>
  );
};

export default TemperatureAndDetails;
