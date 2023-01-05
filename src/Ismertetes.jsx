import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Ismertetes = () => {
  return (
    <div id="ismertetes">
      <Typography variant="h2" component="h1" textAlign='center' marginTop={3} fontWeight={400}>
        RAM Letöltés
      </Typography>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <img src="/pic/pic1.jpg" alt="ram" style={{height: '14em', margin: '.5em'}} />
      </Box>

      <Paper square={true} elevation={8} sx={{padding: '.5em'}}>

        <Typography variant="h6" component='p'>
          Unja már, hogy számítógépe lassú, sokat gondolkozik és nem tudja produktívan munkára, kikapcsolódásra használni? Ismerős érzés az, amikor legszívesebben kihajítaná számítógépét az ablakon?
          Ne habozzon, töltsön le RAM-ot gyorsan, egyszerűen és teljesen ingyen, hogy gondjait megszüntesse! RAM-bó' sosem elég!
        </Typography>
      </Paper>
    </div>
  );
}

export default Ismertetes;