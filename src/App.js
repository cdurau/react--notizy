import './App.css';
import {Header} from './components/Header';
import {TodoList} from './components/TodoList';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {Container} from '@mui/material';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div className="App">
                <Container maxWidth="sm">
                    <Header />
                    <TodoList />
                </Container>

            </div>
        </ThemeProvider>
    );
}

export default App;
