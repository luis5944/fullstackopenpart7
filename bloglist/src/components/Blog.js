import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBlog, updateBlog } from "../reducers/blogReducer";
import { useHistory, useParams } from "react-router";
import Comments from "./Comments";

const Blog = () => {
  let owner = true;
  const history = useHistory();
  const dispatch = useDispatch();
  const id = useParams().id;
  const blogs = useSelector((state) => state.blogs);
  const blog = blogs.find((b) => b.id === id);
  const user = useSelector((state) => state.login);

  const listStyle = {
    listStyle: "none",
  };

  if (!blog) {
    return null;
  }

  if (user.username !== blog.user.username) {
    owner = false;
  }

  return (
    <div>
      <ul style={listStyle}>
        <li className="titleAuthor">
          Title:
          <h2 style={{ margin: "0", display: "inline" }}>{blog.title}</h2>
        </li>
        <li>Author: {blog.author}</li>
        <li className="url"> URL:{blog.url}</li>
        <li className="likes">
          Likes:{blog.likes}{" "}
          <button
            className="updateBlog"
            onClick={async () => {
              dispatch(updateBlog(blog));
            }}
          >
            like
          </button>
        </li>
        <li> User:{blog.user ? blog.user.username : ""}</li>
        <li>
          {owner ? (
            <button
              id="remove-button"
              onClick={async () => {
                const confirm = window.confirm(
                  `Remove blog ${blog.title} by ${blog.author}`
                );

                if (confirm) {
                  dispatch(deleteBlog(blog.id, user.token));
                  history.push("/blogs");
                }
              }}
            >
              Remove
            </button>
          ) : (
            ""
          )}
        </li>
      </ul>
      <div>
        <Comments blog={blog} />
      </div>
    </div>
  );
};

export default Blog;
