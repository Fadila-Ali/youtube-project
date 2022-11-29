import React from "react";
import YouTube from "react-youtube";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { singleVideo } from "../api/fetch";
import Comment from "./Comment";

const VideoDetails = () => {
  const [playVideo, setPlayVideo] = useState([]);
  let { id } = useParams();

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
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <YouTube videoId={id} opts={opts} />
      {playVideo.map((video) => {
        return <h3>{video.snippet.title}</h3>;
      })}
      <Comment />
    </div>
  );
};

export default VideoDetails;
