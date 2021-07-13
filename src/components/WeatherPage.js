import { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, ButtonGroup } from '@material-ui/core';
import CityCard from "./CityCard";

export const Weather = () => {
    const [weather, setWeather] = useState([]);

    const getCityWeather = (city) => {
        const result = axios.get(`https://goweather.herokuapp.com/weather/${city}`);
        return result;
    }
    let fetchData = () => {};
    useEffect(() => {
        fetchData = async (city) => {
            const response = await getCityWeather(city);
            setWeather(response.data);
        }
    }, []);
    console.log(weather.length);
    return (
        <>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button onClick={() => fetchData('lviv')}>Lviv</Button>
                <Button onClick={() => fetchData('kharkiv')}>Kharkiv</Button>
                <Button onClick={() => fetchData('kyiv')}>Kyiv</Button>
            </ButtonGroup>
        </Grid>
    {weather[0] && <CityCard weatherForecast={weather[0]} city={'Lviv'} />}
        </>
    )
}

export default Weather;