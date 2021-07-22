import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card, CardActionArea, CardContent, CardMedia, Typography, Grid, Paper, CircularProgress
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  paper: {
    textAlign: 'center',
  },
});

const images = {
  lviv: 'https://www.ebrdgreencities.com/assets/Uploads/bb1d68f6d4/lviv-625.png',
  kyiv: 'https://www.ebrdgreencities.com/assets/Uploads/7ab643a22d/kiev.jpg',
  kharkiv: 'https://cdnp.flypgs.com/files/Sehirler-long-tail/Kharkiv/kharkiv-sehir.jpg',
};

const capitalize = (word) => word[0]?.toUpperCase() + word.substring(1).toLowerCase();

export const CityCard = ({ weatherForecast, city, isLoading }) => {
  const classes = useStyles();

  if(weatherForecast) {
    return (<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
            className={classes.media}
            image={images[city]}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            {capitalize(city)}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs>
              <Paper className={classes.paper}>{weatherForecast?.description}</Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>{weatherForecast?.temperature}</Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>{weatherForecast?.wind}</Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {weatherForecast?.forecast?.map((el) => (
                <Grid item xs key={el.day}>
                  <Paper className={classes.paper}>{`Day ${el.day}`}</Paper>
                  <Paper className={classes.paper}>{el.temperature}</Paper>
                  <Paper className={classes.paper}>{el.wind}</Paper>
                </Grid>
            ))}
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>)
  }
  return isLoading ? <CircularProgress /> : null;

};

export default CityCard;
