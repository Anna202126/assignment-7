import { Link } from "react-router-dom";
import styled from "styled-components";

export const InputGroup = styled.div`
  margin: 20px 0;
`;

export const Label = styled.label`
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 18px;
  padding: 10px;
  border-bottom: 2px solid gray;
  transition: 0.1s;

  &:focus {
    border-bottom: 2px solid orange;
  }
`;

export const ErrorMessage = styled.small`
  color: red;
`;

export const Button = styled.button`
  border: none;
  background-color: darkorange;
  font-size: 18px;
  font-weight: bold;
  border-radius: 20px;
  color: white;
  padding: 10px 50px;
  cursor: pointer;
  width: ${(props) => props.fullWidth && "100%"};
`;

export const StyledLink = styled(Link)`
  margin: 0 10px;
`;

export const Form = styled.form`
  width: 400px;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;
