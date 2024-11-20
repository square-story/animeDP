import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    apiUrl: 'https://anime.kirwako.com/api/avatar?name=&gender=',
};

const apiSlice = createSlice({
    name:'api',
    initialState,
    reducers:{
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setApiUrl: (state, action) => {
            state.apiUrl = action.payload;
        }
    }
})

export const { setLoading, setError, setApiUrl } = apiSlice.actions;

export default apiSlice.reducer;