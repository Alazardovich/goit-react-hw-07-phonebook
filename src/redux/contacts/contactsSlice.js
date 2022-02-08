import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [
      { id: nanoid(), name: "Rosie Simpson", number: "459-12-56" },
      { id: nanoid(), name: "Hermione Kline", number: "443-89-12" },
      { id: nanoid(), name: "Eden Clements", number: "645-17-79" },
      { id: nanoid(), name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  },
  reducers: {
    addContact: (state, action) => {
      return { ...state, items: [action.payload, ...state.items] };
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
    changeFilter: (state, action) => {
      return { ...state, filter: action.payload };
    },
  },
});
export default contactsSlice.reducer;
export const { addContact, deleteContact, changeFilter } =
  contactsSlice.actions;
