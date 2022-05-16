import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  dbPokemon1: {},
  dbPokemon2: {},
  dbPokemon3: {},
  dbScan: {},
};

const crudReducer = createSlice({
  name: "crudReducer",
  initialState,
  reducers: {
    READ_ALL_DATA_1: (state, action) => {
      state.dbPokemon1 = Object.assign(state.dbPokemon1, action.payload)
      console.log(action.payload);
    },
    READ_ALL_DATA_2: (state, action) => {
      state.dbPokemon2 = Object.assign(state.dbPokemon2, action.payload);
    },
    READ_ALL_DATA_3: (state, action) => {
      state.dbPokemon3 = Object.assign(state.dbPokemon3, action.payload);
    },
    STORAGE_SCAN: (state, action) => {
      state.dbScan = Object.assign(state.dbScan, action.payload);
    },
  },
});

export const {
  READ_ALL_DATA_1,
  READ_ALL_DATA_2,
  READ_ALL_DATA_3,
  STORAGE_SCAN,
} = crudReducer.actions;

export default crudReducer.reducer;
