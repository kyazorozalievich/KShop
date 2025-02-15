import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    postFile: build.mutation<
      UPLOAD.uploadKShopResponse,
      UPLOAD.uplaodKShopRequest
    >({
      query: (data) => ({
        url: "/upload/file",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["kshop"],
    }),
  }),
});

export const { usePostFileMutation } = api;
