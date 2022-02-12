import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useHistory } from "react-router";
import BlogList from "./components/BlogList";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import User from "./components/User";
import Users from "./components/Users";
import { getAllBlogs } from "./reducers/blogReducer";
import { isLogged } from "./reducers/loginReducer";
import "./App.css";
import Blog from "./components/Blog";

const App = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  useEffect(() => {
    dispatch(isLogged());
    history.push("/blogs");
  }, [dispatch, history]);

  const blogForm = () => (
    <div>
      <NavBar />
      <Switch>
        <Route path="/blogs/:id" exact>
          <Blog />
        </Route>
        <Route path="/blogs" exact>
          <BlogList />
        </Route>
        <Route path="/users/:id">
          <User />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </div>
  );

  return <>{login ? blogForm() : <Login />}</>;
};

export default App;
