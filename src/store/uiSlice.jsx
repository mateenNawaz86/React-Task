import { createSlice } from "@reduxjs/toolkit";

const initialState = { employees: [] };

const uiSlice = createSlice({
  name: "ui-slice",
  initialState, 
  reducers: {
    addEmployee(state, actions) {
      state.employees.push(actions.payload);
    },
    deleteEmployee(state, action) {
      state.employees = state.employees.filter(
        (user) => user.id !== action.payload.id
      );
    },
    // updateEmployeeDetail(state, action) {},
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
