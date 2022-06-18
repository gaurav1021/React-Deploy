import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [list, setList] = React.useState([
    {
      title: "Add Title",
      content: "Add Notes"
    }
  ]);
  function deleteNote(givenId) {
    setList((prev) => {
      return prev.filter((note, index) => {
        return index !== givenId;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea
        lick={(item) => {
          setList((prev) => [...prev, item]);
        }}
      />
      {list.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            del={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
