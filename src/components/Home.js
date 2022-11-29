import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { snowboard } from "../api/snowboard";
import { HomeFeed } from "../api/fetch";
import "./Home.css";
import SearchFeed from "./SearchFeed";

const Home = ({ data }) => {
  return (
    <div className="homeFeed">
      <SearchFeed data={data} />
    </div>
  );
};

export default Home;
