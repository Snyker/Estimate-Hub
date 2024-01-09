import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// initialize an empty api service that we'll inject endpoints into later as needed
export const estimateApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:3000`,
        /*prepareHeaders: async (headers, {getState}) => {
            const token = (getState() as StoreState).auth.token;
            if (token) {
                headers.set('Authorization', 'Bearer ' + token);
            }
        },*/
    }),
    endpoints: () => ({}),
});
