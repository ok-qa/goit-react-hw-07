import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      const newContact = action.payload;
      state.items = [...state.items, newContact];
    },
    deleteChosenContact: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const { addContact, deleteChosenContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.items;

export default contactsSlice.reducer;
