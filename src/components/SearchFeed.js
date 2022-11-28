import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Searching } from "../api/fetch";

const SearchFeed = ({ input, setInput }) => {
  const [data, setData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&maxResults=15&key=${process.env.REACT_APP_API_KEY}`;
    const result = window.localStorage.getItem(input);
    console.log("useEffect ran");

    if (input.length === 0) return;

    if (result) {
      // if the data is in the local storage retrieve it
      console.log(`retrieving ${input} data from local storage`);
      setData(JSON.parse(result));
      console.log(Array.isArray(JSON.parse(result)));
      setInput("");
    } else {
      // if data is not in local storage fetch it and store it
      fetch(url)
        .then((resp) => resp.json())
        .then((res) => {
          console.log(res);
          console.log(`I ran a fetch for ${input}`);
          window.localStorage.setItem(input, JSON.stringify(res));
          setData(res.items);
          setInput("");
        });
    }
  }
  return (
    <article className="searchedVideos">
      SearchFeed
      {data && data.length === 0 ? (
        <p>No search result yet!, please submit a search above!</p>
      ) : (
        <section>
          {data.map((el) => {
            return (
              <section>
                <Link to={`/video/${el.id.videoId}`}>
                  <img
                    src={el.snippet.thumbnails.medium.url}
                    alt={el.snippet.description}
                  ></img>
                </Link>
                <Link
                  to={`/video/${el.id.videoId}`}
                  style={{ textDecoration: "none" }}
                >
                  <h3>{el.snippet.title}</h3>
                </Link>
                <p>{el.snippet.channelTitle}</p>
              </section>
            );
          })}
        </section>
      )}
    </article>
  );
};

export default SearchFeed;
