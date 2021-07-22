import { createSlice } from '@reduxjs/toolkit'

export const cityChangerSlice = createSlice({
    name: 'city',
    initialState: {
        value: '',
    },
    reducers: {
        setCity: (state, action) => {
            return {
                ...state,
                value: action.payload
            }
            // state.value = action.payload
        }
    }
});

export const { setCity } = cityChangerSlice.actions;

export default cityChangerSlice.reducer;