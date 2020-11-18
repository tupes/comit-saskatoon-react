import React, { useState, useContext } from "react";
import { UserContext } from "./UserProvider";

export default function Login(props) {
  const { handleSubmitLogin, error } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div></div>
      <div className="auth-form">
        <h2>Login to your account</h2>
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
                value={password}
                type="password"
                name="password"
                required
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
          </p>

          <p>
            <button
              onClick={(event) => handleSubmitLogin(event, email, password)}
              type="submit"
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
