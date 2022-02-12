import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const User = () => {
  const id = useParams().id;

  const users = useSelector((state) => state.users);
  let user = users.filter((u) => u.id === id);
  user = user[0];
  if (!user) {
    return null;
  }
  return (
    <div>
      <h1>{user.username}</h1>
      <h2>Added Blogs</h2>
      <ul>
        {user.blogs.length > 0 ? (
          user.blogs.map((blog) => <li key={blog.id}>{blog.title}</li>)
        ) : (
          <h3>No Blogs</h3>
        )}
      </ul>
    </div>
  );
};

export default User;
