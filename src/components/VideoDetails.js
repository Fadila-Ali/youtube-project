import React from "react";
import YouTube from "react-youtube";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { singleVideo } from "../api/fetch";
import Comment from "./Comment";
import { FaCheckCircle, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const VideoDetails = () => {
  const [playVideo, setPlayVideo] = useState([]);
  const [show, setShow] = useState(false);
  let { id } = useParams();

  //For subscribe
  function userSubscribe(event) {
    if (event.currentTarget.style.backgroundColor) {
      event.currentTarget.style.backgroundColor = null;
      event.currentTarget.style.color = null;
    } else {
      alert("Thank you for supporting my channel!");
      event.currentTarget.style.backgroundColor = "#ff0000";
      event.currentTarget.style.color = "#ffffff";
    }

    //toggle class on click
    event.currentTarget.classList.toggle("my-class-1", "my-class-2");
  }

  //For like/dislike
  const handleClick = (event) => {
    if (event.currentTarget.style.backgroundColor) {
      event.currentTarget.style.backgroundColor = null;
      event.currentTarget.style.color = null;
    } else {
      event.currentTarget.style.backgroundColor = "#ffffff";
      event.currentTarget.style.color = "#000000";
      event.currentTarget.style.border = "#ff0000";
    }

    //toggle class on click
    event.currentTarget.classList.toggle("my-class-1", "my-class-2");
  };

  //For related videos
  const [data, setData] = useState([]);
  const [loadingError, setLoadingError] = useState(false);
  useEffect(() => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${opts.videoId}&type=video&key=${process.env.REACT_APP_API_KEY}`;
    fetch(url)
      .then((resp) => resp.json())
      .then((res) => {
        console.log(res.items);
        setData(res.items);
        setLoadingError(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadingError(true);
      });
  }, []);

  //For songle video
  useEffect(() => {
    singleVideo(id)
      .then((res) => {
        setPlayVideo(res.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const opts = {
    videoId: id,
    height: "500",
    width: "800",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="details">
      <div className="container">
        <div className="playing">
          <YouTube videoId={id} opts={opts} className="vid" />
          {playVideo.map((video) => {
            return (
              <section className="vidSection">
                <h2>{video.snippet.title}</h2>
                <h4>
                  {video.snippet.channelTitle} <FaCheckCircle />
                  <span id="subscribe">
                    <button onClick={userSubscribe}>Subscribe</button>
                  </span>
                  <span id="like">
                    <button onClick={handleClick}>
                      <FaThumbsUp />
                    </button>
                  </span>
                  <span id="dislike">
                    <button onClick={handleClick}>
                      <FaThumbsDown />
                    </button>
                  </span>
                </h4>
                <article className="description">
                  <button id="description" onClick={() => setShow(!show)}>
                    {show && <h5>{video.snippet.description}</h5>
                      ? "Hide Description"
                      : "Show Description"}
                  </button>
                  {show && <h5>{video.snippet.description}</h5>}
                </article>
              </section>
            );
          })}
          <Comment />
        </div>
        <div className="related">
          <section className="relatedVideos">
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
                  <h5>
                    {el.snippet.channelTitle} <FaCheckCircle />
                  </h5>
                </section>
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
