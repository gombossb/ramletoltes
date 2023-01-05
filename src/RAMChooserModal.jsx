import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import DownloadProgress from './DownloadProgress';

const modalBoxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {'xs': '90%', 'md': 700},
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const memories = {
  DDR1: {
    frequencies: [200, 266, 333, 400],
    sizes: ['128MB', '256GB', '512MB', '1GB']
    // todo image?
  },
  DDR2: {
    frequencies: [400, 533, 667, 800, 1033],
    sizes: ['512MB', '1GB', '2GB']
  },
  DDR3: {
    frequencies: [1066, 1333, 1600, 1800],
    sizes: ['1GB', '2GB', '4GB', '8GB']
  },
  DDR4: {
    frequencies: [2133, 2400, 2666, 2933, 3200],
    sizes: ['4GB', '8GB', '16GB', '32GB']
  },
  DDR5: {
    frequencies: [3200, 3600, 4000, 5000, 6400],
    sizes: ['8GB', '16GB', '32GB', '64GB']
  }
}

export default function RAMChooserModal(props){
  const [type, setType] = React.useState('');
  const [frequency, setFrequency] = React.useState('');
  const [size, setSize] = React.useState('');

  const [frequencyMenuItems, setFrequencyMenuItems] = React.useState(null);
  const [sizeMenuItems, setSizeMenuItems] = React.useState(null);

  const handleTypeChange = (event) => {
    setType(event.target.value);

    const frequencyItems = memories[event.target.value]['frequencies'];
    const sizeItems = memories[event.target.value]['sizes'];

    setFrequencyMenuItems(
      frequencyItems.map(f => (
        <MenuItem value={f} key={f}>{f} MHz</MenuItem>
      ))
    );
    setSizeMenuItems(
      sizeItems.map(s => 
        <MenuItem value={s} key={s}>{s}</MenuItem>
      )
    );

    setFrequency('');
    setSize('');
  };
  const handleFreqChange = (event) => {
    setFrequency(event.target.value);
  };
  const handleSizeChange = (event) => {
    setSize(event.target.value);
  }

  // if (!props.ramModalOpen){ infinite loop
  //   setType('');
  //   setFrequency('');
  //   setSize('');
  // }

  return (
    <div>
      <Modal
        open={props.ramModalOpen}
        onClose={props.handleRamModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalBoxStyle}>
          <Typography component='p' fontWeight={500} marginBottom='.5em'>
            Válassza ki, milyen típusú és méretű memóriát szeretne letölteni!
          </Typography>
          <Grid container
            spacing={1}
            sx={{
              display: {'xs': 'flex', 'md': 'block'},
              justifyContent: 'center', paddingY: '.5em'
            }}
          >
            <Grid item xs={12} md={4}>
              <FormControl sx={{ minWidth: 120 }} fullWidth>
                <InputLabel id="select-label-type">Típus</InputLabel>
                <Select
                  labelId="select-label-type"
                  id="type"
                  value={type}
                  label="Típus"
                  onChange={handleTypeChange}
                >
                  {Object.keys(memories).map(t => 
                    <MenuItem value={t} key={t}>{t}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl sx={{ minWidth: 120 }} fullWidth>
                <InputLabel id="select-label-freq">Frekvencia</InputLabel>
                <Select
                  labelId="select-label-freq"
                  id="freq"
                  value={frequency}
                  label="Frekvencia"
                  onChange={handleFreqChange}
                >
                  {frequencyMenuItems}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl sx={{ minWidth: 120 }} fullWidth>
                <InputLabel id="select-label-size">Méret</InputLabel>
                <Select
                  labelId="select-label-size"
                  id="size"
                  value={size}
                  label="Méret"
                  onChange={handleSizeChange}
                >
                  {sizeMenuItems}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <DownloadProgress disabled={!(type && frequency && size)} />
          <Button
            onClick={props.handleRamModalClose}
          >
            Bezárás
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
