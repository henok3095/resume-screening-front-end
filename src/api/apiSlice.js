import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api", // Unique name for the API slice
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    prepareHeaders: (headers, { getState }) => {
      // Get token from localStorage or Redux state
      const token = localStorage.getItem("token"); // Or use getState() to fetch from Redux store

      // If token exists, add it as a Bearer token to the Authorization header
      if (token) {
        console.log("token found");
        headers.set("Authorization", `Bearer ${token}`);
      } else {
        console.log(token);
        return;
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => "/users/get-all-posts",
    }),
    login: builder.mutation({
      query: (loginParameters) => ({
        url: "/admin-auth/login",
        method: "POST",
        body: loginParameters,
      }),
    }),
    createPost: builder.mutation({
      query: (CreatePost) => ({
        url: "/admin/create-posts",
        method: "POST",
        body: CreatePost,
      }),
    }),
    createApplication: builder.mutation({
      query: ({CreateApplication, id}) => ({
        url: `/users/apply/${id}`,
        method: "POST",
        body: CreateApplication,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useCreatePostMutation,
  useCreateApplicationMutation,
  useGetAllPostsQuery,
} = apiSlice; // Export hooks
