import React from 'react'

const NoteItem = (props) => {
    const { note } = props;
    return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg ml-8">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{note.title}</div>
                        <p className="text-gray-700 text-base">
                            {note.description}
                        </p>
                    </div>
            </div>
    )
}

export default NoteItem
