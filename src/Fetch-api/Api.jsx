import axios from "axios";
axios.defaults.baseURL = "https://6202a32e4d21c200170b9951.mockapi.io";

const fetchContacts = () => {
  return axios.get("/contacts").then((responce) => responce.data);
};

const addContact = (contactName) => {
  return axios.post("/contacts", contactName).then((responce) => responce.data);
};

const deleteContact = (contactId) => {
  return axios
    .delete(`/contacts/${contactId}`)
    .then((responce) => responce.data);
};

const updateContact = (contactId, update) => {
  return axios
    .patch(`/contacts/${contactId}`, update)
    .then((responce) => responce.data);
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchContacts, addContact, deleteContact, updateContact };
