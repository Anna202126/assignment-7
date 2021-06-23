import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Form,
  Input,
  Label,
  InputGroup,
  Button,
  ErrorMessage,
} from "../styles";
import { useRecoilState } from "recoil";
import { todosState } from "../state/todos-state";
import { loginSchema } from "../utils/validation-schemas";
import { userState, tokenState } from "../state/user-state";

const defaultValues = {
  usernameOrEmail: "",
  password: "",
};

const Login = () => {
  const history = useHistory();
  const [_, setUser] = useRecoilState(userState);
  const [__, setToken] = useRecoilState(tokenState);
  const [___, setTodos] = useRecoilState(todosState);
  const [err, setErr] = useState({ found: false, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues,
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (values) => {
    try {
      const res = await axios.post("/auth/login", values);
      setUser(res.data.user);
      setToken(res.data.token);

      // fetch todos by user
      const todos = await axios.get("/todos");
      setTodos(todos.data.todos);

      history.push("/");
    } catch (error) {
      setErr({ found: true, message: error.response.data.message });
    }
  };

  return (
    <StyledLogin>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {err.found && <p>{err.message}</p>}
        <InputGroup>
          <Label>Email or Username</Label>
          <Input {...register("usernameOrEmail")} />
          {errors.usernameOrEmail && (
            <ErrorMessage>{errors.usernameOrEmail.message}</ErrorMessage>
          )}
        </InputGroup>
        <InputGroup>
          <Label>Password</Label>
          <Input type="password" {...register("password")} />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </InputGroup>
        <Button type="submit" fullWidth>
          Login
        </Button>
      </Form>
    </StyledLogin>
  );
};

const StyledLogin = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Login;
