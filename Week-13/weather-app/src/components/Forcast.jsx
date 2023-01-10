import React from "react";
import styled from "styled-components";

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

const Forcast = ({ title }) => {
  return (
    <Wrapper>
      <Container>
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
        <Hr />
        <Details>
          <Detail>
            <Text style={{ fontSize: "10px" }}>4:30 PM</Text>
            <Img src="http://openweathermap.org/img/wn/01d@2x.png" />
            <Text style={{ fontSize: "10px" }}>22°</Text>
          </Detail>
          <Detail>
            <Text style={{ fontSize: "10px" }}>4:30 PM</Text>
            <Img src="http://openweathermap.org/img/wn/01d@2x.png" />
            <Text style={{ fontSize: "10px" }}>22°</Text>
          </Detail>
          <Detail>
            <Text style={{ fontSize: "10px" }}>4:30 PM</Text>
            <Img src="http://openweathermap.org/img/wn/01d@2x.png" />
            <Text style={{ fontSize: "10px" }}>22°</Text>
          </Detail>
          <Detail>
            <Text style={{ fontSize: "10px" }}>4:30 PM</Text>
            <Img src="http://openweathermap.org/img/wn/01d@2x.png" />
            <Text style={{ fontSize: "10px" }}>22°</Text>
          </Detail>
          <Detail>
            <Text style={{ fontSize: "10px" }}>4:30 PM</Text>
            <Img src="http://openweathermap.org/img/wn/01d@2x.png" />
            <Text style={{ fontSize: "10px" }}>22°</Text>
          </Detail>
        </Details>
      </Container>
    </Wrapper>
  );
};

export default Forcast;
