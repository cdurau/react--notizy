import {Box, Checkbox, FormControlLabel, FormGroup} from '@mui/material'

export const TodoItem = ({todo, setCompletedStatus}) => {
    return (
        <Box>
            <FormControlLabel
                sx={{
                    display: 'flex',
                    flexGrow: 1,
                    justifyContent: 'center',
                    position: 'relative',
                    padding: '0 0.6rem'
                }}
                control={<Checkbox checked={todo.completed} onChange={() => setCompletedStatus(todo)}
                                   sx={{position: 'absolute', left: 0, marginLeft: '0.6rem',}} />}
                label={<div>{todo.title}</div>}
            />
        </Box>
    )
}