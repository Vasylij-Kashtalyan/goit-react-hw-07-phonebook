import phonebookSlice from "./contacts/phonebookSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { contacts: phonebookSlice },
});
