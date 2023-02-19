import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import { List, Item } from './ContactList.styled';
function ContactList({ contacts, onClick }) {
  return (
    <List>
      {contacts.map(({ name, id, number }) => {
        return (
          <Item key={id}>
            <ContactItem
              name={name}
              number={number}
              onClick={onClick}
              id={id}
            />
          </Item>
        );
      })}
    </List>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ContactList;
