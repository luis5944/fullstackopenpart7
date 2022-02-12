/* eslint-disable react/display-name */
import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useImperativeHandle } from "react";

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => {
    return { toggleVisibility };
  });

  return (
    <div>
      <div>
        <Button
          variant="contained"
          style={hideWhenVisible}
          onClick={() => {
            setVisible(true);
          }}
        >
          Create New Blog
        </Button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <Button
          variant="contained"
          onClick={() => {
            setVisible(false);
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
});

export default Togglable;
