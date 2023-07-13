import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface data {
    currentDate: string,
    dateOfBirth: string
}

const initalState: data = {
    currentDate: new Date().toISOString(),
    dateOfBirth: new Date().toISOString()
}

const dateSlice = createSlice({
    name: 'DateSlice',
    initialState: initalState,
    reducers: {
        updateCurrentDate: (state: any, action: PayloadAction<any>) => {
            state.currentDate = action.payload
        },
        updateDateOfBirth: (state: any, action: PayloadAction<any>) => {
            state.dateOfBirth = action.payload
        },
    }
})

export default dateSlice.reducer

export const { updateCurrentDate, updateDateOfBirth } = dateSlice.actions