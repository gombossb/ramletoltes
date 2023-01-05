import './App.css';
import * as React from 'react';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import RespAppBar from './RespAppBar';
import Ismertetes from './Ismertetes';
import DownloadSection from './DownloadSection';
import GYIK from './GYIK';
import Velemenyek from './Velemenyek';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2c885a',
    },
    success: {
      main: '#60d621',
      contrastText: '#000'
    }
  }
});

export default function App(){
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <RespAppBar />
          <Container sx={{backgroundColor: 'rgba(255, 255, 255, .95)'}}>
            <Container sx={{backgroundColor: '#fff'}}>
              <Ismertetes />
              <DownloadSection first={true} />
              <GYIK />
              <DownloadSection />
              <Velemenyek />
            </Container>
          </Container>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}
