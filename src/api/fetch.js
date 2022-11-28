const key = process.env.REACT_APP_API_KEY;

export function Searching(input) {
  return fetch(
    `https://googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${input}&key=${key}`
  ).then((res) => res.json());
}

// export function HomeFeed() {
//   return fetch(
//     `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50${key}`
//   ).then((res) => res.json());
// }

// import axios from "axios";
// const KEY = process.env.REACT_APP_API_KEY;

// export default axios.create({
//   baseURL: "https://www.googleapis.com/youtube/v3/",
//   params: {
//     part: "snippet",
//     maxResults: 5,
//     key: KEY,
//   },
// });
