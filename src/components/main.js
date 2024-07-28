import myTheme from "../features/Theme";
import {ThemeProvider} from '@mui/material';
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import CardContent from '@mui/material/CardContent';
import {Link} from 'react-router-dom';
import Typography from '@mui/material/Typography';

const MainComponent =() => {
return (
<ThemeProvider theme={myTheme}>

    <Card  sx={{ width: '70%', height: '300px', borderRadius: '30px', 
        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.8) 100%)', 
        boxShadow: '0px 2px 4px rgba(255, 255, 255, 1)', 
        justifyContent: 'center',
        marginTop: '10%',
        marginLeft: '14%'
    }}>
<CardContent sx={{ display: 'inline', flexDirection: "row", justifyContent: 'center', alignContent:"center" }}>
  
  <Button variant='contained' sx={{ width: 'calc(25% - 10px)', height: '90%', /* Adjust width for spacing */
                                   color: 'white',
                                   borderRadius: '30px',
                                   marginLeft: '25px',
                                   marginTop: '15px' }}
                                   component= {Link}
                                   to='/pptgenerator'>
        <Typography sx={{fontWeight: 'bold', fontFamily: 'Roboto, Arial, sans-serif'}}> PPT Generator</Typography>
  </Button>

  <Button variant='contained' sx={{ width: 'calc(25% - 10px)', height: '90%', /* Adjust width for spacing */
                                   
                                   color: 'white',
                                   borderRadius: '30px',
                                   marginLeft: '120px',
                                   marginTop: '15px' }}
                                   component= {Link}
                                   to='/excelgenerator'>
      <Typography sx={{fontWeight: 'bold', fontFamily: 'Roboto, Arial, sans-serif'}}> Excel Generator</Typography>
  </Button>
  <Button variant='contained' sx={{ width: 'calc(25% - 10px)', height: '90%', /* Adjust width for spacing */
                                   color: 'white',
                                   borderRadius: '30px',
                                   marginLeft: '120px',
                                   marginTop: '15px' }}
                                   component= {Link}
                                   to='/additionalbutton'>
      <Typography sx={{fontWeight: 'bold', fontFamily: 'Roboto, Arial, sans-serif'}}> Additional Button</Typography>
  </Button>
</CardContent>

</Card>
</ThemeProvider>

)

}

export default MainComponent;