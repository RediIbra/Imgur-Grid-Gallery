import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  status: "",
};

const apiSlice = createSlice({
  name: "apiCall",
  initialState,
  reducers: {
    apiRequest: (state) => {
      state.loading = true;
    },
    apiSuccess: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.error = "";
    },
    apiFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { apiRequest, apiSuccess, apiFailure } = apiSlice.actions;
export default apiSlice.reducer;
