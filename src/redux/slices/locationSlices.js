import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: null
}

const locationSlices = createSlice({
    name: "location",
    initialState,
    reducers: {
        setLocationList: (state, action) => { state.list = action.payload }
    }
});

export const { setLocationList } = locationSlices.actions

export default locationSlices.reducer