import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoAPIHeaders = {
	"x-rapidapi-host": "coinranking1.p.rapidapi.com",
	"x-rapidapi-key": "f3e294e8d2mshc47c54fa4b6b6c5p10aa3djsnbd8f9bfe9182",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoAPIHeaders });

export const cryptoApi = createApi({
	reducerPath: "cryptoApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: (count) => createRequest(`/coins?limit=${count}`),
		}),
	}),
});

export const { useGetCryptosQuery } = cryptoApi;
