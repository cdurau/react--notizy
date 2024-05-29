import {Box, Stack, TextField} from '@mui/material'
import {TodoItem} from './TodoItem'

export const TodoList = ({todos}) => {
    return (
        <>
            <Stack textAlign={'center'} my={1} spacing={2}>
                <Box key={0}>
                    <TextField id="input-new-todo" label="Neuer Eintrag..." variant="standard" />
                </Box>
                {todos.map((todo)=>
                    <TodoItem key={todo.id} todo={todo}/>
                )}
            </Stack>
        </>
    )
}
