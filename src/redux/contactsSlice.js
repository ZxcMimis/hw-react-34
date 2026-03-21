import { createSlice } from "@reduxjs/toolkit";
import { getContacts, addContact, removeContact } from "./thunk/contactsThunk";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        return state.filter(contact => contact.id !== action.payload);
      });
  },
});

// Экспортируем редюсер по умолчанию, чтобы store.js мог его импортировать
export default contactsSlice.reducer;