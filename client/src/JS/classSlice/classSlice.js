import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
export const getclass = createAsyncThunk('/getclass', async () => {
    try {
        let resultat = axios.get('http://localhost:5000/eleve/getclass')
        return await resultat;
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    classes:null,
    status:null
}

export const classSlice = createSlice({
    name: 'class',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
            builder.addCase(getclass.pending, (state) => {
                state.status = "pendding";
            })
            .addCase(getclass.fulfilled, (state,action) => {
                state.status = "success";
                state.telmidh = action.payload?.data.list;
            })
            .addCase(getclass.rejected, (state) => {
                state.status = "failed";
            })
    }
})

// Action creators are generated for each case reducer function
export const { } = classSlice.actions

export default classSlice.reducer