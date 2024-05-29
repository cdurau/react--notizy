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
        // Get new id for todo list
        const newId = todos.reduce((max, todo) => (todo.id > max ? todo.id : max), -Infinity) + 1

        // Add new todo
        setTodos(prevTodos => [...prevTodos, {'id': newId, 'title': newTodoTitle, 'completed': false}])

        // Clear input field after adding new todo
        document.getElementById('input-new-todo').value = ''
    }

    const setCompletedStatus = (item) => {
        setTodos(prevTodos => prevTodos.map(todo => {
            // Toggle Todo Completed
            return todo.id === item.id ? {'id': todo.id, 'title': todo.title, 'completed': !todo.completed} : todo
        }))
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
                    <TodoList todos={todos} setCompletedStatus={setCompletedStatus} />
                </Container>

            </div>
        </ThemeProvider>
    )
}

export default App
