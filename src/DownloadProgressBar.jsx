import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Button } from '@mui/material';

const downloadImage = () => {
  fetch('./pic/downloaded_ram.jpg', {
    method: 'GET',
    headers: {
      'Content-Type': 'image/jpeg',
    },
  })
  .then((response) => response.blob())
  .then((blob) => {
    // Create blob link to download
    const url = window.URL.createObjectURL(
      new Blob([blob]),
    );
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      'downloaded_ram.jpg',
    );

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
  });
}

export default function DownloadProgressBar(props){
  const [progress, setProgress] = React.useState(0);
  const [downloaded, setDownloaded] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          if (!downloaded){
            downloadImage();
            setDownloaded(true);
          }
          //return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant='determinate' value={progress} />
      <Button onClick={props.btnHandleClose} color='error' sx={{marginTop: '1rem'}}>
        {progress !== 100 ? 'Letöltés megszakítása' : 'Bezárás'}
      </Button>
    </Box>
  );
}
