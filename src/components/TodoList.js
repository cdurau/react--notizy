import {Stack} from '@mui/material'
import {TodoItem} from './TodoItem'

export const TodoList = ({todos}) => {
    return (
        <>
            <Stack textAlign={'center'} my={1} spacing={2}>
                {todos.map((todo)=>
                    <TodoItem title={todo.title}/>
                )}
            </Stack>
        </>
    )
}
