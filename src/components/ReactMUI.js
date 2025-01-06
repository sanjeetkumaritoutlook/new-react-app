import React from 'react';
//npm install @mui/material @emotion/react @emotion/styled
//https://mui.com/getting-started/installation/
//Material UI is a popular React component library that provides a wide variety of components.
//npm install @mui/icons-material
//https://mui.com/components/material-icons/
//Material-UI uses Roboto as its default font. Add it to your index.html or include it in your project using:
//npm install @fontsource/roboto
//https://mui.com/components/buttons/
//Material-UI comes with an extensive icon library. 
// Import and use icons from the @mui/icons-material package.
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button,Typography, Paper } from '@mui/material';
//Grid is deprecated, use Grid2 instead
//https://mui.com/material-ui/react-grid2/
import Grid from '@mui/material/Grid2';

import { Save } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

//Material-UI supports theming to customize colors, typography, spacing, and more.
// Use the ThemeProvider to apply a custom theme across your app.
const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#ff4081',
      },
    },
    typography: {
      fontFamily: 'Arial',
    },
  });
  const CustomButton = styled(Button)({
    backgroundColor: '#00796b',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#004d40',
    },
  });
  
function ReactMUI() {
    return (
        <div>
     <h1>Material-UI Example</h1>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
      <ThemeProvider theme={theme}>
      <Typography variant="h4" gutterBottom>
        Custom Themed App
      </Typography>
      <Button variant="contained" color="primary">
        Primary Button
      </Button>
      <Button variant="contained" color="secondary">
        Secondary Button
      </Button>
    </ThemeProvider>
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Paper elevation={3} style={{ padding: '16px' }}>
          <Typography>Left Side</Typography>
        </Paper>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Paper elevation={3} style={{ padding: '16px' }}>
          <Typography>Right Side</Typography>
        </Paper>
      </Grid>
    </Grid>
    <Button variant="contained" color="primary" startIcon={<Save />}>
      Save
    </Button>
    <Grid container>
  <Grid  size={{ xs: 12, sm: 6 }}>
    Left
  </Grid>
  <Grid  size={{ xs: 12, sm: 6 }}>
    Right
  </Grid>
</Grid>
<Button sx={{ backgroundColor: 'primary.main', color: 'white' }}>
  Custom Button
</Button>
<CustomButton>Styled Button</CustomButton>
        </div>
    );
}
export default ReactMUI;
//without parent div , it can be written in single line return statement
/*const App = () => {
  return <CustomButton>Styled Button</CustomButton>;
};
*/