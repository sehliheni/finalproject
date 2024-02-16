import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
export const getteacher = createAsyncThunk('/getteacher', async () => {
    try {
        let resultat = axios.get('http://localhost:5000/teacher/getteacher')
        return await resultat;
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    teacher:null,
    status:null
}

export const techSlice = createSlice({
    name: 'teacher',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
            builder.addCase(getteacher.pending, (state) => {
                state.status = "pendding";
            })
            .addCase(getteacher.fulfilled, (state,action) => {
                state.status = "success";
                state.telmidh = action.payload?.data.list;
            })
            .addCase(getteacher.rejected, (state) => {
                state.status = "failed";
            })
    }
})

// Action creators are generated for each case reducer function
export const {} = techSlice.actions

export default techSlice.reducer