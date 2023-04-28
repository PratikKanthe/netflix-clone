import {
    configureStore,
    createAsyncThunk,
    createSlice,
} from "@reduxjs/toolkit"
import { API_KEY, TMDB_BASE_URL } from "../utils/constant";
import axios from "axios";


const initialState = {
    movies: [],
    generesLoaded: false,
    genres: [],
};

export const getGeneres = createAsyncThunk("netflix/genres", async()=>{
    const { 
        data: {genres},
    } = await axios.get(
        `${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`
        );
        return genres;
});

const NetflixSlice = createSlice({
    name: "Netflix",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getGeneres.fulfilled,(state,action)=> {
            state.generes = action.payload;
            state.generesLoaded=true;
        })
    }
});

export const store = configureStore({
    reducer: {
        netflix: NetflixSlice.reducer,
    }
});
