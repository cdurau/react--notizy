import React from 'react';

const NoteListItem = ({note}) => {
    return (
        <div className="note-list-item">
            {note.title}
        </div>
    );
};

export default NoteListItem;