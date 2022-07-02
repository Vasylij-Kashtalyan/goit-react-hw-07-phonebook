import { addContact, fetchContacts, removeContact } from "./phonebookOperation";
import { createSlice } from "@reduxjs/toolkit";

const setPending = (state) => {
  state.status = "loading";
  state.error = null;
};

const setError = (state, { payload }) => {
  state.status = "rejected";
  state.error = payload;
};

const phonebookSlice = createSlice({
  name: "contacts",
  initialState: { entities: [], filter: "", status: null, error: null },
  reducers: {
    filterContacts: (state, { payload }) => {
      return { ...state, filter: payload };
    },
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.status = "resolved";
      state.entities = payload;
    },

    [removeContact.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        status: null,
        entities: state.entities.filter(({ id }) => {
          return id !== payload.id;
        }),
      };
    },

    [addContact.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        status: null,
        entities: [...state.entities, payload],
      };
    },

    [fetchContacts.pending]: setPending,
    [fetchContacts.rejected]: setError,

    [addContact.pending]: setPending,
    [addContact.rejected]: setError,

    [removeContact.pending]: setPending,
    [removeContact.rejected]: setError,
  },
});

export default phonebookSlice.reducer;
export const { filterContacts } = phonebookSlice.actions;
