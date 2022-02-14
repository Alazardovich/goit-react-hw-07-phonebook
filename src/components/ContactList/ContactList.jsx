// import React, { Component } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import ContactItem from "../ContactItem/Item";
import { getVisibleItems, getLoading } from "redux/contacts/contactsSelected";
import { ListContainer } from "./CSSContactList";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/contAsyncThunk";

const ContactList = () => {
  const items = useSelector(getVisibleItems);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return loading ? (
    <p>...Loading</p>
  ) : (
    <ListContainer>
      {items.map(({ id, name, phone }) => {
        return <ContactItem key={id} id={id} name={name} number={phone} />;
      })}
    </ListContainer>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};
export default ContactList;
