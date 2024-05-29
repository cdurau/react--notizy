import {AppBar, IconButton, Toolbar, Typography} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import {Menu} from '@mui/icons-material'

export const Header = ({addTodo}) => {
    const addNewTodo = () => {
        const title = document.getElementById('input-new-todo').value
        // check if title is empty
        if (title != '') {
            addTodo(title)
        }
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <Menu />
                    </IconButton>
                    <Typography textAlign={'center'} variant="h6" component="div" sx={{flexGrow: 1}}>
                        Todo
                    </Typography>
                    <IconButton color="inherit" onClick={addNewTodo}><AddIcon /></IconButton>
                </Toolbar>
            </AppBar>

        </>

    )
}
