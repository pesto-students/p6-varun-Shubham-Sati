import styled from "styled-components";
import Auth from "../components/Auth";
import Counter from "../components/Counter";

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const HomePage = () => {
  return (
    <Wrapper>
      <Counter />
      <Auth />
    </Wrapper>
  );
};

export default HomePage;
