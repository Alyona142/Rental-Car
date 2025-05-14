import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../help/axios";

export const getAllCars = createAsyncThunk(
  "cars/getAll",
  async (filters, thunkAPI) => {
    try {
      const response = await API.get("/cars", {
        params: filters,
      });

      return {
        cars: response.data.cars,
        totalItems: response.data.total,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
