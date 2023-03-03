import "./App.css";
import { RiAddCircleLine } from "react-icons/ri";
import Notes from "./components/Notes";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [subject, setSubject] = useState("");
  const [notesDetail, setNotesDetail] = useState("");
  const [searchNote, setSearchNote] = useState("");

  const storeData = JSON.parse(localStorage.getItem("notes"));

  const newNote = {
    id: Date.now(),
    sub: subject,
    notes: notesDetail,
  };
  const addNewNotes = () => {
    setNotesDetail("");
    setSubject("");
    setNotes([...notes, newNote]);
    localStorage.setItem("notes", JSON.stringify([...notes, newNote]));
  };

  const deleteNote = (id) => {
    const remaining = storeData.filter((note) => note.id !== id);
    remaining.splice(id, 1);
    localStorage.removeItem(id);
    localStorage.setItem("notes", JSON.stringify(remaining));
    setNotes(remaining);
  };

  return (
    <div className="container mx-auto flex flex-col justify-center items-center px-4">
      <p className="text-xl font-bold pt-5">Super Sticky Notes</p>
      <div className=" my-10 py-2 rounded-lg bg-green-400 px-4">
        <button
          onClick={addNewNotes}
          className="font-bold flex justify-center items-center text-xl"
        >
          New Notes
          <span className="ml-3">
            <RiAddCircleLine size={24} />
          </span>
        </button>
      </div>
      <input
        onChange={(e) => setSearchNote(e.target.value)}
        placeholder="Search by Subject"
        className="border-2 py-2 rounded-md shadow-md px-4 w-full max-w-xs block mb-8"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-between">
        {storeData
          ?.filter((value) => {
            if (searchNote === "") {
              return value;
            } else if (
              value?.sub.toLowerCase().includes(searchNote.toLocaleLowerCase())
            ) {
              return value;
            }
          })
          .slice(0).reverse().map((note) => (
            <Notes
              note={note}
              key={note.id}
              deleteNote={deleteNote}
              setSubject={setSubject}
              setNotesDetail={setNotesDetail}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
