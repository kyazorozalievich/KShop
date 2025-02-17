import { api as index } from "..";

const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
  endpoints: (build) => ({
    postKShop: build.mutation<KShop.postKShopResponse, KShop.postKShopRequest>({
      query: (data) => ({
        url: `/${ENDPOINT}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["kshop"],
    }),
    getKShop: build.query<KShop.getKShopResponse, KShop.getKShopRequest>({
      query: () => ({
        url: `/${ENDPOINT}`,
        method: "GET",
      }),
      providesTags: ["kshop"],
    }),
    patchKShop: build.mutation<
      KShop.patchKShopResponse,
      KShop.patchKShopRequest
    >({
      query: ({ id, data }) => ({
        url: `/${ENDPOINT}/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["kshop"],
    }),
    deleteKShop: build.mutation<
      KShop.deleteKShopResponse,
      KShop.deleteKShopRequest
    >({
      query: (id) => ({
        url: `/${ENDPOINT}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["kshop"],
    }),
  }),
  overrideExisting: true,
});

export const {
  usePostKShopMutation,
  useGetKShopQuery,
  usePatchKShopMutation,
  useDeleteKShopMutation,
} = api;
