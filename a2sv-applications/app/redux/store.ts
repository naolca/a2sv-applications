import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { applicationsApi } from "./slices/applications_slice";

export const Store = configureStore({
    reducer: {
        [applicationsApi.reducerPath]: applicationsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(applicationsApi.middleware),
});


export type RootState = ReturnType<typeof Store.getState>;
setupListeners(Store.dispatch);