import React from "react";
import { useSelector } from "react-redux";
import Togglable from "./Togglable";
import NewBlog from "./NewBlog";
import { FaBloggerB } from "react-icons/fa";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { List, ListItem, Typography } from "@material-ui/core";

const BlogList = () => {
  const blogs = useSelector((state) => state.blogs);
  const newBlogRef = useRef();
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: ".5rem",
          alignItems: "center",
        }}
      >
        <Typography variant="h1">Blogs</Typography>
        <Togglable ref={newBlogRef}>
          <NewBlog />
        </Togglable>
      </div>

      <List>
        {blogs
          .map((blog) => (
            <ListItem key={blog.id} blog={blog}>
              <Link
                to={`/blogs/${blog.id}`}
                style={{ color: "black", textDecoration: "none" }}
              >
                <FaBloggerB />
                <Typography>{blog.title}</Typography>{" "}
              </Link>
            </ListItem>
          ))
          .sort((a, b) => b.props.blog.likes - a.props.blog.likes)}
      </List>
    </div>
  );
};

export default BlogList;
