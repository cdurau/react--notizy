import './App.css'
import {Header} from './components/Header'
import {TodoList} from './components/TodoList'
import {ThemeProvider, createTheme} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import {Container, unstable_ClassNameGenerator} from '@mui/material'
import {useEffect, useState} from 'react'

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
})

function App() {
    const [todos, setTodos] = useState([])

    const addTodo = (newTodoTitle) => {
        const newId = todos.reduce((max, todo) => (todo.id > max ? todo.id : max), -Infinity) + 1

        // {'id': newId, 'title': `Item ${newId}`, 'completed': false}
        setTodos(prevTodos => [...prevTodos, {'id': newId, 'title': newTodoTitle, 'completed': false}])
        console.log("Add Todo ...")
    }

    useEffect(() => {
        fetch('data/todos.json')
            .then(response => response.json())
            .then(data => setTodos(data))
    }, [])

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div className="App">
                <Container maxWidth="sm">
                    <Header addTodo={addTodo} />
                    <TodoList todos={todos} />
                </Container>

            </div>
        </ThemeProvider>
    )
}

export default App
