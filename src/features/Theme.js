import {createTheme} from '@mui/material';
import {blue} from '@mui/material/colors';

const myTheme = createTheme(
{
    palette :{primary:blue},
    typography: {
        fontFamily: [
          '"Roboto"',
          'sans-serif' // Fallback for browsers without Roboto
        ].join(','),
      },
    
},

)

export default myTheme;