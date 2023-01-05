import './App.css';
import * as React from 'react';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import RespAppBar from './RespAppBar';
import Ismertetes from './Ismertetes';
import DownloadSection from './DownloadSection';
import GYIK from './GYIK';
import Velemenyek from './Velemenyek';
import RAMChooserModal from './RAMChooserModal';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2c885a',
    },
    success: {
      main: '#60d621',
      contrastText: '#fff'
    }
  }
});

export default function App(){
  const [ramModalOpen, setRamModalOpen] = React.useState(false);
  const handleRamModalOpen = () => setRamModalOpen(true);
  const handleRamModalClose = () => setRamModalOpen(false);

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <RespAppBar />
          <Container sx={{backgroundColor: 'rgba(255, 255, 255, .95)', marginTop: '3.5rem', zIndex: -2}}>
            <Container sx={{backgroundColor: '#fff'}}>
              <Ismertetes />
              <DownloadSection
                first={true}
                onClick={handleRamModalOpen}
              />
              <GYIK />
              <DownloadSection
                onClick={handleRamModalOpen}
              />
              <Velemenyek />
              <RAMChooserModal
                ramModalOpen={ramModalOpen}
                handleRamModalClose={handleRamModalClose}
              />
            </Container>
          </Container>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}
