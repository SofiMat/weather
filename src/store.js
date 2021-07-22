import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './features/weatherChanger';
import cityReducer from './features/weatherChanger';
import loadingReducer from './features/loadingStateChanger';


export default configureStore({
  reducer: {
    weather: weatherReducer,
    city: cityReducer,
    loading: loadingReducer
  }
});
