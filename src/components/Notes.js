import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

function Notes({ deleteNote, note, setSubject, setNotesDetail }) {
  return (
    <div className="card shadow-lg w-80 rounded-lg">
      <div className="flex justify-between items-center bg-sky-100  rounded-t-lg">
        <input
          defaultValue={note.sub}
          type="text"
          placeholder="Subject"
          className="py-3 px-4 bg-sky-100 max-w-xs text-black placeholder:text-gray-600"
          onBlur={(e) => setSubject(e.target.value)}
        />
        <button onClick={() => deleteNote(note.id)}>
          <RiDeleteBin6Line
            size={24}
            className="mr-2 bg-red-500 text-white rounded-full p-1 w-8 h-8"
          />
        </button>
      </div>
      <div className="bg-red-300 ">
        <textarea
          defaultValue={note.notes}
          onBlur={(e) => setNotesDetail(e.target.value)}
          placeholder="Type notes here..."
          className="py-2 px-4 w-80 h-48 bg-red-300  rounded-b-lg outline-none placeholder:text-gray-600 resize-none"
        />
      </div>
    </div>
  );
}

export default Notes;
