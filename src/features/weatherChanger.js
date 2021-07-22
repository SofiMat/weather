import { createSlice } from '@reduxjs/toolkit'

export const weatherChangerSlice = createSlice({
    name: 'weather',
    initialState: {
        value: null,
    },
    reducers: {
        setWeather: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { setWeather } = weatherChangerSlice.actions;

export default weatherChangerSlice.reducer;