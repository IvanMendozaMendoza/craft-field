import {styled} from "styled-components";
import PassGenerator from "./PassGenerator";

const Header =  styled.h1`
  font-size: 2em;
  color: #333;
  text-align: center;
  margin-top: 20px;
`

const Section = styled.section`
  width: 100vw;
  padding-block: 4rem;
  background-color: aliceblue;

`
export default function App() {
  return (
    <>
    <Header>The password Crypt</Header>
    <Section>
      <PassGenerator/>
    </Section>
    </>
  )
}
