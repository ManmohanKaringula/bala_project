import { Card } from "@mui/material";
import TextField from '@mui/material/TextField';
import './pptGenerator.css'; // Import the CSS file
import Button from '@mui/material/Button';

const Pptgenerator = () => {
  return (
    <div className="items">
      <Card sx={{
        width: '80%', /* Full width of the parent container */
        height: '300px', /* Full height of the parent container */
        borderRadius: '30px',
        background: 'rgb(255, 255, 255)',
        boxShadow: '0px 2px 4px rgba(255, 255, 255, 0.5)', /* Adjusted shadow */
        display: 'flex', /* Added for centering contents */
        flexDirection: 'column',
        padding: '16px', /* Added padding */
        marginTop: '40px'
      }}>
      </Card>
      <TextField id="outlined-basic" label="Youtube Link" variant="outlined" style= {{background: 'white'}}/>
      <Button variant="contained">Generate</Button>
    </div>
  );
};

export default Pptgenerator;