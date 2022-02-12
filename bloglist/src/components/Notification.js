import React from "react";

const Notification = ({ notification }) => {
  return (
    <h3 style={{ border: "1px solid black", backgroundColor: "grey" }}>
      {notification}
    </h3>
  );
};

export default Notification;
