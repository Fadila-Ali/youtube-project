import { useState } from "react";
import { Searching } from "../api/fetch";
import Error from "./Error";
import { FaSearch, FaYoutube } from "react-icons/fa";

const Form = ({ setData }) => {
  const [input, setInput] = useState("");
  const [loadingError, setLoadingError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&maxResults=20&key=${process.env.REACT_APP_API_KEY}`;
    const result = window.localStorage.getItem(input);
    console.log("useEffect ran");

    if (input.length === 0) return;

    // if (result) {
    //   // if the data is in the local storage retrieve it
    //   console.log(`retrieving ${input} data from local storage`);
    //   setData(JSON.parse(result));
    //   console.log(JSON.parse(result));
    //   console.log(Array.isArray(JSON.parse(result)));
    //   setInput("");
    // } else {
    // if data is not in local storage fetch it and store it
    // const URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&q${input}%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&fields=items(id%2Csnippet%2Cstatistics(commentCount%2ClikeCount%2CviewCount))&key=${process.env.REACT_APP_API_KEY}`;
    fetch(url)
      .then((resp) => resp.json())
      .then((res) => {
        console.log(res);
        console.log(`I ran a fetch for ${input}`);
        window.localStorage.setItem(input, JSON.stringify(res));
        setData(res.items);
        setLoadingError(false);
        setInput("");
      })
      .catch((err) => {
        console.log(err);
        setLoadingError(true);
      });
    // }
  }
  return (
    <article className="form">
      <form onSubmit={handleSubmit}>
        <span className="logo">
          <span className="logoIcon">
            <FaYoutube />
          </span>
          YouTube
        </span>
        <label>
          <input
            type="text"
            id="search"
            placeholder="Search"
            name="search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <button>
            <FaSearch />
          </button>
        </label>
      </form>
    </article>
  );
};

export default Form;
