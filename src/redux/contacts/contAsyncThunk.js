import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "Fetch-api/Api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await Api.fetchContacts();
      return contacts;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const addContact = createAsyncThunk(
  "contacts/addContacts",
  async (contactName, { rejectWithValue }) => {
    try {
      const contacts = await Api.addContact(contactName);
      return contacts;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, { rejectWithValue }) => {
    try {
      const contacts = await Api.deleteContact(contactId);
      // console.log(contactId);
      return contacts;
    } catch (error) {
      rejectWithValue(error);
      // console.log(error);
    }
  }
);
