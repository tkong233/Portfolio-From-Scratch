import Nav from './Nav';
import Hero from './Hero';
import Album from './Album';
import Footer from './Footer';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      light: '#008394',
      main: '#008394',
      dark: '#008394',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: 'serif'
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Nav/>
        <Hero/>   
        <Album/>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
