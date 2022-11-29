import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import SearchFeed from "./components/SearchFeed";
import VideoDetails from "./components/VideoDetails";
import Form from "./components/Form";

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <Router>
        <Form setData={setData} />
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home data={data} />} />
          <Route path="/about" element={<About />} />
          <Route path="/video/:id" element={<VideoDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
