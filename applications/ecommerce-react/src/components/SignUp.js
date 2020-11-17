import React, { useState } from "react";

export default function SignUp(props) {
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
                autofocus
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
                autofocus
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
                autofocus
                required
                onChange={(event) => setPassword2(event.target.value)}
              />
            </label>
          </p>

          <p>
            <button
              onClick={(event) => props.handleSubmit(event, email, password1)}
              type="submit"
              disabled={!password1 || !password2 || password1 !== password2}
            >
              Submit
            </button>
          </p>

          {props.error && props.error.message}
        </form>
      </div>
    </>
  );
}
