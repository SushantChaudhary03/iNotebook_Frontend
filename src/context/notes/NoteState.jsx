import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "661817d6c2e3d75b5d857dd8",
          "user": "6616c673f6148f4b6c162ae5",
          "title": "my note",
          "description": "this is my first note",
          "tag": "personal",
          "date": "2024-04-11T17:03:18.689Z",
          "__v": 0
        },
        {
          "_id": "661817d7c2e3d75b5d857dda",
          "user": "6616c673f6148f4b6c162ae5",
          "title": "my note",
          "description": "this is my first note",
          "tag": "personal",
          "date": "2024-04-11T17:03:19.525Z",
          "__v": 0
        },
        {
          "_id": "661817d7c2e3d75b5d857dda",
          "user": "6616c673f6148f4b6c162ae5",
          "title": "my note",
          "description": "this is my first note",
          "tag": "personal",
          "date": "2024-04-11T17:03:19.525Z",
          "__v": 0
        },

        {
          "_id": "661817d7c2e3d75b5d857dda",
          "user": "6616c673f6148f4b6c162ae5",
          "title": "my note",
          "description": "this is my first note",
          "tag": "personal",
          "date": "2024-04-11T17:03:19.525Z",
          "__v": 0
        }
      ]

    const [notes, setNotes] = useState(notesInitial);

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;