import { Container, Grid } from "@mui/material";
import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/routes/AppRouter";


function App() {
  return (
    <BrowserRouter>
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 0 },
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Header />
        <Grid container sx={{alignItems:"center", justifyContent:"center"}}>
          <Grid item sx={{display:"flex",alignItems:"center", m:2}}> <AppRouter /> </Grid>
        </Grid>
      </Container>
    </BrowserRouter>
  );
}

export default App;
