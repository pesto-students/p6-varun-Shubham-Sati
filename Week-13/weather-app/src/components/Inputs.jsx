import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px; 
  margin: 2rem 0 1rem 0;
  padding: 0 1rem;
`;


const Search = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  color: white;
  flex: 3;
  `;

const Input = styled.input`
  border: none;
  width: auto;
  background-color: transparent;
  outline: none;
  color: white;
  
  &:hover {
}
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Button = styled.div`
  padding: 5px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 14px;
`;



const Inputs = () => {
  return (
    <Wrapper>
      <Search>
        <Input placeholder="Search cities" />
        <SearchIcon />
      </Search>
      <LocationOnIcon />
      <Container>
        <Button>°C</Button>
        <p>|</p>
        <Button>°F</Button>
      </Container>
    </Wrapper>
  );
};

export default Inputs;
