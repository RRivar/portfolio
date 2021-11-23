import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Cards from './components/Cards';
import { Container } from '@mui/material';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8m6Lzi4Rli5mc4l-Mpm0M8AOdIIzb0dY",
  authDomain: "portfolio-7f2b5.firebaseapp.com",
  projectId: "portfolio-7f2b5",
  storageBucket: "portfolio-7f2b5.appspot.com",
  messagingSenderId: "1078610485010",
  appId: "1:1078610485010:web:3214001492df05bfe29dcb",
  measurementId: "G-KL9N56Z67L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
