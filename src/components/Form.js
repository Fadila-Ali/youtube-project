import { useState } from "react";

const Form = ({ handleSubmit }) => {
  const [input, setInput] = useState("");
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
