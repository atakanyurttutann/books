import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bookServices from "@/src/services/bookServices";
export const getBooks = createAsyncThunk(
  "getBooks",
  async (body, { rejectWithValue }) => {
    try {
      const response = await bookServices.getBooksFilter(body.params);
      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.data);
    }
  },
);

const initialState = {
  books: [],
  error: "",
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.books = action?.payload?.data;
    });
    builder.addCase(getBooks.rejected, (state, action) => {
      state.error = "Error";
    });
  },
});
