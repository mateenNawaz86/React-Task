import { createSlice } from "@reduxjs/toolkit";

const initialState = { employees: [] };

const uiSlice = createSlice({
  name: "ui-slice",
  initialState,
  reducers: {
    addEmployee(state, actions) {
      state.employees.push(actions.payload);
    },
    // updateEmployeeDetail(state, action) {},
    // deleteEmployee(state, action) {},
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
