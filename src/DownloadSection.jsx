import DownloadButton from "./DownloadButton";
import { Box } from "@mui/system";

const DownloadSection = (props) => {
  return (
    <div id={(props.first) ? 'letoltes' : 'letoltes2'}>
      <Box sx={{display: 'flex', justifyContent: 'center', paddingY: '.5em'}}>
        <DownloadButton />
      </Box>
    </div>
  );
}
export default DownloadSection;
