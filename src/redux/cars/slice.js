import { createSlice } from "@reduxjs/toolkit";
import { getAllCars, getCarById } from "./operations";

const initialState = {
  items: [],
  itemById: null,
  isLoading: false,
  isError: null,
  page: 1,
  limit: 3, 
  totalItems: 0,
  hasNextPage: false,
};

const calculateHasNextPage = (state) => {
  const totalPages = Math.ceil(state.totalItems / state.limit);
  state.hasNextPage = state.page < totalPages;
};

const handlePending = (state) => {
  state.isError = null;
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.isError = payload;
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    resetPage(state) {
      state.page = 1;
    },
    incrementPage(state) {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCars.pending, handlePending)
      .addCase(getAllCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { cars, totalItems } = payload;

        if (state.page === 1) {
          state.items = cars;
        } else {
          state.items.push(...cars);
        }

        state.totalItems = totalItems;
        calculateHasNextPage(state);
      })
      .addCase(getAllCars.rejected, (state, action) => {
        handleRejected(state, action);
        state.items = [];
        state.totalItems = 0;
        state.hasNextPage = false;
      })
      .addCase(getCarById.pending, handlePending)
      .addCase(getCarById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.itemById = payload;
      })
      .addCase(getCarById.rejected, (state, action) => {
        handleRejected(state, action);
        state.itemById = null;
      });
  },
});

export const { resetPage, incrementPage } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
