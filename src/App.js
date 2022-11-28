import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import SearchFeed from "./components/SearchFeed";
import VideoDetails from "./components/VideoDetails";
import Form from "./components/Form";

function App({ input, setInput, handleSubmit }) {
  // const [data, setData] = useState([]);
  // const [input, setInput] = useState("");

  // // let navigate = useNavigate();

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&maxResults=15&key=${process.env.REACT_APP_API_KEY}`;
  //   const result = window.localStorage.getItem(input);
  //   console.log("useEffect ran");

  //   if (input.length === 0) return;

  //   if (result) {
  //     // if the data is in the local storage retrieve it
  //     console.log(`retrieving ${input} data from local storage`);
  //     setData(JSON.parse(result));
  //     setInput("");
  //   } else {
  //     // if data is not in local storage fetch it and store it
  //     fetch(url)
  //       .then((resp) => resp.json())
  //       .then((res) => {
  //         console.log(res);
  //         console.log(`I ran a fetch for ${input}`);
  //         window.localStorage.setItem(input, JSON.stringify(res));
  //         setData(res.items);
  //         setInput("");
  //       });
  //   }
  // }

  return (
    <div className="App">
      <Router>
        <Form handleSubmit={handleSubmit} />
        {/* <article className="form">
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                id="search"
                placeholder="Search"
                name="search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></input>
              <button>Search</button>
            </label>
          </form>
        </article> */}
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route
            path="/search/:userInput"
            element={<SearchFeed input={input} setInput={setInput} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
