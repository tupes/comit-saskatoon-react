import React, { useState } from "react";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div></div>
      <div>
        <h2>Login to your account</h2>
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
                value={password}
                type="password"
                name="password"
                autofocus
                required
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
          </p>

          <p>
            <button
              onClick={(event) =>
                props.handleSubmit(event, { email, password })
              }
              type="submit"
            >
              Submit
            </button>
          </p>
        </form>
      </div>
    </>
  );
}
