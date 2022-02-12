import blogService from "../services/blogs";

const initialState = [];

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL":
      return action.payload;
    case "CREATE_BLOG":
      return [...state, action.payload];
    case "UPDATE_BLOG":
      return state.map((blog) =>
        blog.id === action.payload.id
          ? { ...blog, likes: Number(blog.likes) + 1 }
          : blog
      );
    case "ADD_COMMENT":
      console.log(action.payload);
      return state.map((blog) =>
        blog.id === action.payload.id
          ? { ...blog, comments: action.payload.comments }
          : blog
      );

    case "DELETE_BLOG":
      return state.filter((blog) => blog.id !== action.payload);
    default:
      return state;
  }
};

export const getAllBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll();

    dispatch({
      type: "GET_ALL",
      payload: blogs,
    });
  };
};

export const createNewBlog = (content, user) => {
  return async (dispatch) => {
    const newBlog = await blogService.createBlog(content, user);

    dispatch({ type: "CREATE_BLOG", payload: newBlog });
  };
};

export const addCommentBlog = (blog, comment) => {
  return async (dispatch) => {
    const updated = await blogService.addCommentToBlog(blog, comment);
    dispatch({ type: "ADD_COMMENT", payload: updated });
  };
};

export const updateBlog = (blog) => {
  return async (dispatch) => {
    const updated = await blogService.updateBlog(blog);
    dispatch({ type: "UPDATE_BLOG", payload: updated });
  };
};
export const deleteBlog = (id, token) => {
  return async (dispatch) => {
    await blogService.removeBlog(id, token);
    dispatch({ type: "DELETE_BLOG", payload: id });
  };
};

export default blogReducer;
