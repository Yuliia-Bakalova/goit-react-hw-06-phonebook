import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/slices/contactsSlice';
import {
  ListItem,
  List,
  Button,
} from './ContactList.styled';



export const ContactList = () => {
  const contactsList = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterListContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filtered = filterListContacts();

  return (
    <List>
      {filtered.map(({ id, name, number }) => (
        <ListItem key={id}>       
            {name} : {number}
          <Button
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
