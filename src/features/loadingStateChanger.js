import { createSlice } from '@reduxjs/toolkit'

export const loadingStateChangerSlice = createSlice({
    name: 'loading',
    initialState: {
        value: false,
    },
    reducers: {
        setWeather: (state, action) => {
            return {
                ...state,
                value: action.payload
            }
        }
    }
});

export const { setLoading } = loadingStateChangerSlice.actions;

export default loadingStateChangerSlice.reducer;