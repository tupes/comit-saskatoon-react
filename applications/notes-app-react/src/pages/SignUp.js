import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import { AccountContext } from "../contexts/AccountProvider";

const Wrapper = styled.div`
  border: 1px solid #f5f4f0;
  max-width: 500px;
  padding: 1em;
  margin: 0 auto;
`;

const Form = styled.form`
  label,
  input {
    display: block;
    line-height: 2em;
  }
  input {
    width: 100%;
    margin-bottom: 1em;
  }
`;

export default function SignUp() {
  useEffect(() => {
    document.title = "Sign Up";
  }, []);

  const { handleSubmitSignUp, error } = useContext(AccountContext);

  const [values, setValues] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Wrapper>
      <h2>Sign Up</h2>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmitSignUp(values);
        }}
      >
        <label htmlFor="username">Username:</label>
        <input
          autoFocus
          required
          type="text"
          id="username"
          name="username"
          placeholder="username"
          value={values.username}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
        <label htmlFor="age">Age:</label>
        <input
          required
          type="number"
          id="age"
          name="age"
          placeholder="Age"
          value={values.age}
          onChange={handleChange}
        />
        <label htmlFor="location">Location:</label>
        <input
          required
          type="text"
          id="location"
          name="location"
          placeholder="Location"
          value={values.location}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          required
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
      {error && error.message}
    </Wrapper>
  );
}
