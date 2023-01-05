import './App.css';
import * as React from 'react';
import { /*Button,*/ Container, CssBaseline } from '@mui/material';
import RespAppBar from './RespAppBar';
import Ismertetes from './Ismertetes';

export default function App(){
  return (
    <div className='App'>
      <CssBaseline>
        <RespAppBar />
        <Container sx={{backgroundColor: 'white'}}>
          <Ismertetes />
        </Container>
      </CssBaseline>
    </div>
  );
}
