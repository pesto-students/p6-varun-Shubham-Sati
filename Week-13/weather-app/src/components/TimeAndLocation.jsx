import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* padding: 0 1rem; */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  margin-bottom: 5px;
  font-size: larger;
  font-weight: bold;
`;

const TimeAndLocation = ({ weather }) => {
  return (
    <Wrapper>
      <Container>
        <p>
          {/* Tuesday, 10 January 2023 | Local time: 10:50 AM */}
          {weather.localtime}
          {
            
          }
          <Text>{`${weather.name}, ${weather.country}`}</Text>
        </p>
      </Container>
    </Wrapper>
  );
};

export default TimeAndLocation;
