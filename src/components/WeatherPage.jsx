import { useSelector, useDispatch } from 'react-redux'
import { Grid, Button, ButtonGroup, Box } from '@material-ui/core';

import { CityCard } from './CityCard';
import { getCityWeather } from '../api';
import { setWeather, setCity, setLoading } from '../features';

export const Weather = () => {

  const weather = useSelector((state) => state.weather.value);
  const city = useSelector((state) => state.city.value);
  const loading = useSelector((state) => state.loading.value);
  const dispatch = useDispatch()

  const handleCityClick = async (city) => {
    const response = await getCityWeather(city);
    dispatch(setCity(city));
    dispatch(setWeather(response.data));
    dispatch(setLoading(false));
  };
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={() => handleCityClick('lviv')}>Lviv</Button>
          <Button onClick={() => handleCityClick('kharkiv')}>Kharkiv</Button>
          <Button onClick={() => handleCityClick('kyiv')}>Kyiv</Button>
        </ButtonGroup>
      </Grid>
      {<Box component="div" m={1} alignContent="center">
        <CityCard weatherForecast={weather} city={city} isLoading={loading} />
      </Box>
      }
    </>
  );
};

export default Weather;
