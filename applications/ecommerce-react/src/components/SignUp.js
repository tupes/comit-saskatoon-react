import React, { useState, useContext } from "react";
import { UserContext } from "./UserProvider";

export default function SignUp(props) {
  const { handleSubmitSignUp, error } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  return (
    <>
      <div></div>
      <div className="auth-form">
        <h2>Create an account</h2>
        <form action="">
          <p>
            <label>
              Email
              <input
                value={email}
                type="email"
                name="email"
                autoFocus
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
          </p>
          <p>
            <label>
              Password
              <input
                value={password1}
                type="password"
                name="password"
                required
                onChange={(event) => setPassword1(event.target.value)}
              />
            </label>
          </p>
          <p>
            <label>
              Confirm Password
              <input
                value={password2}
                type="password"
                name="password"
                required
                onChange={(event) => setPassword2(event.target.value)}
              />
            </label>
          </p>

          <p>
            <button
              onClick={(event) => handleSubmitSignUp(event, email, password1)}
              type="submit"
              disabled={!password1 || !password2 || password1 !== password2}
            >
              Submit
            </button>
          </p>

          {error && error.message}
        </form>
      </div>
    </>
  );
}
