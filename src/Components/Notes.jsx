import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';

const Notes = () => {
  const context = useContext(noteContext)
  const {notes, setNotes} = context;
  return (
    <div className='flex justify-center items-center'>
      {notes.map((note)=>{
        return <NoteItem note={note}/>
      })}
    </div>
  )
}

export default Notes
