import styled from "styled-components";
import GlobalSyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: red;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalSyles />
      <StyledApp>
        <Heading as="h1">Inn Sight</Heading>
        <Heading as="h2">Check In and Out</Heading>
        <Button onClick={() => alert("check in")}>Check In</Button>
        <Button onClick={() => alert("check out")}>Check Out</Button>
        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="Number of guess" />
      </StyledApp>
    </>
  );
}

export default App;
