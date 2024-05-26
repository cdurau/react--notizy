import React from 'react';
import Stack from "@mui/material/Stack";
import NoteListItem from "./NoteListItem";

const NoteList = ({notes}) => {
    return (
        <Stack spacing={2} className="note-list">
            {notes.map(note => (
                    <NoteListItem key={note.id} note={note}/>
                )
            )}
        </Stack>
    );
};

export default NoteList;