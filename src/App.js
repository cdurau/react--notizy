import './App.css'
import {Header} from './components/Header'
import {TodoList} from './components/TodoList'
import {ThemeProvider, createTheme} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import {Container} from '@mui/material'
import {useEffect, useState} from 'react'

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
})

function App() {
    const [todos, setTodos] = useState([])

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
                    <Header />
                    <TodoList todos={todos}/>
                </Container>

            </div>
        </ThemeProvider>
    )
}

export default App
