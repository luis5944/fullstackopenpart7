import React from "react";
import { Link } from "react-router-dom";
import Notification from "./Notification";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../reducers/loginReducer";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const padding = {
    margin: "0px 10px",
    color: "white",
    textDecoration: "none",
    backgroundColor: "black",
    padding: "5px",
    borderRadius: ".5rem",
  };

  const notification = useSelector((state) => state.notification);
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          backgroundColor: "grey",
          padding: ".5rem",
          borderRadius: ".5rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <li>
          <Link to="/blogs" style={padding}>
            Blogs
          </Link>
        </li>
        <li>
          <Link to="/users" style={padding}>
            Users
          </Link>
        </li>
        <li>
          {login.username} logged in{" "}
          <button
            onClick={() => {
              history.push("/");
              dispatch(userLogout());
            }}
          >
            Logout
          </button>
        </li>
      </ul>

      {notification ? <Notification notification={notification} /> : ""}
    </nav>
  );
};

export default NavBar;
