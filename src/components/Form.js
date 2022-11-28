import { useState } from "react";

const Form = () => {
  const [input, setInput] = useState("");
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
    <article className="form">
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
    </article>
  );
};

export default Form;
