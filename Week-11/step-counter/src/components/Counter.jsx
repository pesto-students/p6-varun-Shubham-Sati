import React, { useState } from "react";
import styled from "styled-components";
import {
  increment,
  decrement,
  inc5,
  dec5,
  reset,
} from "../Redux/Actions/index";
import { useSelector, useDispatch } from "react-redux";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  width: 20em;
  border: 1px solid lightcyan;
  border-radius: 4px;
  margin-top: 3rem;
`;
const Text = styled.h3``;
const Container = styled.div`
  gap: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  width: 100%;
  height: 2rem;
  font-weight: bold;
  font-size: 13px;
  background-color: #e831e8;
  color: white;
  border: 1px solid black;
  border-radius: 3px;
`;
const Reset = styled.button`
  width: 100%;
  height: 2rem;
  font-weight: bold;
  font-size: 15px;
  background-color: #aba6a6;
  border: 1px solid black;
  border-radius: 3px;
  color: white;
`;

const Counter = () => {
  const steps = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Text>You have walked {steps} Steps today!</Text>
      <Container>
        <Container>
          <Button onClick={() => dispatch(increment())}>Add a Step</Button>
          <Button onClick={() => dispatch(inc5(5))}> Add 5 Steps</Button>
        </Container>
        <Container>
          <Button onClick={() => dispatch(decrement())}>Subtract a Step</Button>
          <Button onClick={() => dispatch(dec5(5))}> Subtract 5 Steps</Button>
        </Container>
        <Reset onClick={() => dispatch(reset())}>Reset Step</Reset>
      </Container>
    </Wrapper>
  );
};

export default Counter;
