import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCommentBlog } from "../reducers/blogReducer";

const NewComment = ({ blog }) => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (blog.comments.find((c) => c === comment)) {
          window.alert("notificationRemove");
          return;
        }
        dispatch(addCommentBlog(blog, comment));
      }}
    >
      <input
        type="text"
        name="comment"
        id="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button>Add Comment</button>
    </form>
  );
};

export default NewComment;
