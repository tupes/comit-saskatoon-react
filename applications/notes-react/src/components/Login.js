import React,{useState} from "react";


export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    
    <div className="form">
    <form>
        <label htmlFor="username">Username:</label>
        <input
        value={username}
        required
        type="text"
        id="username"
        name="username"
        placeholder="username"
        onChange={(event) => setUsername(event.target.value)}
        />
        
        <label htmlFor="password">Password:</label>
        <input
        required
        value={password}
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
        />
        <button  onClick={(event) => props.handleSubmit(event, username, password)}
              type="submit">Log In</button>
         {props.error && props.error.message}
    </form>

</div>


  );
}
