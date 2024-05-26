import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import NoteList from "./NoteList";

const Homescreen = () => {
    return (
        <Grid container spacing={2} diplay="flex" justifyContent="center" alignItems="center">
            <Grid xs={12} md={6} style={{borderStyle:"2 px solid red"}}>
                <NoteList />
            </Grid>
        </Grid>
    );
};

export default Homescreen;