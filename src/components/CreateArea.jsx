import React from "react";

function CreateArea(props) {
  const [item, setItem] = React.useState({
    title: "",
    content: ""
  });
  function handle(event) {
    const { value, name } = event.target;
    setItem((prev) => {
      return { ...prev, [name]: value };
    });
  }
  return (
    <div>
      <form>
        <input
          name="title"
          value={item.title}
          placeholder="Title"
          onChange={handle}
        />
        <textarea
          name="content"
          value={item.content}
          placeholder="Take a note..."
          onChange={handle}
          rows="3"
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.lick(item);
            setItem({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
