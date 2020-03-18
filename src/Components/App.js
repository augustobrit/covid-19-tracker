import React, { useState } from "react";
import { useEffect } from "react";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

import Header from "./Header";
import Navigation from "./Navigation";
import Stat from "./Stat";
import CountrySelect from "./CountrySelect";
import Copyright from "./Copyright";
import Loading from "./Loading";

const API_GLOBAL = "https://covid19.mathdro.id/api";
const API_COUNTRIES = "https://covid19.mathdro.id/api/countries";

const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff"
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000"
      },
      type: "dark"
    }
  });

  const useStyles = makeStyles(theme => ({
    main: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }));

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <div className={classes.main}>
          <CssBaseline />
          <Header />
          <br />
          <Navigation />
          <br />
          <Stat url={API_GLOBAL} title={"Global Stats"} />
          <br />
          <Copyright />
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default App;
