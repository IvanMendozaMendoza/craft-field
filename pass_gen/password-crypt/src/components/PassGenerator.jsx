import { styled } from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;

const Highlighted = styled.span`
  background-color: #6cdadaba;
  padding: 4px;
  border-radius: 4px;
  color: #075b4d;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: #4a9;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #378;
  }
`;

export default function PassGenerator() {
  const [password, setPassword] = useState("");

  const fetchPassword = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000");
      const pass = await response.text();
      setPassword(pass);
    } catch (err) {
      setPassword(`${err.message} upse!`);
    }
  };

  useEffect(() => {
    fetchPassword();
  }, []);

  return (
    <Container>
      <Button onClick={fetchPassword}>Generate Password</Button>
      <Highlighted>{password}</Highlighted>
    </Container>
  );
}