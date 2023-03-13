import BlogList from "./BlogList/BlogList";
import axios from "axios";
import useFetch from "../../useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs"></BlogList>}
    </div>
  );
};

export default Home;
