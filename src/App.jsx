import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Create from "./components/Create/Create";
import BlogDetails from "./components/Home/BlogDetails/BlogDetails";
import NotFound from "./NotFound";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/create" element={<Create />}></Route>
            <Route exact path="/blogs/:id" element={<BlogDetails />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
