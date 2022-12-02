import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import SearchFeed from "./components/SearchFeed";
import VideoDetails from "./components/VideoDetails";
import Form from "./components/Form";

function App() {
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState("light");

  return (
    // <div className={`App ${theme}`}></div>
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>YouTube</title>
        <link rel="canonical" href="http://mysite.com/example"></link>
        <meta name="description" content="A YouTube clone"></meta>
      </Helmet>
      <Router>
        <Form setData={setData} />
        <Nav setTheme={setTheme} />
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
