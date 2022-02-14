import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Item } from "./CSSContactItem";
import { deleteContact, fetchContacts } from "redux/contacts/contAsyncThunk";
// import { getLoading } from "../../redux/contacts/contactsSelected";

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  // const loading = useSelector(getLoading);

  const [nameId, setNameId] = useState(null);

  const handleClick = (id) => {
    setNameId(id);
    dispatch(deleteContact(id));
    // dispatch(fetchContacts());
  };

  return (
    <Item>
      <span>
        {name}: {number}
      </span>

      <button type="button" onClick={() => handleClick(id)}>
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
