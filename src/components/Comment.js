import React from "react";
import { useState } from "react";

const Comment = () => {
  const [commenter, setCommenter] = useState("");
  const [comment, setComment] = useState("");
  const [commentsArray, setCommentsArray] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    newComment();
    setCommenter("");
    setComment("");
  }

  function newComment() {
    if (!commenter || !comment) {
      alert("Please make sure you put your name and a message");
    } else {
      //make a new obj that holds the values of comment and commenter
      const newObj = [...commentsArray];
      newObj.push({ commenter: commenter, comment: comment });

      //use setNotes function to add to the notes array without losing the other comments in the array
      setCommentsArray(newObj);
    }
  }
  return (
    <div className="comments">
      <article className="notes">
        <h4>Comments</h4>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="commenter"
              id="commenter"
              value={commenter}
              onChange={(e) => setCommenter(e.target.value)}
            ></input>
          </label>
          <label>
            <br />
            Add a comment
            <input
              type="text"
              name="comment"
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></input>
          </label>
          <button type="submit" onClick={handleSubmit}></button>
        </form>
        <ul>
          {commentsArray.map((com) => {
            return (
              <li id="com">
                <b>{com.commenter}</b> <br />
                {com.comment}
              </li>
            );
          })}
          {newComment}
        </ul>
      </article>
    </div>
  );
};

export default Comment;
