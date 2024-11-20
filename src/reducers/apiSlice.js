import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    apiUrl: 'https://anime.kirwako.com/api/avatar',
    imageUrl:null,
};

export const fetchImage = createAsyncThunk(
    'api/featchImage',
    async({name,gender,animeName},{rejectWithValue})=>{
        try {
            const response = await fetch(
                `https://anime.kirwako.com/api/avatar?name=${name}&gender=${gender}&animeName=${animeName}`
            )

            if(!response.ok){
                throw new Error('faild to featch image');
            }
            return response.url;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

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
    },
    extraReducers:(builder)=>{
        builder
            .addCase(fetchImage.pending,(state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchImage.fulfilled,(state,action)=>{
                state.loading = false;
                state.imageUrl = action.payload;
            })
            .addCase(fetchImage.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.payload
            })
    }
})

export const { setLoading, setError, setApiUrl } = apiSlice.actions;

export default apiSlice.reducer;