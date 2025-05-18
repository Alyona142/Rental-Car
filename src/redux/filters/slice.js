import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: "",
  price: "",
  mileage: { from: "", to: "" },
  equipment: [],
  location: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setBrand(state, action) {
      state.brand = action.payload;
    },
    setPrice(state, action) {
      state.price = action.payload;
    },
    setMileageFrom(state, action) {
      state.mileage.from = action.payload;
    },
    setMileageTo(state, action) {
      state.mileage.to = action.payload;
    },
    setLocation(state, action) {
      state.location = action.payload;
    },
    toggleEquipment(state, action) {
      const value = action.payload;
      if (state.equipment.includes(value)) {
        state.equipment = state.equipment.filter((item) => item !== value);
      } else {
        state.equipment.push(value);
      }
    },
    resetFilters(state) {
      state.brand = "";
      state.price = "";
      state.mileage = { from: "", to: "" };
      state.equipment = [];
      state.location = "";
    },
  },
});

export const {
  setBrand,
  setPrice,
  setMileageFrom,
  setMileageTo,
  setLocation,
  toggleEquipment,
  resetFilters,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
export const selectLocation = (state) => state.filters.location;
