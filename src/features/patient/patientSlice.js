import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  patientUsers: [],
  patientId: [],
  doctorUsers: [],
  temperature: [],
};

export const getId = createAsyncThunk("patient/getId", () => {
  return fetch(`http://localhost:5000/id`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

export const getPatients = createAsyncThunk("patient/getPatients", () => {
  return fetch(`http://localhost:5000/patients`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

export const getDoctors = createAsyncThunk("patient/getDoctors", () => {
  return fetch(`http://localhost:5000/doctors`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    addTemp: (state, action) => {
      const temp = action.payload;
      state.temperature.push(temp);
    },
  },
  extraReducers: {
    [getId.fulfilled]: (state, action) => {
      state.patientId = action.payload;
    },
    [getPatients.fulfilled]: (state, action) => {
      state.patientUsers = action.payload;
    },
    [getDoctors.fulfilled]: (state, action) => {
      state.doctorUsers = action.payload;
    },
  },
});

export const { addTemp } = patientSlice.actions;

export default patientSlice.reducer;
