import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../../useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const navigateTo = useNavigate();

  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleClick = () => {
    axios.delete("http://localhost:8000/blogs/" + blog.id).then(() => {
      navigateTo("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
