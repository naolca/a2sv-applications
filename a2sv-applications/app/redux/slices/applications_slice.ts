import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "process";

const API = env.API_URL || "http://localhost:5000/applications";

export const applicationsApi = createApi({
    reducerPath: "applicationsApi",
    baseQuery: fetchBaseQuery({ baseUrl: API }),
    tagTypes: ["Application"],
    endpoints: (builder: { query: (arg0: { query: () => string; }) => any; }) => ({
        getInpersonApplications: builder.query({
            query: () => "inperson",
           
        }),
    
    }),
});


// export the hooks
export const { useGetInpersonApplicationsQuery } = applicationsApi;