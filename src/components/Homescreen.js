import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import NoteList from "./NoteList";

const Homescreen = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch('notes.json')
            .then(response => response.json())
            .then(data => setNotes(data))
    }, [])

    return (
        <Grid container spacing={2} diplay="flex" justifyContent="center" alignItems="center">
            <Grid xs={12} md={6}>
                <NoteList notes={notes}/>
            </Grid>
        </Grid>
    );
};

export default Homescreen;