import styled from "styled-components";
import { logIn, logOut } from "../Redux/Actions/index";
import { useSelector, useDispatch } from "react-redux";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  width: 20em;
  margin-top: 3rem;
  border: 1px solid lightcyan;
  border-radius: 4px;
`;
const Text = styled.div``;
const LogIn = styled.h3``;
const LogOut = styled.h3``;

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

const Auth = () => {
  const user = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Text>
        {user ? (
          <LogIn>
            User Logged In <br></br> click below to LogOut
          </LogIn>
        ) : (
          <LogOut>
            User Logged Out <br></br> click below to LogIn
          </LogOut>
        )}
      </Text>
      <Container>
        {user ? (
          <Button onClick={() => dispatch(logOut())}>Log Out</Button>
        ) : (
          <Button onClick={() => dispatch(logIn())}>LogIn</Button>
        )}
      </Container>
    </Wrapper>
  );
};

export default Auth;
