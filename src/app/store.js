import {configureStore} from "@reduxjs/toolkit";
import weather from "../features/weatherSlice";

const store = configureStore({
    reducer: {
        weather: weather
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;
