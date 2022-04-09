import { createSlice } from "@reduxjs/toolkit";

const initialState = { enteredInp: "" };

const uiSlice = createSlice({
  name: "ui-slice",
  initialState,
  reducers: {
    // addEmployee(state) {},
    // updateEmployeeDetail(state, action) {},
    // deleteEmployee(state, action) {},
  },
});

export default uiSlice;
