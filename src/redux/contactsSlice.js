import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteChosenContact } from "./contactsOps";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(fetchContacts.pending, state => {
      state.loading = true;
    })
    .addCase(fetchContacts.fulfilled, (state, action)=>{
      state.loading = false;
      state.error = null;
      state.items = action.payload;
    })
    .addCase(fetchContacts.rejected, (state, action)=>{
      state.loading = false;
      state.error = action.error.message;
    })
    .addCase(addContact.pending, state => {
      state.loading = true;
    })
    .addCase(addContact.fulfilled, (state, action)=>{
      state.loading = false;
      state.error = null;
      state.items.push(action.payload);
    })
    .addCase(addContact.rejected, (state, action)=>{
      state.loading = false;
      state.error = action.error.message;
    })
    .addCase(deleteChosenContact.pending, state => {
      state.loading = true;
    })
    .addCase(deleteChosenContact.fulfilled, (state, action)=>{
      state.loading = false;
      state.error = null;
      state.items.filter(item=>item.id !== action.payload.id);
    })
    .addCase(deleteChosenContact.rejected, (state, action)=>{
      state.loading = false;
      state.error = action.error.message;
    })
  }
  // reducers: {
  //   addContact: (state, action) => {
  //     const newContact = action.payload;
  //     state.items = [...state.items, newContact];
  //   },
  //   deleteChosenContact: (state, action) => {
  //     const id = action.payload;
  //     state.items = state.items.filter((item) => item.id !== id);
  //   },
  // },
});

// export const { addContact, deleteChosenContact } = contactsSlice.actions;
// export const selectContacts = (state) => state.contacts.items;

const { reducer: contactsReducer } = contactsSlice;
export default contactsReducer;
