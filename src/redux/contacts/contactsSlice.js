import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";
import { fetchContacts, addContact, deleteContact } from "./contAsyncThunk";
// import Api from "Fetch-api/Api";

// Api.fetchContacts().then((responce) => console.log(responce));

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      return { ...state, filter: action.payload };
    },
  },
  extraReducers: {
    [fetchContacts.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.fulfilled]: (state, action) => {
      return {
        ...state,
        items: [action.payload, ...state.items],
        isLoading: false,
      };
    },
    [addContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.items = state.items.filter(({ id }) => id !== action.payload);
      // console.log("что происходит");
      const index = state.items.findIndex(
        (user) => user.id === action.payload.id
      );
      console.log(index);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export default contactsSlice.reducer;
export const { changeFilter } = contactsSlice.actions;
// { id: nanoid(), name: "Rosie Simpson", number: "459-12-56" },
// { id: nanoid(), name: "Hermione Kline", number: "443-89-12" },
// { id: nanoid(), name: "Eden Clements", number: "645-17-79" },
// { id: nanoid(), name: "Annie Copeland", number: "227-91-26" },
