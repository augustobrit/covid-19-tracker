import React, { useState } from "react";
import useStat from "../Hooks/useStat";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

const Stat = ({ url, title }) => {
  const { stat, loading, error } = useStat(url);

  const active = () => {
    return stat.confirmed.value - stat.recovered.value - stat.deaths.value;
  };

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography gutterBottom variant="h6">
              CONFIRMED
            </Typography>
            {stat && (
              <Typography gutterBottom variant="body2">
                {active()}
              </Typography>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography gutterBottom variant="h6">
              ACTIVE
            </Typography>
            {stat && (
              <Typography gutterBottom variant="body2">
                {stat.confirmed.value}
              </Typography>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography gutterBottom variant="h6">
              RECOVERED
            </Typography>
            {stat && (
              <Typography gutterBottom variant="body2">
                {stat.recovered.value}
              </Typography>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography gutterBottom variant="h6">
              DEATHS
            </Typography>
            {stat && (
              <Typography gutterBottom variant="body2">
                {stat.deaths.value}
              </Typography>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Divider variant="middle" />
        </Grid>
        <Grid item xs={12}>
          <Typography color="textSecondary" variant="body2" align="center">
            Pinstriped cornflower blue cotton blouse takes you on a walk to the
            park or just down the hall.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Stat;
