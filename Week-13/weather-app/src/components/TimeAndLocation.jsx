import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 1rem 0; */
`;

const TimeAndLocation = () => {
  return (
    <Wrapper>
      <Container>
        <p>Tuesday, 10 January 2023 | Local time: 10:50 AM</p>
      </Container>
      <Container>
        <p>Berlin, DE</p>
      </Container>
    </Wrapper>
  );
};

export default TimeAndLocation;
