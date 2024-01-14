import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Blog from "./Blog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
