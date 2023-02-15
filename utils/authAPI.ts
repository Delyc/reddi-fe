import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Signup {
    "firstName": string,
    "lastName": string,
    "email": string,
    "password": string,
    "username": string,
}


export const AuthApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
    endpoints:(builder) => ({
        signup: builder.query<Signup[], void>({
            query: () => '/accounts/signup'
        }),

    })
})

export const { useSignupQuery } = AuthApi;
