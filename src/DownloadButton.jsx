import { Button } from "@mui/material";

const DownloadButton = (props) => {
  return (
    <Button
      variant="contained"
      onClick={props.onClick}
      color='success'
      size='large'
    >
      Letöltés
    </Button>
  );
}
export default DownloadButton;
