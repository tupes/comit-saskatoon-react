import React from "react";

export default function Login(props) {
  return (
    <div>
      <h2>Login to your account</h2>
      <form onSubmit={props.handleSubmit}>
        <p>
          <label>
            Email
            <input type="email" name="email" autofocus required />
          </label>
        </p>
        <p>
          <label>
            Password
            <input type="password" name="password" autofocus required />
          </label>
        </p>

        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
