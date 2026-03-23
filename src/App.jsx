import styled from "styled-components";
import GlobalSyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalSyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">Inn Sight</Heading>
            <div>
              <Heading as="h2">Check In and Out</Heading>
              <Button onClick={() => alert("check in")}>Check In</Button>
              <Button onClick={() => alert("check out")}>Check Out</Button>
            </div>
          </Row>
          <Row>
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="Number of guess" />
              <Input type="number" placeholder="Number of guess" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
