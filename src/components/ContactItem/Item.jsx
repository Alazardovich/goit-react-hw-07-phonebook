// import React, { Component } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Item } from "./CSSContactItem";
import { deleteContact } from "../../redux/contacts/contactsSlice";

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <span>
        {name}: {number}
      </span>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.node.isRequired,
  // onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default ContactItem;
