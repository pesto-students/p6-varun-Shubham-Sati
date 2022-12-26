import './App.css';
import styled from "styled-components";
import HomePage from './pages/HomePage';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
        <HomePage />
    </Wrapper>
  );
}

export default App;
