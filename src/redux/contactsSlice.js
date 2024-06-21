import { createSelector, createSlice } from "@reduxjs/toolkit";

import { fetchContacts, addContact, deleteChosenContact } from "./contactsOps";
import { getContacts, getNameFilter } from "./selectors";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteChosenContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteChosenContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.filter((item) => item.id !== action.payload.id);
      })
      .addCase(deleteChosenContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const getFilteredContacts = createSelector(
  [getContacts, getNameFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectNameFilter],
//   (contacts, filter) => {
//     if (!filter) {
//       return contacts;
//     }
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );

// const { reducer: contactsReducer } = contactsSlice;
// export default contactsReducer;

export default contactsSlice.reducer;
