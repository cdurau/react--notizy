import {Stack} from '@mui/material';
import {TodoItem} from './TodoItem';

export const TodoList = () => {
    return (
        <>
            <Stack textAlign={'center'} my={1} spacing={2}>
                <TodoItem title="Item 1" />
                <TodoItem title="Item 2" />
                <TodoItem title="Item 3" />
            </Stack>
        </>
    );
};
