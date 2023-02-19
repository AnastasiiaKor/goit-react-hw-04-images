import PropTypes from 'prop-types';
import { Name, Button } from './ContactItem.styled';
function ContactItem({ name, number, id, onClick }) {
  return (
    <>
      <p>
        <Name>{name}:</Name> {number}
      </p>
      <Button id={id} type="button" onClick={onClick}>
        Delete
      </Button>
    </>
  );
}
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default ContactItem;
