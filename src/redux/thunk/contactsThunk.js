import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContacts = createAsyncThunk("contacts/get", async (_, thunkAPI) => {
  try {
    const res = await axios.get("/contacts");
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk("contacts/add", async (contact, thunkAPI) => {
  try {
    const res = await axios.post("/contacts", contact);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const removeContact = createAsyncThunk("contacts/remove", async (id, thunkAPI) => {
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});