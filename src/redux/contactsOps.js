import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://667393ca6ca902ae11b4a00d.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async(_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async(contact, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', contact);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteChosenContact = createAsyncThunk(
    'contacts/deleteContact',
    async(contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts, ${contactId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);