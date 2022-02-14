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
    // addContact: (state, action) => {
    //   return { ...state, items: [action.payload, ...state.items] };
    // },
    // deleteContact: (state, action) => {
    //   state.items = state.items.filter(({ id }) => id !== action.payload);
    // },
    changeFilter: (state, action) => {
      return { ...state, filter: action.payload };
    },
  },
  extraReducers: {
    [fetchContacts.pending]: (state, _) => {
      state.isLoading = true;
      // state.items = action.payload;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    // [addContact.pending]: (state, _) => {
    //   state.isLoading = true;
    // },
    [addContact.fulfilled]: (state, action) => {
      return {
        ...state,
        items: [action.payload, ...state.items],
        isLoading: false,
      };
    },
    [deleteContact.pending]: (state, _) => {
      state.isLoading = true;
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
  },
});
export default contactsSlice.reducer;
export const { changeFilter } = contactsSlice.actions;
// { id: nanoid(), name: "Rosie Simpson", number: "459-12-56" },
// { id: nanoid(), name: "Hermione Kline", number: "443-89-12" },
// { id: nanoid(), name: "Eden Clements", number: "645-17-79" },
// { id: nanoid(), name: "Annie Copeland", number: "227-91-26" },
