import loginService from "../services/login";

const initialState = null;

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "IS_LOGGED":
      return action.payload;
    case "LOGIN":
      return action.payload;

    case "LOGOUT":
      return initialState;

    default:
      return state;
  }
};

export const isLogged = () => {
  const user = localStorage.getItem("loginData");

  return { type: "IS_LOGGED", payload: JSON.parse(user) };
};

export const userLogin = (username, password) => {
  return async (dispatch) => {
    const user = await loginService.login(username, password);
    localStorage.setItem("loginData", JSON.stringify(user));
    dispatch({ type: "LOGIN", payload: user });
  };
};

export const userLogout = () => {
  localStorage.removeItem("loginData");
  return { type: "LOGOUT" };
};

export default loginReducer;
