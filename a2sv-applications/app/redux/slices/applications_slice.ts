import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "process";

const API = env.API_URL || "http://localhost:5000/applications";

export const applicationsApi = createApi({
  reducerPath: "applicationsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["Application"],
  endpoints: (builder: {
    mutation(arg0: {
      query: (body: any) => { url: string; method: string; body: any };
      invalidatesTags: string[];
    }): any;
    // query: (arg0: { query: () => string }) => any;
    query(arg0: { query: (id: any) => string }): any;
  }) => ({
    getInpersonApplications: builder.query({
      query: () => "inperson",
    }),

    addApplication: builder.mutation({
      query: (body: any) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Application"],
    }),

    getInpersonApplicants: builder.query({
      query: () => "applicants/inperson",
    }),

    /* getting applicant by id*/
    getApplicationById: builder.query({
      query: (id: any) => `id/${id}`,
    }),

    getApplicationStats: builder.query({
      query: () => "stats",
    }),

    addTextField: builder.mutation({
      query: (body: any) => ({
        url: "/textfield",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Application"],
    }),

    addDropdownField: builder.mutation({
      query: (body: any) => ({
        url: "/dropdownfield",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Application"],
    }),

    getSchoolStats: builder.query({
      query: () => "schoolstats",
    }),
  }),

});

// export the hooks
export const {
  useGetInpersonApplicationsQuery,
  useAddApplicationMutation,
  useGetInpersonApplicantsQuery,
  useGetApplicationByIdQuery,
  useGetApplicationStatsQuery,
  useAddTextFieldMutation,
  useAddDropdownFieldMutation,
  useGetSchoolStatsQuery,
} = applicationsApi;
