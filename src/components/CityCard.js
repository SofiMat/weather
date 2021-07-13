import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    paper: {
        textAlign: 'center',
    }
});

const images = {
    lviv: 'https://www.ebrdgreencities.com/assets/Uploads/bb1d68f6d4/lviv-625.png',
    kyiv: 'https://www.ebrdgreencities.com/assets/Uploads/7ab643a22d/kiev.jpg',
    kharkiv: 'https://cdnp.flypgs.com/files/Sehirler-long-tail/Kharkiv/kharkiv-sehir.jpg'
}

const returnImage = (city) => {
    return city === 'lviv' ? images.lviv : city === 'kyiv' ? images.kyiv : images.kharkiv;
}

const capitalize = (word) => {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

export const CityCard = ({ weatherForecast, city }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={returnImage(city)}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
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
                    {weatherForecast?.forecast?.map(el => (
                        <>
                            <Paper className={classes.paper}>{el.day}</Paper>
                            <Paper className={classes.paper}>{el.temperature}</Paper>
                            <Paper className={classes.paper}>{el.wind}</Paper>
                        </>
                    ))}
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CityCard;