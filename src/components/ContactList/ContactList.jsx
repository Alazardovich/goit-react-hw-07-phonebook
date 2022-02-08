// import React, { Component } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import ContactItem from "../ContactItem/Item";
import { getVisibleItems } from "../../redux/contacts/contactsSelected";
import { ListContainer } from "./CSSContactList";

const ContactList = () => {
  const items = useSelector(getVisibleItems);

  return (
    <ListContainer>
      {items.map(({ id, name, number }) => {
        return <ContactItem key={id} id={id} name={name} number={number} />;
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
