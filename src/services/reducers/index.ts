import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/config";
import { TParamRequest, TBook, TBookInfo } from "../../utils/types";

const keyAPI = process.env.REACT_APP_API_KEY || "/";

export const getBooks = createAsyncThunk(
  "get/getBooks",
  async (param: TParamRequest, { rejectWithValue, dispatch }) => {
    const { search, start, sorting } = param;
    try {
      const response = await fetch(
        `${BASE_URL}volumes?q=${search}&printType=books&orderBy=${sorting}&startIndex=${start}&maxResults=30&key=${keyAPI}`
      );
      const data = await response.json();
      
      if (!data.error) {
        return data;
      } else {
        dispatch(addError(data.error.message));
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

interface ICatalog {
  books: TBook[],
  card: any,
  total: number,
  preloader: boolean,
  error: string | undefined,
  category: string,
  sorting: string,
  search: string,
  startIndex: number,
}

const initialState: ICatalog = {
  books: [],
  card: null,
  total: 0,
  preloader: false,
  error: '',
  category: "all",
  sorting: "relevance",
  search: "",
  startIndex: 0,
};

const catalog = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    addCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    addSorting(state, action: PayloadAction<string>) {
      state.sorting = action.payload;
    },
    addError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    addSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    addStartIndex(state, action: PayloadAction<number>) {
      state.startIndex = action.payload;
    },
    deleteBooks(state) {
      state.books = [];
      state.total = 0;
    },
    addCard(state, action){
      state.card = action.payload;
    },
    deleteCard(state){
      state.card = null;
    }
  },

  extraReducers: (builder) => {
    /** getBooks */
    builder.addCase(getBooks.pending, (state) => {
      state.preloader = true;
      state.error = '';
    });
    builder.addCase(getBooks.fulfilled, (state, { payload }) => {
      if (payload.items) {
        if (!state.books) {
          state.books = payload.items
        } else {
          state.books = state.books.concat(payload.items);
        }
        state.total = payload.totalItems;
      }else{
        state.books = []
      }
      state.preloader = false;
    });
    builder.addCase(getBooks.rejected, (state, { error }) => {
      state.preloader = false;
      state.error = error.message;
    });
  },
});

export const {
  addCategory,
  addSorting,
  addError,
  addSearch,
  addStartIndex,
  deleteBooks,
  addCard,
  deleteCard
} = catalog.actions;

export default catalog.reducer;
