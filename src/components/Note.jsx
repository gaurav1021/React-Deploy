import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          const g = props.id;
          props.del(g);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
