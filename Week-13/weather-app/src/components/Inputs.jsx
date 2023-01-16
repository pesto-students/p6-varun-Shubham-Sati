import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { NavigateBefore } from "@mui/icons-material";
import { toast } from "react-toastify";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 1.5rem 0 1rem 0;
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
  width: 100%;
  border: none;
  background-color: transparent;
  /* background-color: white; */
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

const Box = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Inputs = ({ setQuery }) => {
  const [input, setInput] = useState();

  const handleClick = () => {
    if (input === "") return;

    setQuery({ q: input });
  };

  const handleLocationClick = () => {
    toast.info("Fetching user's location..........");
    if (navigator.geolocation) {
      var location_timeout = setTimeout("geolocFail()", 10000);

      navigator.geolocation.getCurrentPosition(
        function (position) {
          let lat = position.coords.latitude;
          let log = position.coords.longitude;
          toast.success("Location Fetched" + lat + log);
          console.log(lat, log);

          setQuery({
            q: [lat, log],
          });
        },
        function (error) {
          clearTimeout(location_timeout);
          geolocFail(error);
        },
        { maximumAge: 60000, enableHighAccuracy: true }
      );
    } else {
      geolocFail("else part");
    }

    function geolocFail(error) {
      toast.error("Something went wrong.");
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <Search>
        <Input
          placeholder="Search cities"
          onChange={(e) => setInput(e.target.value)}
        />
        <Box>
          <SearchIcon onClick={handleClick} />
        </Box>
      </Search>
      <Box>
        <LocationOnIcon onClick={handleLocationClick} />
      </Box>
      <Container>
        <Button>°C</Button>
        <p>|</p>
        <Button>°F</Button>
      </Container>
    </Wrapper>
  );
};

export default Inputs;
