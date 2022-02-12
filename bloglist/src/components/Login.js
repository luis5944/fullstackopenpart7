import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { userLogin } from "../reducers/loginReducer";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notificationError, setNotificationError] = useState("");
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      dispatch(userLogin(username, password));
      setUsername("");
      setPassword("");
      history.push("/blogs");
    } catch (error) {
      setNotificationError("Wrong Username or Password");
      setTimeout(() => {
        setNotificationError("");
      }, 3000);
    }
  };

  return (
    <>
      <h1>log in to application</h1>
      {notificationError ? <h2>{notificationError}</h2> : ""}
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            value={username}
            id="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
