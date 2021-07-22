import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const getCityWeather = (city) => axios.get(`https://goweather.herokuapp.com/weather/${city}`);
