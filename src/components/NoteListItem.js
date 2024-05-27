import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    '&:hover': {
        transform: 'scale(1.025)',
        transition: 'transform 0.3s ease-in-out',
    },
}));

const NoteListItem = ({note}) => {
    return (
        <Item className="note-list-item">
            {note.title}
        </Item>
    );
};

export default NoteListItem;