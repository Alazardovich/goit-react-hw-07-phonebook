import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import contacts from "./contacts/contactsSlice";

const middleware = [...getDefaultMiddleware()];

export const store = configureStore({
  reducer: {
    contacts,
  },
  middleware,
});
export default store;
