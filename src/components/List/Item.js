import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';


export const Item = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li>
      <p>{name}</p>
      <p>{phone}</p>
      <button type="button" aria-label="delete contact" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};
