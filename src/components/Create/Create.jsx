import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const navigateTo = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    try {
      const { data } = await axios.post("http://localhost:8000/blogs", blog, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setIsPending(false);
      console.log("new blog added");
      navigateTo(`/blogs/${data.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="create">
      <h1>Add a new blog</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Blog title:</label>
        <input
          value={title}
          type="text"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="">Blog body:</label>
        <textarea
          value={body}
          required
          onChange={(e) => setBody(e.target.value)}
        >
          Blog body:{" "}
        </textarea>
        <label htmlFor="">Blog author: </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button type="Submit">Add blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
};

export default Create;
