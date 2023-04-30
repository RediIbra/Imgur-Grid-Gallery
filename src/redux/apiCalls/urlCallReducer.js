import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  status: "",
  data: [],
};

const apiSlice = createSlice({
  name: "urlRequest",
  initialState,
  reducers: {
    apiRequest: (state) => {
      state.loading = true;
    },
    apiSuccess: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    apiFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { apiRequest, apiSuccess, apiFailure } = apiSlice.actions;
export default apiSlice.reducer;
