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
    updateEmployee(state, action) {
      const newName = window.prompt(
        "Enter new name",
        action.payload.enteredName
      );
      const newSalary = window.prompt(
        "Enter new salary",
        action.payload.enteredSalary
      );
      if (newName) {
        state.employees = state.employees.map((item) => {
          if (item.id === action.payload.id) {
            item.enteredName = newName;
            item.enteredSalary = newSalary;
          }
          return item;
        });
      }
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
