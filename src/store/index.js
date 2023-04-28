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
    generes: [],
};

export const getGeneres = createAsyncThunk("netflix/generes", async()=>{
    const {data} = await axios.get(
        `${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`
        );
        console.log(data);
        // return data;
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
