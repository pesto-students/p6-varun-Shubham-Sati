import React from "react";
import styled from "styled-components";
import { iconUrlFromCode } from "../services/weatherService";

const Wrapper = styled.div`
  padding: 0 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

const Text = styled.p`
  font-size: 14px;
`;
const Hr = styled.hr`
  width: 100%;
  border: 0.5px solid white;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  height: 55px;
`;

const Forcast = ({ title, items }) => {
  return (
    <Wrapper>
      <Container>
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
        <Hr />
        <Details>
          {items.map((item, idx) => {
            return (
              <Detail key={idx}>
                <Text style={{ fontSize: "10px" }}>{item.hour}</Text>
                <Img src={iconUrlFromCode(item.icon)} />
                <Text style={{ fontSize: "10px" }}>{item.temp}°</Text>
              </Detail>
            );
          })}

          {/* <Detail>
            <Text style={{ fontSize: "10px" }}>
              {title === "Hourly Forcast" ? "12:00 PM" : ""}
            </Text>
            <Img src="http://openweathermap.org/img/wn/01d@2x.png" />
            <Text style={{ fontSize: "10px" }}>22°</Text>
          </Detail> */}

          {/* <Detail>
            <Text style={{ fontSize: "10px" }}>
              {title === "Hourly Forcast" ? "1:00 PM" : ""}
            </Text>
            <Img src="http://openweathermap.org/img/wn/01d@2x.png" />
            <Text style={{ fontSize: "10px" }}>22°</Text>
          </Detail>
          <Detail>
            <Text style={{ fontSize: "10px" }}>
              {title === "Hourly Forcast" ? "2:00 PM" : ""}
            </Text>
            <Img src="http://openweathermap.org/img/wn/01d@2x.png" />
            <Text style={{ fontSize: "10px" }}>22°</Text>
          </Detail>
          <Detail>
            <Text style={{ fontSize: "10px" }}>
              {title === "Hourly Forcast" ? "3:00 PM" : ""}
            </Text>
            <Img src="http://openweathermap.org/img/wn/01d@2x.png" />
            <Text style={{ fontSize: "10px" }}>22°</Text>
          </Detail>
          <Detail>
            <Text style={{ fontSize: "10px" }}>
              {title === "Hourly Forcast" ? "4:00 PM" : ""}
            </Text>
            <Img src="http://openweathermap.org/img/wn/01d@2x.png" />
            <Text style={{ fontSize: "10px" }}>22°</Text>
          </Detail> */}
        </Details>
      </Container>
    </Wrapper>
  );
};

export default Forcast;
