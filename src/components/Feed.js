// import React from 'react'
// import Error from "./Error";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Feed = ({popular, setPopular}) => {
//     const [loadingError, setLoadingError] = useState(false);
//     useEffect(() => {
//       const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=${process.env.REACT_APP_API_KEY}`;
//       const URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&fields=items(id%2Csnippet%2Cstatistics(commentCount%2ClikeCount%2CviewCount))&maxResults=50&key=${process.env.REACT_APP_API_KEY}`;
//       fetch(url)
//         .then((resp) => resp.json())
//         .then((res) => {
//           console.log(res.items);
//           setPopular(res.items);
//           setLoadingError(false);
//         })
//         .catch((err) => {
//           console.log(err);
//           setLoadingError(true);
//         });
//     }, []);

//   return (
//     <div>
//       <div className="homeVideos">
//         {popular.map((video) => {
//           return (
//             <section>
//               <Link to={`/video/${video.id.videoId}`}>
//                 <img
//                   src={video.snippet.thumbnails.medium.url}
//                   alt={video.snippet.description}
//                 ></img>
//               </Link>
//               <Link
//                 to={`/video/${video.id.videoId}`}
//                 style={{ textDecoration: "none" }}
//               >
//                 <h3>{video.snippet.title}</h3>
//               </Link>

//               <h5>{video.snippet.channelTitle}</h5>
//             </section>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Feed
