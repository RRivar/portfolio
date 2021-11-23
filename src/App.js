import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Cards from './components/Cards';
import { Container } from '@mui/material';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Cards />
          </Grid>
          <Grid item xs={4}>
            <Cards />
          </Grid>
          <Grid item xs={4}>
            <Cards />
          </Grid>
          <Grid item xs={4}>
            <Cards />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
