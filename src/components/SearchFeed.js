import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const SearchFeed = ({ data }) => {
  return (
    <article className="searchedVideos">
      {data && data.length === 0 ? (
        <p id="empty">
          <span>No search result yet!, please submit a search above!</span>
        </p>
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
                <p>
                  {el.snippet.channelTitle} <FaCheckCircle />
                </p>
              </section>
            );
          })}
        </section>
      )}
    </article>
  );
};

export default SearchFeed;
