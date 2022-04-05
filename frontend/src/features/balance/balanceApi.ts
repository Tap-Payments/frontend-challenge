import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BalanceInterface, ServerResponse } from "../../types";




export const apiSlice = createApi({
  reducerPath: 'balance',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000',
    prepareHeaders(headers) {
      return headers;
    },
  }),
  tagTypes: ["Balance"],
  endpoints(builder) {
    return {
      getBalance: builder.query<BalanceInterface, void>({
        query() {
          return `/api/balance`;
        },
        providesTags: ["Balance"],
      }),
      postBalance: builder.mutation<ServerResponse, number>({
        query(amount) {
          return {
            url: `/api/balance`,
            method: "POST",
            body: {
              amount,
            },
          };
        },
        invalidatesTags: ["Balance"],
      }),
    };
  },
});

export const { useGetBalanceQuery, usePostBalanceMutation } = apiSlice;