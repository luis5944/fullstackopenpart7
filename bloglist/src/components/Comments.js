import React from "react";

import Comment from "./Comment";
import NewComment from "./NewComment";

const Comments = ({ blog }) => {
  const { comments } = blog;
  console.log(comments);
  return (
    <div>
      <h2>Comments</h2>
      <NewComment blog={blog} />
      <ul>
        {comments.map((comment) => (
          <Comment key={comment} comment={comment} />
        ))}
      </ul>
    </div>
  );
};

export default Comments;
