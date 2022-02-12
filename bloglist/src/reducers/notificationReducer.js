/* eslint-disable indent */
const initialState = "";

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return action.payload;

    case "REMOVE_NOTIFICATION":
      return initialState;
    default:
      return state;
  }
};

export const notificationAdded = (notification) => {
  return {
    type: "SET_NOTIFICATION",
    payload: notification,
  };
};

export const notificationRemove = () => {
  return {
    type: "REMOVE_NOTIFICATION",
  };
};

export default notificationReducer;
