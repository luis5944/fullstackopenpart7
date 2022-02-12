import userService from "../services/users";

const userReducer = (state = [], action) => {
  switch (action.type) {
    case "ALL_USERS":
      return action.payload;
    default:
      return state;
  }
};

export const allUsers = () => {
  return async (dispatch) => {
    const users = await userService.getAll();
    dispatch({ type: "ALL_USERS", payload: users });
  };
};

export default userReducer;
