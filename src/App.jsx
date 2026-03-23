import styled from "styled-components";
import GlobalSyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;
const StyledApp = styled.div`
  background-color: red;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalSyles />
      <StyledApp>
        <H1>Inn Sight</H1>
        <Button onClick={() => alert("check in")}>Check In</Button>
        <Button onClick={() => alert("check out")}>Check Out</Button>
        <Input type="number" placeholder="Number of guess" />
      </StyledApp>
    </>
  );
}

export default App;
