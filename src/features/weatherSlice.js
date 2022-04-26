import {API_BASE_URL, API_KEY} from "../apis/config";
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchWeatherAction = createAsyncThunk(
    "weather/fetch",
    async (payload, {rejectedWithValue, getState, dispatch}) => {
        try {
            let data = await fetch(`${API_BASE_URL}weather?q=${payload}&units=metric&APPID=${API_KEY}`)
            return data.json();
        } catch (error) {
            if (!error?.response) {
                // console.log(error)
                throw error
            }
            return rejectedWithValue(error?.response?.data);
        }
    }
)

const weatherSlice = createSlice({
    name: "weather",
    initialState: {},
    extraReducers: builder => {
        //pending
        builder.addCase(fetchWeatherAction.pending, (state, action) => {
            state.loading = true;
        });
        //fulfilled
        builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
            state.weather = action?.payload;
            state.loading = false;
            state.error = undefined;
        });
        //rejected
        builder.addCase(fetchWeatherAction.rejected, (state, action) => {
            state.loading = false;
            state.weather = undefined;
            state.error = action?.payload;
        });
    },
});


export default weatherSlice.reducer;