import { Txt2ImageResponse, Txt2ImageParams } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.NEXT_PUBLIC_API_ROOT

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    text2img: builder.mutation<string, Txt2ImageParams>({
      query: (body) => ({
        url: '/sdapi/v1/txt2img',
        method: 'POST',
        body,
      }),
      transformResponse: (res: Txt2ImageResponse) => String(res.images[0]),
    }),
  }),
})

export const { useText2imgMutation } = baseApi
