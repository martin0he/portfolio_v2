import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import PageTemplate from "./pages/PageTemplate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Dummy Routes */}
        <Route path="/about" element={<PageTemplate title="About Me" />} />
        <Route path="/projects" element={<PageTemplate title="Projects" />} />
        <Route
          path="/experience"
          element={<PageTemplate title="Experience" />}
        />
        <Route path="/contact" element={<PageTemplate title="Contact" />} />
      </Routes>
      <Navbar />
    </Router>
  );
}

export default App;
