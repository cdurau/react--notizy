import React from 'react';
import Stack from "@mui/material/Stack";
import NoteListItem from "./NoteListItem";

const NoteList = () => {
    return (
            <Stack spacing={2} className="note-list">
                <NoteListItem />
                <NoteListItem />
                <NoteListItem />
            </Stack>
    );
};

export default NoteList;