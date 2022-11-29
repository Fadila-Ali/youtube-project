import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Searching } from "../api/fetch";
import "./SearchFeed.css";

const SearchFeed = ({ data }) => {
  return (
    <article className="searchedVideos">
      {data && data.length === 0 ? (
        <p id="empty">No search result yet!, please submit a search above!</p>
      ) : (
        <section className="videos">
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
